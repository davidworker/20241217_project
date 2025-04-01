import { loadFile } from './Utils.js';
import { APP_URL } from '../api/env.js';

const initApp = function () {
    const { createApp } = Vue;
    const options = {
        data() {
            return {
                db: {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                },
                url: APP_URL,
                isSending: false,
            };
        },
        methods: {
            async doSubmit() {
                if (this.isSending) {
                    return;
                }

                try {
                    // process lock
                    this.isSending = true;

                    let formData = new FormData();

                    const requires = {
                        name: '請輸入姓名',
                        email: '請輸入電子郵件',
                        subject: '請輸入主旨',
                        message: '請輸入訊息內容',
                    };

                    for (const key in requires) {
                        if (this.db[key] === '') {
                            alert(requires[key]);
                            throw new Error(requires[key]);
                        }
                        formData.append(key, this.db[key]);
                    }

                    let response = await fetch(this.url, {
                        method: 'POST',
                        body: formData,
                    });

                    if (response.ok) {
                        alert('訊息已送出');
                        this.isSending = false;
                        // 修正表單發送成功後觸發失敗問題
                        return;
                    }

                    throw new Error('訊息送出失敗');
                } catch (e) {
                    this.isSending = false;
                    console.log(e);
                }
            },
        },
        mounted() {},
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
