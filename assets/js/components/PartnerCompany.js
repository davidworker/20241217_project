import { loadFile } from './Utils.js';

/** 載入合作夥伴
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/partner-company.html');
};

export { load };
