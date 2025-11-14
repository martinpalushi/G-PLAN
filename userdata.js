// The user database will just be an array containing user data as Objects with
// key and value pairs pointing to each important datum that we want to be saved
// when logging in.
if(!localStorage.getItem("userbase")){
    const users = {
        guest : {
            // This is the base, or "Guest", option when logged out.
            name : "Guest", //the username they enter
            password : "1234", // their password, verified 
            pfp : "images/logo.png",
            hasDarkMode : false, 
            isLoggedIn : true, // a boolean to check if this user is logged in.
            fourYearPlan : {
                
            }
        }
    };
    localStorage.setItem("userbase",JSON.stringify(users));
}
