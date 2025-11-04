// PROFILE PICTURE 

// only runs the code after the webpage has finished loading
document.addEventListener("DOMContentLoaded", () => {
  // limits how big the image can be
  const MAX_BYTES = 5 * 1024 * 1024;

  // connects the JavaScript to HTML
  const editBtn = document.getElementById("edit-tab-btn");
  const popup = document.getElementById("editPopup");
  const closePopup = document.getElementById("closePopup");

  const el = {
    headerAvatar: document.getElementById("pfp-header"),            // profile picture
    headerInitials: document.getElementById("pfp-header-initials"), // initials 

    avatar: document.getElementById("pfp-modal"),
    initials: document.getElementById("pfp-modal-initials"),
    status: document.getElementById("pfp-status"),
    file: document.getElementById("pfp-file"),
    upload: document.getElementById("pfp-upload"),
    remove: document.getElementById("pfp-remove"),
  };

  function openPopup() {
    if (!popup) return;
    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
  }

  function closePopupFn() {
    if (!popup) return;
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
  }

  if (editBtn) {
    editBtn.addEventListener("click", openPopup);
  }

  if (closePopup) {
    closePopup.addEventListener("click", closePopupFn);
  }

  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closePopupFn();
      }
    });
  }

  if (el.upload && el.file) {
    el.upload.addEventListener("click", () => el.file.click());
  }

  if (el.remove) {
    el.remove.addEventListener("click", removePhoto);
  }

  if (el.file) {
    el.file.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > MAX_BYTES) {
        setStatus("Max size 5MB.");
        return;
      }
      try {
        const dataUrl = await readAsDataURL(file);
        localStorage.setItem("gplan.avatar", dataUrl);
        showPhoto(dataUrl);
        setStatus("Profile photo saved.");
      } catch (err) {
        setStatus("Could not load photo.");
      }
    });
  }

  function readAsDataURL(file) {
    return new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.onerror = rej;
      r.readAsDataURL(file);
    });
  }

  function showPhoto(dataUrl) {
    if (el.avatar) {
      el.avatar.src = dataUrl;
      el.avatar.style.display = "block";
    }
    if (el.initials) el.initials.style.display = "none";

    if (el.headerAvatar) {
      el.headerAvatar.src = dataUrl;
      el.headerAvatar.style.display = "block";
    }
    if (el.headerInitials) el.headerInitials.style.display = "none";
  }

  function removePhoto() {
    localStorage.removeItem("gplan.avatar");

    if (el.avatar) {
      el.avatar.src = "";
      el.avatar.style.display = "none";
    }
    if (el.initials) el.initials.style.display = "grid";

    if (el.headerAvatar) {
      el.headerAvatar.src = "";
      el.headerAvatar.style.display = "none";
    }
    if (el.headerInitials) el.headerInitials.style.display = "grid";

    setStatus("Profile photo removed.");
  }

  function setStatus(msg) {
    if (el.status) el.status.textContent = msg;
  }

  (function init() {
    const saved = localStorage.getItem("gplan.avatar");
    if (saved) {
      showPhoto(saved);
    } else {
      removePhoto();
    }
  })();
  
  const username = localStorage.getItem("gplan_username");
  const nameDisplay = document.querySelector(".account-name");
  const initialsDisplay = document.getElementById("pfp-header-initials");
  
  // adds username to profile
  if (username) {
    nameDisplay.textContent = username;
    const initials = username.charAt(0).toUpperCase(); // changes the circle to have first initial
    initialsDisplay.textContent = initials;
  } else {
    nameDisplay.textContent = "Guest";
  }
});