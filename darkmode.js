
// new version, takes into consideration different accounts.
document.addEventListener("DOMContentLoaded", () => {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser.hasDarkMode === true) {
    document.body.classList.add("dark-mode");
  }
});



/*

-- old version --

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("gplan.darkmode") === "true") {
    document.body.classList.add("dark-mode");
  }
});



*/