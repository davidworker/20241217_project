import { loadFile } from './Utils.js';

/** 載入最新消息列表
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/news-list.html');
};

export { load };
