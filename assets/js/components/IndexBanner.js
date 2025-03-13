import { loadFile } from './Utils.js';

/** 載入首頁橫幅
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/index-banner.html');
};

export { load };
