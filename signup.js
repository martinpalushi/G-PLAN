
// Sign-up submission: creates a new user and sets it as current user.
// Precondition: No users are currently logged in, sign-up is only
// accessible to signed-out, or "Guest," users.
document.querySelector(".auth-form").addEventListener("submit", function(event) {
    event.preventDefault(); // stop the form from reloading the page

    const username = document.querySelector("#signup-user").value.trim();
    const password = document.querySelector("#signup-pass").value;
    const confirm = document.querySelector("#signup-confirm").value;
    const rememberMe = document.querySelector(".remember").checked;
    
    // load the userbase from localStorage
    let userbase = JSON.parse(localStorage.getItem("userbase")) || {};
    // the || {} bit is to prevent the page from breaking if
    // userbase is null.
    
    // simple password check
    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }
    if(password.length <= 0 || username.length <= 0){
        alert("Username and password cannot be empty!");
        return;
    }
    // username check
    if(userbase[username]){
        alert("Username already exists!");
        return;
    }
    
    // Makes sure all other users saved are logged out.
    for(const user in userbase){
        userbase[user].isLoggedIn = false;
    }
    
    // Creates a new user.
    const newUser={
        name:username,
        password:password,
        pfp : null,
        hasDarkMode:false,
        isLoggedIn:true, // Only the newly-added user would be logged in once created. 
        major : "",
        minor : "",
        fourYearPlan:{}
    };
    userbase[username] = newUser;     // adds user to userbase
    
    localStorage.setItem("userbase",JSON.stringify(userbase)); // adds updated userbase back to local storage
    localStorage.setItem("currentUser",JSON.stringify(newUser)); // saves the user so that they're logged in when they come back
    
    var getUserbase = localStorage.getItem("userbase");
    
    //debugging
    console.log("User added successfully: ", newUser);
    console.log("Updated userbase: ", userbase);
    // sends to account page
    window.location.href = "account.html";
});
