

// PROFILE PICTURE 

// only runs the code after the webpage has finished loading
document.addEventListener("DOMContentLoaded", () => {
  // limits how big the image can be
  const MAX_BYTES = 5 * 1024 * 1024;

  // connects the JavaScript to HTML
  const editBtn = document.getElementById("edit-tab-btn");
  const popup = document.getElementById("editPopup");
  const closePopup = document.getElementById("closePopup");
  
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let userbase = JSON.parse(localStorage.getItem("userbase")); // loads userbase to localStorage
  
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
        
        currentUser.pfp = dataUrl;
        updateData(currentUser,userbase);
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
      el.avatar.src = currentUser.pfp;
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
    
    currentUser.pfp = "";
    updateData(currentUser,userbase);
    
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
    const saved = currentUser.pfp;
    if (saved) {
      showPhoto(saved);
    } else {
      removePhoto();
    }
  })();
  
  const username = currentUser.name;
  const major = currentUser.major;
  const minor = currentUser.minor;
  const nameDisplay = document.querySelector(".account-name");
  const majorDisplay = document.querySelector("#major-display");
  const initialsDisplay = document.getElementById("pfp-header-initials");
  
  // adds username to profile
  if (username) {
    nameDisplay.textContent = username;
    const initials = username.charAt(0).toUpperCase(); // changes the circle to have first initial
    initialsDisplay.textContent = initials;
  } else {
    nameDisplay.textContent = "Guest";
  }
  
  if(major){
    majorDisplay.textContent = "Major: "+major;
  } 

  // Adds major to profile
  
  const saved = userbase[currentUser.name].fourYearPlan;
  const container = document.getElementById("savedPlanDisplay");
  if (!saved) {
    container.innerHTML = "<p>No saved plan yet.</p>";
    return;
  }

  // Build plan HTML identical to majors.html
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <h3>${saved.majorName}</h3>
    <p><strong>Total Credits:</strong> ${saved.totalCredits}</p>
  `;
  console.log("Saved plan:", saved.plan);
  
  saved.plan.forEach((year, idx) => {
    console.log("Year", idx, year);
    console.log("Semesters:", year.semesters);
  });
  saved.plan.forEach((year) => {
    const yearBlock = document.createElement("div");
    yearBlock.className = "year-block";

    yearBlock.innerHTML = `<h3 class="year-title">${year.yearTitle}</h3>`;

    year.semesters.forEach((sem) => {
      const semCard = document.createElement("div");
      semCard.className = "semester-card";

      semCard.innerHTML = `<h4 class="semester-title">${sem.semesterTitle}</h4>`;

      const ul = document.createElement("ul");
      ul.className = "course-list";

      sem.courses.forEach((c) => {
        const li = document.createElement("li");
        li.className = "course";
        li.textContent = `${c.code} — ${c.name} (${c.credits} cr) ${c.completed ? "✓" : ""}`;
        ul.appendChild(li);
      });

      semCard.appendChild(ul);
      yearBlock.appendChild(semCard);
    });

    wrapper.appendChild(yearBlock);
  });

  container.appendChild(wrapper);
  
});

// Dark Mode
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeSwitch");
  let userbase = JSON.parse(localStorage.getItem("userbase")); // loads userbase to localStorage
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isDark = currentUser.hasDarkMode === "true";

  // Apply dark mode if saved
  if (isDark) {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-mode");
      currentUser.hasDarkMode = true;
    } else {
      document.body.classList.remove("dark-mode");
      currentUser.hasDarkMode = false;
    }
    updateData(currentUser,userbase);
  });
});

function updateData(currentUser,userbase){ // Updates the data to the userbase
  userbase[currentUser.name] = currentUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  localStorage.setItem("userbase",JSON.stringify(userbase));
}
