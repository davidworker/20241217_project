import { auth, database, createUserWithEmailAndPassword, signOut } from './firebase_controller.js';

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
            running: {
                register: false,
            },
        };
    },
    methods: {
        async registerUser() {
            try {
                if (this.running.register) {
                    throw new Error('Please wait for the registration to complete');
                }
                this.running.register = true;

                for (const key in this.register) {
                    if (this.register[key] === '') {
                        throw new Error('Please fill in all fields');
                    }
                }
                if (this.register.password !== this.register.confirmPassword) {
                    throw new Error('Password and Confirm Password do not match');
                }

                await createUserWithEmailAndPassword(
                    auth,
                    this.register.email,
                    this.register.password
                );

                for (const key in this.register) {
                    this.register[key] = '';
                }

                this.activeTab = 'todo';
            } catch (e) {
                this.errorMessage.register = e.message;
                clearTimeout(this.timer.register);
                this.timer.register = setTimeout(() => {
                    this.errorMessage.register = '';
                }, 3000);
            } finally {
                this.running.register = false;
            }
        },
        logout() {
            signOut(auth);
            this.activeTab = 'login';
        },
    },
};

const app = Vue.createApp(appOptions);
app.mount('#app');
