<?php

session_start(); //starts PHP session
require_once 'config.php';

if(isset($_POST['register'])){
  $name = trim($_POST['username']);
  $password = $_POST['password'];
  $confirm = $_POST['confirm'];
  
  if (empty($name) || empty($password) || empty($confirm)) { // If there are no entries:
    $_SESSION['register_error'] = "Please fill in all fields.";
    header("Location: signup.php");
    exit();
  }
  if($_POST['password']!==$_POST['confirm']){ // If password and confirm password arent the same.
    $_SESSION['password-error'] = "Passwords do not match.";
    header("Location: signup.php");
    exit();
  } 
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
  $conn->query("INSERT INTO users (name, password) VALUES ('$name','$password')");
  header("Location: index.php");
  exit();
}

if(isset($_POST['login'])){
  $name = $_POST['username'];
  $password = $_POST['password'];
  
  $stmt = $conn->prepare("SELECT * FROM users WHERE name = ?");
  $stmt->bind_param("s", $name);
  $stmt->execute();
  $result = $stmt->get_result(); //finds user based on name
  if($result -> num_rows > 0){
    $user = $result->fetch_assoc();
    if(password_verify($password,$user['password'])){ //checks if password matches encrypted password in db
      $_SESSION['name'] = $user['name'];
      header("Location: index.html");
    }
    exit();
  }
  $_SESSION['login_error']='Incorrect username or password.';
  header("Location: index.html");
  exit();
}

?>