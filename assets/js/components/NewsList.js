import { loadFile } from './Utils.js';
import { NewListAPI } from '../api/NewListAPI.js';

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                items: [],
                page: 1,
                once: 9,
                total: 1,
            };
        },
        methods: {
            async init() {
                const data = await NewListAPI.get();
                this.items = data;
                this.total = Math.ceil(this.items.length / this.once);
            },
            getPage() {
                let items = [];
                let start = (this.page - 1) * this.once;
                let end = start + this.once;
                for (let i = start; i < end; i++) {
                    if (this.items[i]) {
                        items.push(this.items[i]);
                    }
                }
                return items;
            },
            toPage(page) {
                this.page = page;
                this.toTop();
            },
            toPrev() {
                if (this.page > 1) {
                    this.page--;
                    this.toTop();
                }
            },
            toNext() {
                if (this.page < this.total) {
                    this.page++;
                    this.toTop();
                }
            },
            toTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
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
