## 請解釋後端與前端的差異。

前端就是所有你看得到的東西，各種裝置(桌機，手機，平板等)上的瀏覽器，然後藉由前端介面輸入 request 到雲端 server 之前的這一段都算前端

從 server 存取你要求的資料 到 資料庫 這一整個部分都算是後端，一般使用者都看不到的東西

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器連上 google 首頁，你輸入 JavaScript
2. 瀏覽器送出 request 到 google 雲端 sever
3. server 問 DB 資料庫，搜尋有含 JavaScript 的網頁
4. DB 資料庫找到後，回傳 sever
5. sever 回傳 response 給瀏覽器b搜尋結果，在 google 首頁前端顯示給你看

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. `chmod` 當想要改動檔案時，顯示權限不足時，可下這個指令就可更改檔案
2. `kill` 要結束某個程序時可以使用
3. `sudo` 只有超級使用者才有權限的執行