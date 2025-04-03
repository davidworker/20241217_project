const appOptions = {
    data() {
        return {
            activeTab: 'login',
        };
    },
};

const app = Vue.createApp(appOptions);
app.mount('#app');
