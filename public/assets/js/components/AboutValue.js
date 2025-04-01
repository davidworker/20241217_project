import { loadFile } from './Utils.js';

/** 載入關於我們核心價值
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/about-value.html');
};

export { load };
