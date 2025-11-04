<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>G-PLAN • Log In</title>
  <link rel="stylesheet" href="authStyle.css" />
</head>
<body>
  <header class="topbar">
    <div class="container topbar-row">
      <strong class="title" ><a href="index.html">G-PLAN</a></strong>
      <nav class="logsign" aria-label="Account">
        <a href="login.html" aria-current="page">Log In</a>
        <a href="signup.html">Sign Up</a>
      </nav>
    </div>
  </header>

  <main class="auth">
    <div class="container-narrow">
      <div class="auth-logo"><img src="images/logo.png" alt="G-PLAN logo" /></div>
      <h1 class="auth-title">LOG-IN</h1>
      <p class="auth-subtitle">Welcome Back!</p>

      <form class="auth-form" action="#" method="post">
        <label for="login-user">Username</label>
        <input class="login-info" id="login-user" name="username" type="text" placeholder="Enter username" required />

        <label for="login-pass">Password</label>
        <input class="login-info" id="login-pass" name="password" type="password" placeholder="Enter your password" required />
        <div class="remember-forgot">
          <label class="rememberme"><input type=checkbox /> Remember me</label>
          <label class="forgot"><a href="#">Forgot password?</a></label> <!--Will contain a password reset link/function. -Martin-->
        </div>
        <div class="auth-action">
          <button class="btn-submit" type="submit">LOG-IN</button>
        </div>
      </form>
    </div>

    <div class="footer-band">
      <div class="wrap">
        <span>G-PLAN</span>
        <a class="home-btn" href="index.html">Home</a>
      </div>
    </div>
  </main>
  <script src="loginScript.js"></script>
</body>
</html>