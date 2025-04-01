import { loadFile } from './Utils.js';
import { AboutInfoAPI } from '../api/AboutInfoAPI.js';

/** 載入關於我們資訊
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/about-info.html');
    const aboutInfo = await AboutInfoAPI.get();
    let html = '';
    aboutInfo.forEach(function (info) {
        html += `<${info.title_tag}>${info.title}</${info.title_tag}>
    <div class="info-block">${info.content}</div>`;
    });
    let app = document.querySelector('#about-info-app');
    app.innerHTML = html;
};

export { load };
