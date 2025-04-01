import { loadFile } from './Utils.js';
import { NewListAPI } from '../api/NewListAPI.js';
import { getId } from './NewsDetailUtils.js';

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                prev: {},
                next: {},
            };
        },
        methods: {
            async init() {
                let items = await NewListAPI.get();
                let id = +getId();

                if (id > 1) {
                    let prevId = id - 1;
                    let prev = items.find(item => item.id === prevId);
                    if (prev) {
                        this.prev = prev;
                    }
                }
                if (id < items.length) {
                    let nextId = id + 1;
                    let next = items.find(item => item.id === nextId);
                    if (next) {
                        this.next = next;
                    }
                }
            },
        },
        mounted() {
            console.log('mounted');
            this.init();
        },
    };
    const app = createApp(options);
    app.mount('#news-detail-chain-app');
};

/** 載入最新消息鏈接
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/news-detail-chain.html');
    initApp();
};

export { load };
