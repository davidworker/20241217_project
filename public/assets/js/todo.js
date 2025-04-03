import {} from './firebase_controller.js';

const appOptions = {
    data() {
        return {
            activeTab: 'login',
        };
    },
};

const app = Vue.createApp(appOptions);
app.mount('#app');
