import { loadFile } from './Utils.js';

/** 載入關於我們橫幅
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/about-banner.html');
};

export { load };
