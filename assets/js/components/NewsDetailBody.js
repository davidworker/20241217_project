import { loadFile } from './Utils.js';

/** 載入聯絡表單
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/news-detail-body.html');
};

export { load };
