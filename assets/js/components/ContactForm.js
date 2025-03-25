import { loadFile } from './Utils.js';

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                name: '',
                email: '',
                subject: '',
                message: '',
            };
        },
        methods: {
            doSubmit() {
                console.log('do submit');
            },
        },
        mounted() {
            console.log('contact form mounted');
        },
    };
    const app = createApp(options);
    app.mount('#contact-form-app');
};

/** 載入聯絡表單
 * @param {string} selector 載入的元素
 * @returns {void}
 */
const load = async function (selector) {
    await loadFile(selector, './components/contact-form.html');
    initApp();
};

export { load };
