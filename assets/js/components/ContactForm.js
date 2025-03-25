import { loadFile } from './Utils.js';

const APP_URL =
    'https://script.google.com/macros/s/AKfycbxuUbEdd0mypejefT69813hfItGGhuQ-zYqme8s3Oaq0U7KJdvzQSNwlYvMTEYco6XVxw/exec';

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
            };
        },
        methods: {
            async doSubmit() {
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
                        return;
                    }
                    formData.append(key, this.db[key]);
                }

                try {
                    let response = await fetch(this.url, {
                        method: 'POST',
                        body: formData,
                    });

                    if (response.ok) {
                        alert('訊息已送出');
                        return;
                    }

                    alert('訊息送出失敗');
                } catch (e) {
                    console.log(e);
                }
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
