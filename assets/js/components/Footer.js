import { loadFile, currentFile } from './Utils.js';

/** 載入頁尾
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/footer.html');
};

export { load };
