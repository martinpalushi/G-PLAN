<?php

session_start(); //starts PHP session
require_once 'config.php';

if(isset($_POST['register'])){
  $name = $_POST['username'];
  $password = $_POST['password']
  $confirm = $_POST['confirm']
  
  if($_POST['password']!==$_POST['confirm']){
    $_SESSION['password-error'] = "Passwords do not match.";
    header("Location: signup.php");
    exit();
  } 
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
  $conn->query("INSERT INTO users (name, password) VALUES ('$name','$password')");
  exit();
}

if(isset($_POST['login'])){
  $name = $_POST['username'];
  $password = $_POST['password'];
  
  $result = $conn->query("SELECT * FROM users WHERE name = '$name'"); //finds user based on name
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