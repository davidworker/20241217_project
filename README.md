# 專案說明

## 環境設定

### API 設定 (env.js)

專案使用 `assets/js/api/env.js` 來管理 API 相關的環境設定：

```javascript
const APP_URL =
    'https://script.google.com/macros/s/AKfycbxuUbEdd0mypejefT69813hfItGGhuQ-zYqme8s3Oaq0U7KJdvzQSNwlYvMTEYco6XVxw/exec';
```

這個檔案主要用於：

1. 定義 Google Apps Script 的 API 端點
2. 提供一個集中管理 API URL 的位置
3. 方便在不同環境中切換 API 端點

#### 使用方式

在需要使用 API URL 的地方，可以這樣引入：

```javascript
import { APP_URL } from './api/env.js';
```

#### 注意事項

-   請確保 API URL 是有效的且可訪問的
-   在部署到不同環境時，可能需要更新此 URL
-   建議將此檔案加入版本控制，但可能需要根據環境來調整 URL
