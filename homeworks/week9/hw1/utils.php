
<?php
require_once("conn.php");

function generateToken() {
    $s = '';
    for($i=1; $i<=16; $i++){
      $s .=chr(rand(65,90));
    }
    return $s;
  }

function getUserFromUsername($username) {
  //在php function 內用 $conn 要先宣告
  global $conn;


  $sql = sprintf(
    "SELECT * FROM hsinyu_users WHERE username = '%s'",
    $username
  );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  return $row; // username,id,nickname

}
?>