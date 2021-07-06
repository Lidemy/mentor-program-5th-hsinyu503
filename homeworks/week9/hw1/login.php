<?php
  require_once("conn.php");

?>


<!DOCTYPE html>
<html lang="en">
<html>
<head>
  <meta charset="utf-8">
  <title>message board</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>
  <header class="warning">
    ⚠本站為練習使用，刻意忽略資安實作，註冊時請勿用任何真實帳號或密碼
  </header>
  <main class="board">
    <div class="register_menu">
      <a class="board_btn" href="index.php">back</a>
      <a class="board_btn" href="register.php">sign up</a>
    </div>
    <h2 class="board_title">Loooooooooogin</h2>
    <?php
      if (!empty($_GET['errCode'])){
        $code = $_GET['errCode'];
        $msg = 'Error';
        if ($code === '1'){
          $msg = 'Not complete';
        } else if ($code === '2'){
          $msg = 'username or password was wrong';
        }
        echo '<span>'. $msg .'</span>';
      }
    ?>
    <form class="board_new_comment_form" method="POST" action="handle_login.php">
      <div class="board_nickname">
        <span>user name:</span>
        <input type="text" name="username">
      </div>
      <div class="board_nickname">
        <span>password:</span>
        <input type="password" name="password">
      </div>
      <button class="board_submit_btn" type="submit">POST</button>
    </form>
  </main>
</body>
</html>