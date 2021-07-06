<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (
    empty($_POST['username']) ||
    empty($_POST['password'])
  ) {
    header('Location: login.php?errCode=1');
    die('資料不齊全');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = sprintf(
    "SELECT * FROM hsinyu_users WHERE username='%s' AND password='%s' ",
    $username, $password
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  };

  if($result->num_rows){

    //登入成功
    /*
      php 內建 session 機制做了什麼：
      1.產生 session id (也就是token)
      2.把 username 寫入檔案
      3.set-cookie: session-id
    */
    $_SESSION['username'] = $username;
    header("Location: index.php");
  } else {
    header("Location: login.php?errCode=2");
  }
?>