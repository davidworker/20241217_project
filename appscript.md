# appscript 串接

## server 端

1. 開啟 google sheet
2. 建立對應欄位
   1. 姓名
   2. 信箱
   3. 主旨
   4. 訊息
   5. 建立時間
3. 擴充功能 > Apps Script

```js
var sheetName = 'contact' // sheet 名稱
var sheetObj = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName) // 取得 sheet 物件

function doGet(e) {
    var params = e.parameter
    params._from = 'doGet'
    return ContentService.createTextOutput(JSON.stringify(params)).setMimeType(ContentService.MimeType.JSON)
}

function doPost(e) {
    var params = e.parameter
    var name = params.name
    var email = params.email
    var subject = params.subject
    var message = params.message
    var created_at = new Date()
    sheetObj.appendRow([name, email, subject, message, created_at]) // 插入一列新的資料

    params._from = 'doPost'
    return ContentService.createTextOutput(JSON.stringify(params)).setMimeType(ContentService.MimeType.JSON)
}
```

4. 部署 > 新增部署作業
   1. 選取類型 > 網頁應用程式
   2. 誰可以存取 > 所有人
   3. 部署
   4. 允許非安全應用程式
   5. 複製網頁應用程式網址

## client 端

```js
window.handleFormSubmit = async function (event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    // 替換成您的 Google Apps Script 網址
    const scriptURL =
        '{{ 網頁應用程式網址 }}';

    try {
        let response = await fetch(scriptURL, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('訊息已成功送出！');
            form.reset();
        } else {
            throw new Error('送出失敗');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('發生錯誤，請稍後再試。');
    }
};
```