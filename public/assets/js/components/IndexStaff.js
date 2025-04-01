import { loadFile } from './Utils.js';

/** 載入首頁員工
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/index-staff.html');
};

export { load };
