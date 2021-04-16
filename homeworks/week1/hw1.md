## 交作業流程

### 把作業下載下來並寫作業
第一次使用先把教作業的個人分支複製到本機 git clone 指令+網址
下載後就可以在本機寫作業 (修改檔案)

進 Terminal 下 git status 指令可以看到該檔案被修改過
下 git diff 指令可以進 vim 編輯器看

### 上傳

1.每次教作業就創造一個分支 git branch week1
2.創造後切換到那個分支上 git checkout week1 (或更快速的可以使用 git checkout -b week1，一次作兩件事)
3.確認自己在分支上後，進行 commit，下 git commit -am ‘message’ 指令
4.然後 push 上去 GitHub > 下 git push origin week1 指令
5.上 GitHub 按 pull request 將這個 branch 合併到 master 上