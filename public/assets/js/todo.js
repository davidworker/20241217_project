import { auth, database, createUserWithEmailAndPassword } from './firebase_controller.js';

const appOptions = {
    data() {
        return {
            activeTab: 'login',
            register: {
                email: '',
                password: '',
                confirmPassword: '',
            },
            errorMessage: {
                register: '',
            },
            timer: {
                register: null,
            },
        };
    },
    methods: {
        async registerUser() {
            try {
                for (const key in this.register) {
                    if (this.register[key] === '') {
                        throw new Error('Please fill in all fields');
                    }
                }
                if (this.register.password !== this.register.confirmPassword) {
                    throw new Error('Password and Confirm Password do not match');
                }

                let user = await createUserWithEmailAndPassword(
                    auth,
                    this.register.email,
                    this.register.password
                );
                console.log(user);
            } catch (e) {
                this.errorMessage.register = e.message;
                clearTimeout(this.timer.register);
                this.timer.register = setTimeout(() => {
                    this.errorMessage.register = '';
                }, 3000);
            }
        },
    },
};

const app = Vue.createApp(appOptions);
app.mount('#app');
