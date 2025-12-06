
// new version, takes into consideration different accounts.
document.addEventListener("DOMContentLoaded", () => {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if(currentUser){
    if (currentUser.hasDarkMode === true) {
      document.body.classList.add("dark-mode");
    }
    const btnleft = document.querySelector("#btn-left");
    const btnright = document.querySelector("#btn-right");
    btnleft.setAttribute("href","account.html");
    btnleft.textContent = "Profile";
    btnright.setAttribute("href","");
    btnright.textContent = "Log-Out";
    document.getElementById("btn-right").addEventListener("click", function logout() {
      window.location.href = "index.html";
      localStorage.setItem("currentUser",null);
    })();
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