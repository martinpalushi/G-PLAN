<?php
session_start();
$loggedIn = isset($_SESSION['name']);
$username = $loggedIn ? $_SESSION['name'] : '';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>G-PLAN - Home</title>
  <link rel="stylesheet" href="indexStyle.css" />
</head>
<body id="top">
  <header class="topbar">
    <div class="container topbar-row">
      <strong class="title" ><a href="index.html">G-PLAN</a></strong>
      <nav class="logsign">
        <?php if ($loggedIn): ?> <!--If the user is logged in, it will display a reference to account.html -->
          <a href="account.html">Profile</a>
          <a href="logout.php">Log Out</a>
        <?php else: ?>
          <a href="login.php">Log In</a>
          <a href="signup.php">Sign Up</a>
        <?php endif; ?>
      </nav>
    </div>
  </header>

  <main>
    <section class="section intro">
      <div class="container intro-row">
        <img class="logo" src="images/logo.png" alt="G-PLAN Logo" /> <!--Logo will eventually be replaced by profile photo.-->
        <div class="intro-text">
          <?php if ($loggedIn): ?>
            <h1>WELCOME BACK, <?= htmlspecialchars($username) ?>!</h1>
            <p class="intro-paragraph">
              Great to see you again! Ready to continue your progress?
            </p>
          <?php else: ?>
            <h1>WELCOME TO G-PLAN</h1>
            <p class="intro-paragraph">
              Welcome future Engineers and Computer Scientists! Want to make the most out of your
              college career? Your first step is taking the right classes at the right time...
            </p>
          <?php endif; ?>
          <div class="nav-row">
            <a class="btn" href="index.html">Home</a>
            <a class="btn" href="major.html">Browse Majors</a>
            <a class="btn" href="minor.html">Browse Minors</a>
          </div>
        </div>
      </div>
      <div class="container"><div class="hr"></div></div>
    </section>

    <section class="section">
      <div class="container">
        <div class="video-card">
          <div class="video-wrap">
            <img src="images/intro-thumb.jpg" alt="Introducing G-PLAN video thumbnail" />
            <span class="play"></span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container grid-2">
        <div>
          <h2 class="section-title">Create an account</h2>
          <p><strong>Why make an account with us?</strong></p>
          <p>
            Creating an account with us allows us to store your goals and progress so you can
            continue where you left off the next time you log in.
          </p>
          <div class="nav-row">
            <a class="btn" href="signup.html">Sign Up</a>
            <a class="btn secondary" href="login.html">Log In</a>
          </div>
        </div>
        <div class="card">
          <div class="media">
            <img src="images/account.jpg" alt="Account graphic" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">GET STARTED</h2>
        <div class="tiles">
          <article class="card">
            <div class="media badge-video">
              <img src="images/tutorial-thumb.jpg" alt="Tutorial thumbnail" />
              <span class="play small"></span>
            </div>
            <div class="body">
              <h3>Tutorial</h3>
              <p>Before you get started, go through the tutorial to learn all our features.</p>
            </div>
          </article>

          <article class="card">
            <div class="media">
              <img src="images/major.jpg" alt="Campus image" />
            </div>
            <div class="body">
              <h3>Declare your major/minor</h3>
              <p>Browse the many majors available in The School of Engineering and Computer Science.</p>
            </div>
          </article>

          <article class="card">
            <div class="media">
              <img src="images/minor.jpg" alt="Graduation cap" />
            </div>
            <div class="body">
              <h3>Add a major/minor</h3>
              <p>Interested in expanding your field of knowledge? Add a new major or minor!</p>
            </div>
          </article>
        </div>

        <div class="banner">
          <span class="banner-title">Unleash Your Full Potential</span>
          <a class="btn secondary" href="#top">Back To Top</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-row">
      <span>G-PLAN</span>
    </div>
  </footer>
</body>
</html>