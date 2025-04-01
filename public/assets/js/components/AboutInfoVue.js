import { loadFile } from './Utils.js';
import { AboutInfoAPI } from '../api/AboutInfoAPI.js';

/** 載入關於我們資訊
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/about-info-vue.html');
    const aboutInfo = await AboutInfoAPI.get();
    const app = Vue.createApp({
        data() {
            return {
                items: aboutInfo,
            };
        },
        mounted() {},
    });

    app.mount('#about-info-app');
};

export { load };
