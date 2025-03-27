import { loadFile } from './Utils.js';
import { NewListAPI } from '../api/NewsDetailAPI.js';

/** 載入聯絡表單
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/news-detail-body.html');
    let id = null;
    try {
        id = location.search.split('?')[1].split('=')[1];
    } catch (error) {
        id = 1;
    }
    const data = await NewListAPI.get(id);
    console.log(data);
};

export { load };
