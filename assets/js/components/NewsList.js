import { loadFile } from './Utils.js';
import { NewListAPI } from '../api/NewListAPI.js';

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                items: [],
            };
        },
        methods: {
            async init() {
                const data = await NewListAPI.get();
                this.items = data;
                console.log(this.items);
            },
        },
        mounted() {
            console.log('mounted');
            this.init();
        },
    };

    const app = createApp(options);
    app.mount('#news-list-app');
};

/** 載入最新消息列表
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/news-list.html');
    initApp();
};

export { load };
