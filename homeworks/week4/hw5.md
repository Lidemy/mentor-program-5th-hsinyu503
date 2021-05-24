## 請以自己的話解釋 API 是什麼


有一個對接開口並讓兩方可以交換資料的介面

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

102 可能有太多的檔案請求，需要很多時間才能完成，代碼代表已收到但正在處理請求但沒有回應。
305 要求的網頁必須透過 Server 指定的 proxy 才能觀看
521 目標伺服器掛了

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

**使用說明**

- 說明	Method	token	path	參數
- 獲取所有餐廳	GET		/restaurant	_limit:限制回傳資料數量，上限 100
- 獲取單一餐廳	GET		/restaurant/:id	無
- 新增餐廳	POST	必須	/restaurant	name: 餐廳名
- 刪除餐廳	DELETE	必須	/restaurant/:id	無
- 更改餐廳資訊	PATCH	必須	/restaurant/:id	name: 餐廳名

**Request 參數說明**

- _limit ： int
- name ： string

**範例**

- GET 獲取所有餐廳： /restaurant
- GET 獲取前 n 個餐廳： /restaurant?_limit=<n>
- GET 獲取 id 為 10 的餐廳： /restaurant/10
- POST 新增餐廳： /restaurant?name=<new-restaurant>
- DELETE 刪除 id 為 10 的餐廳： /restaurant/10
- PATCH 更改 id 為 10 的餐廳名： /restaurant/10?name=<new-name>

**Get Start**

Base URL： https://search-restaurant.com

你可以選擇其中一種方式，獲得前 3 家餐廳的資料

1. 在終端機用 curl 發 request

```
curl -X GET "https://awesome-restaurant.com/restaurant?_limit=3"
```

2. 在 Node.js 環境下，使用 npm 套件：request 發 HTTP request

```
const request = require('request');
request.get(
  'https://awesome-restaurant.com/restaurant?_limit=3', (error, response, body) => {
    console.log(JSON.parse(body));
  },
);
```

Response 欄位說明

- id ： 餐廳編號
- name ： 餐廳名
- phone ： 餐廳電話
- address ： 餐廳地址
- price： 餐廳價位

```
[
  {
    "id": "1",
    "name": "Morning Bar",
    "phone": "02 2832 5310,
    "address": "111台北市士林區美崙街32號",
    "price": "20-100"
  },
  {
    "id": "2",
    "name": "Green kitchen",
    "phone": "02 2833 7172",
    "address": "111台北市士林區福華路166巷4號",
    "price": "120-300"
  },
]
```

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

