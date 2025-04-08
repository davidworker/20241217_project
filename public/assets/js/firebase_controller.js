import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js';
import {
    getDatabase,
    ref,
    onValue,
} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js';

const firebaseConfig = {
    apiKey: 'AIzaSyADy44FOAxyRhzyLYgLiPAfJSutzHa4Tro',
    authDomain: 'frontend-20241217.firebaseapp.com',
    databaseURL: 'https://frontend-20241217-default-rtdb.firebaseio.com',
    projectId: 'frontend-20241217',
    storageBucket: 'frontend-20241217.firebasestorage.app',
    messagingSenderId: '165877491279',
    appId: '1:165877491279:web:048174e5b481e306616c3a',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const getValue = node => {
    return new Promise((resolve, reject) => {
        const nodeRef = ref(database, node);
        onValue(nodeRef, snapshot => {
            resolve(snapshot.val());
        });
    });
};

export {
    auth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    getValue,
};
