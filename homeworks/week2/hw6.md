``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) {
      return 'invalid'
    }
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) {
      return 'invalid'
    }
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 2 行把陣列參數 [3, 5, 8, 13, 22, 35] 輸入叫 isValid 的函式
2. 執行第 3 行，第一個迴圈設定起始條件從 i = 0 開始，檢查 i 是否符合小於陣列長度 6 的條件，如是的話，將 i+1 後繼續執行
3. 執行第 4 行，判斷陣列第 0 個元素 3 是否小於或等於 0 ，如果是的話，執行第 3 行回傳 invalid 後中斷迴圈，否，將 i+1 後跑下一圈
4. 執行第 4 行，判斷陣列第 1 個元素 5 是否小於或等於 0，否，將 i+1 再跑一圈
5. 執行第 4 行，判斷陣列第 2 個元素 8 是否小於或等於 0，否，將 i+1 再跑一圈
6. 執行第 4 行，判斷陣列第 3 個元素 13 是否小於或等於 0，否，將 i+1 再跑一圈
7. 執行第 4 行，判斷陣列第 4 個元素 22 是否小於或等於 0，否，將 i+1 再跑一圈
8. 執行第 4 行，判斷陣列第 5 個元素 35 是否小於或等於 0，否，第一圈迴圈結束
9. 執行第 8 行，第二個迴圈設定起始條件從 i = 2 開始，檢查 i 是否符合小於陣列長度 6 的條件，如是的話，將 i+1 後繼續執行
10. 執行第 9 行，判斷陣列第 3 個元素 不等於 陣列第 2 個的元素 加 陣列第 1 的元素的總和，如果是的話，執行第 10 行回傳 invalid 後中斷迴圈，否，將 i+1 後跑下一圈
11. 執行第 9 行，判斷陣列第 4 個元素 不等於 陣列第 3 個的元素 加 陣列第 2 的元素的總和，否，將 i+1 再跑一圈
12. 執行第 9 行，判斷陣列第 5 個元素 不等於 陣列第 4 個的元素 加 陣列第 3 的元素的總和，否，第二圈迴圈結束
13. 執行第 13 行，回傳 valid
14. 執行完畢
