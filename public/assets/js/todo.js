import {
    auth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    getValue,
} from './firebase_controller.js';

const todos = await getValue('todos');
console.log(todos);

const appOptions = {
    data() {
        return {
            activeTab: 'login',
            register: {
                email: '',
                password: '',
                confirmPassword: '',
            },
            login: {
                email: '',
                password: '',
            },
            errorMessage: {
                register: '',
                login: '',
            },
            timer: {
                register: null,
                login: null,
            },
            running: {
                register: false,
                login: false,
            },
            currentUser: '',
            todoValue: '',
            todos: [],
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
        async loginUser() {
            try {
                if (this.running.login) {
                    throw new Error('Please wait for the login to complete');
                }
                this.running.login = true;

                for (const key in this.login) {
                    if (this.login[key] === '') {
                        throw new Error('Please fill in all fields');
                    }
                }

                await signInWithEmailAndPassword(auth, this.login.email, this.login.password);

                for (const key in this.login) {
                    this.login[key] = '';
                }
            } catch (e) {
                this.errorMessage.login = e.message;
                clearTimeout(this.timer.login);
                this.timer.login = setTimeout(() => {
                    this.errorMessage.login = '';
                }, 3000);
            } finally {
                this.running.login = false;
            }
        },
        logoutUser() {
            signOut(auth);
            this.todos = [];
        },
        addTodo() {
            console.log(this.todoValue);
            if (!this.todoValue) {
                return;
            }

            let todo = {
                id: this.todos.length + 1,
                status: false,
                value: this.todoValue,
            };
            this.todos.push(todo);
            this.todoValue = '';
            this.localSave();
        },
        toggleTodo(id) {
            this.todos.map((todo, index) => {
                if (todo.id === id) {
                    todo.status = !todo.status;
                    this.todos[index] = todo;
                }
            });
            this.localSave();
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.localSave();
        },
        localSave() {
            let uid = this.currentUser.split('@')[0] + '_todos';
            localStorage.setItem(uid, JSON.stringify(this.todos));
        },
        localLoad() {
            let uid = this.currentUser.split('@')[0] + '_todos';
            let todos = localStorage.getItem(uid);
            if (todos) {
                this.todos = JSON.parse(todos);
            }
        },
    },
    mounted() {
        onAuthStateChanged(auth, user => {
            if (user) {
                this.currentUser = user.email;
                this.activeTab = 'todo';
                this.localLoad();
            } else {
                this.activeTab = 'login';
            }
        });
    },
};

const app = Vue.createApp(appOptions);
app.mount('#app');
