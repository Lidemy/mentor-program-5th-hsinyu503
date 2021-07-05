## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

varchar 可以自訂設置最大長度，最大限制是 65532，text 不需設置長度，最大長度為2^31-1個字元。 查詢效率 varchar 比 text 好

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

使用瀏覽器時，在自己的 domain 下紀錄 HTTP 狀態的程式

經由 server 來設定，由 server 設定一個 cookie 在 header 的 response，然後在瀏覽器下次再傳 request ，並符合條件時的時候，自動帶上 cookie

可以使用 setcookie(名稱，值，有效時間)來設定


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

在瀏覽器內就可以看到帳號密碼;可以用瀏覽器改帳號暱稱去發佈留言



