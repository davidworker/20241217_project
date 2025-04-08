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
    set,
    push,
    update,
    remove,
    get,
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

/**
 * 讀取資料(x) 監聽資料(o)
 * @param {*} node
 * @returns
 */
// const getValue = node => {
//     return new Promise((resolve, reject) => {
//         const nodeRef = ref(database, node);
//         onValue(nodeRef, snapshot => {
//             resolve(snapshot.val());
//         });
//     });
// };

/**
 * 寫入資料，會強制覆蓋
 * @param {*} node
 * @param {*} value
 */
const setValue = (node, value) => {
    const nodeRef = ref(database, node);
    set(nodeRef, value);
};

/**
 * 新增資料，自動產生 key
 * @param {*} node
 * @param {*} value
 */
const appendValue = (node, value) => {
    const nodeRef = ref(database, node);
    const newRef = push(nodeRef); // 產生 key -> node/key
    set(newRef, value);
};

/**
 * 更新資料
 * @param {*} node
 * @param {*} object
 */
const updateValue = (node, object) => {
    const nodeRef = ref(database, node);
    update(nodeRef, object);
};

/**
 * 刪除資料
 * @param {*} node
 */
const removeValue = node => {
    const nodeRef = ref(database, node);
    remove(nodeRef);
};

/**
 * 取得資料
 * @param {*} node
 * @returns
 */
const getValue = async node => {
    const nodeRef = ref(database, node);
    const snapshot = await get(nodeRef);
    return snapshot.val();
};

export {
    auth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    getValue,
    setValue,
    appendValue,
    updateValue,
    removeValue,
};
