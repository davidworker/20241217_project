import { loadFile } from './Utils.js';

/** 載入最新消息鏈接
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/news-detail-chain.html');
};

export { load };
