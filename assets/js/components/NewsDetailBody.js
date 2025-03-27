import { loadFile } from './Utils.js';
import { NewListAPI } from '../api/NewsDetailAPI.js';
import { getId } from './NewsDetailUtils.js';
const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                item: {},
            };
        },
        methods: {
            async init() {
                let id = getId();
                const data = await NewListAPI.get(id);
                this.item = data || {};
            },
        },
        mounted() {
            this.init();
        },
    };
    const app = createApp(options);
    app.mount('#news-detail-body-app');
};

/** 載入最新消息詳細頁面
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/news-detail-body.html');
    initApp();
};

export { load };
