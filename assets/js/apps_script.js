function doPost(e) {
    // 設定要儲存數據的試算表
    const spreadsheetId = 'contact'; // 請替換成您的 Google Sheets ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();

    try {
        // 解析傳入的 JSON 數據
        const data = JSON.parse(e.postData.contents);

        // 獲取當前時間
        const timestamp = new Date();

        // 準備要寫入的數據行
        const rowData = [data.name, data.email, data.subject, data.message, timestamp];

        // 將數據寫入試算表
        sheet.appendRow(rowData);

        // 返回成功響應
        return ContentService.createTextOutput(
            JSON.stringify({
                status: 'success',
                message: '數據已成功儲存',
            })
        ).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        // 返回錯誤響應
        return ContentService.createTextOutput(
            JSON.stringify({
                status: 'error',
                message: error.toString(),
            })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}
