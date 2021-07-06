<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  if (!empty($_SESSION['username'])){
    $username = $_SESSION['username'];
  }
  /*
  內建 session 做了什麼事情：
    1.從 cookie 裡面讀取 PHPSESSID(token)
    2.從檔案裡面讀取 session id 的內容
    3.放到 $_SESSION
  */


  $result = $conn->query("SELECT * FROM `hsinyu_comments` ORDER BY `id` DESC");
  if(!$result){
    die('Error:' . $conn->error);
  };

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
      <?php if(!$username){ ?>
        <a class="board_btn" href="register.php">sign up</a>
        <a class="board_btn" href="login.php">log in</a>
      <?php } else { ?>
        <div class="welcome">Hi!<?php echo $username; ?></div>
        <a class="board_btn" href="logout.php">log out</a>
      <?php } ?>
    </div>
    <h2 class="board_title">Message boooooooard</h2>
    <?php
      if (!empty($_GET['errCode'])){
        $code = $_GET['errCode'];
        $msg = 'Error';
        if ($code === '1'){
          $msg = 'Not complete';
        }
        echo '<span>'. $msg .'</span>';
      }
    ?>
    <form class="board_new_comment_form" method="POST" action="handle_add_comment.php">
      <textarea name="content" rows="5">
      </textarea>
      <?php if($username){ ?>
        <button class="board_submit_btn" type="submit">POST</button>
      <?php } else {?>
        <h3>You can post message after login.</h3>
      <?php } ?>
    </form>
    <div class="board_hr"></div>
    <section>
      <?php
        while($row = $result->fetch_assoc()){
      ?>
        <div class="card">
          <div class="card_avatar">
          </div>
          <div class="card_body">
            <div class="card_info">
              <span class="card_author">
                <?php echo $row['nickname']; ?>
              </span>
              <span class="card_time">
                <?php echo $row['created_at']; ?>
              </span>
            </div>
            <p class="card_content"><?php echo $row['content']; ?></p>
          </div>
        </div>
      <?php } ?>
    </section>
  </main>
</body>
</html>