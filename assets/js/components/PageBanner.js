import { loadFile } from './Utils.js';

/**
 * 參數規則
 * - 必填參數一定是放在前面
 * - 可選參數(有預設值的)一定是放在後面
 */

/** 載入頁面橫幅
 * @param {string} selector 載入的元素
 * @param {string} title 頁面標題
 * @param {...string} params 頁面參數
 * @returns {void}
 */
const load = async function (selector, title = '關於我們', ...params) {
    await loadFile(selector, './components/page-banner.html');
    const h1 = document.querySelector('.page-banner .page-banner-inner h1');
    if (h1) {
        h1.textContent = title;
    }
};

export { load };
