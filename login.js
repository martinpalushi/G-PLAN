
// Log-in submission: logs a user back in according to the given information.
document.querySelector(".auth-form").addEventListener("submit",function(event){
    event.preventDefault(); // stop the form from reloading the page
    
    const username = document.querySelector("#login-user").value.trim();
    const password = document.querySelector("#login-pass").value; 
    const rememberMe = document.querySelector(".rememberme").value;
    
    // load the userbase from localStorage
    let userbase = JSON.parse(localStorage.getItem("userbase")) || {};
    
    for(const user in userbase){
        if(userbase[user].name === username && userbase[user].password === password){
            localStorage.setItem("currentUser",JSON.stringify(userbase[user]));
            console.log("Logged in successfully as"+user.name+".");
            console.log("Userbase: ", userbase);
            window.location.href = "account.html";
            return;
        } 
    }
    alert("Incorrect username or password.");
});