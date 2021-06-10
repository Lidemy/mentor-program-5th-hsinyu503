## 什麼是 Ajax？
不用換頁的傳送資料方式

AJAX - Asynchronous JavaScript and XML

不單單只某個技術，只要是有任何非同步的跟伺服器交換資料的 JS 都可以統稱 AJAX
(早期大多是 XML 格式，現在大多是 Json 格式了，但還是稱為 AJAX)


## 用 Ajax 與我們用表單送出資料的差別在哪？

html 元素傳送資料的差別是，他是 sever傳 response 到瀏覽器而已，
AJAX 是 sever傳 response透過瀏覽器再傳送結果到 “瀏覽器上的 JS”


## JSONP 是什麼？
JSONP (JSON with padding(填充))

因為有幾個標籤不會受同源限制，例如 img 和 script
所以可以透過 script 標籤的 src 拿資料 (在前面先寫好 function )


## 要如何存取跨網域的 API？

當我們發 request 的時候，瀏覽器會幫我們在 request header 的裡面加一個 header origin 來源

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為是在本機使用 node.js