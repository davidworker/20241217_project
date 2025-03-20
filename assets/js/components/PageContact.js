import { loadFile } from './Utils.js';

/** 載入首頁聯絡
 * @param {string} selector 載入的元素
 * @param {string} title 標題
 * @param {string} description 描述
 * @param {string} buttonText 按鈕文字
 * @returns {void}
 */
const load = async function (
    selector,
    title = '專業協助',
    description = '探索最新的科技解決方案，我們的專業團隊將為您量身打造數位轉型策略',
    buttonText = '立即諮詢'
) {
    await loadFile(selector, './components/page-contact.html');
    let domTitle = document.querySelector('.page-contact h2');
    let domDescription = document.querySelector('.page-contact .description');
    let domButton = document.querySelector('.page-contact .btn .text');
    domTitle.textContent = title;
    domDescription.textContent = description;
    domButton.textContent = buttonText;
};

export { load };
