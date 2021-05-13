## 請以自己的話解釋 API 是什麼

開一個對接口，依照協定的格式讓雙方可以交換資料的程式介面

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

- 418 I’m a teapot
1998 年訂的愚人節笑話，當一個控制茶壺的伺服器收到要求煮咖啡的 Request 時候，要回應 418，告訴使用者這是一個茶壺不是咖啡機

- 502 Bad Gateway
閘道器或代理伺服器的某個服務沒有正確執行，導致上游伺服器收到無效回應

- 521 Web Server Is Down
目標伺服器掛掉嘍


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://veganmap.com

|  說明   | Method  | path  | 參數  | 範例  |
|  ----  | ----  |  ----  | ----  |  ----  |
| 獲取所有餐廳資料  | GET | /restaurants | _limit:限制回傳資料數量 | /restaurants?_limit=5 |
| 獲取單一餐廳資料  | GET | /restaurants/:id | 無 | /restaurant/10 |
| 新增餐廳  | POST | /restaurants | name: 店名 | 無 |
| 刪除餐廳  | DELETE | /restaurants/:id | 無 |	無 |
| 更改餐廳資訊  | ATCH | /restaurants/:id | name: 店名 |	無 |

**回傳所有餐廳資料**
```
const request = require('request')

request('https://veganmap.com/restaurants', (error, res, body) => {
  // 內容
})
```

**回傳單一餐廳資料**
```
const request = require('request')

request(`https://veganmap.com/restaurants/${id}`, (error, res, body) => {
  //內容
})
```

**新增餐廳**
```
const request = require('request')

request.post( {
  url: 'https://veganmap.com/restaurants',
  form: {
    name //新餐廳
  },
}, (error, res, body) => {
  //內容
})
```

**刪除餐廳**
```
const request = require('request')

request.delete(`https://veganmap.com/restaurants/${id}`,
  (error, res, body) => {
  //
})
```

**更改資訊**
```
const request = require('request')

request.patch( {
  url: `https://veganmap.com/restaurants/${id}`,
  form: { name }
}, (error,res,body) => {
  //
})
```
