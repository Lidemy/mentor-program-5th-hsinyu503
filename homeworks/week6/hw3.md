## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<b></b> 粗體
<hr/> 分隔線
<select></select> 選單

## 請問什麼是盒模型（box modal）
以物件本身往外及往內長得結構
padding 是往內增長的空間，border 是外框，margin 是往外長的空間

* 物件本身的寬高尺寸 + padding + border + margin = 最終尺寸
* 另外可以設定 box-sizing: border-box，直接將設定的寬高就是=最終尺寸，電腦自動調整盒模型內容物的尺寸


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

1. **block** 佔滿一整行
2. **inline** ( span 和 a 就是預設 inline ) 調寬高和上下邊距沒用， 只有左右邊距有用，尺寸=內容
3. **inline-block** (對外如 inline 可並排，但如 block 調整各種屬性)

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

1. **static** 預設
2. **relative** 相對定位，用上下左右來推位置，投影，但會留在原本的位置佔位，不會推到其他物件的位置
3. **absolute** 絕對定位; 需要先有一個參考點，沒有設的話會一直往上找，最終是以瀏覽器為定位; 如果要設參考點，要把參考物件的 position 設成 relative。不暫位。
4. **fixed**  固定定位 (相對於 viewport 做定位)
5. **sticky** 黏住，捲動的時候到要求的定位點時會變成 fixed。有時候會做在導覽功能，是比較新的屬性，大部分新的瀏覽器有支援