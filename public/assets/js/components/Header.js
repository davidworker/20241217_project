import { loadFile, currentFile } from './Utils.js';

/** 載入頁首
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/header.html');
    activeMenu();
    mobileMenu();
};

/**
 * 設定選單高亮
 * @returns {void}
 */
const activeMenu = function () {
    let menu = document.querySelectorAll('.header .menu-list > li');
    if (!menu) {
        return;
    }

    let file = currentFile();
    menu.forEach(item => {
        if (item.querySelector('a').getAttribute('href') === file) {
            item.classList.add('active');
        }
    });
};

/**
 * 設定手機版選單
 * @returns {void}
 */
const mobileMenu = function () {
    const menu = document.querySelector('.header .menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (!menu || !toggle) {
        return;
    }

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
};

export { load };
