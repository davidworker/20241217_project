import {} from './main.js';
import { load as loadAboutBanner } from './components/AboutBanner.js';
import { load as loadAboutInfo } from './components/AboutInfo.js';

loadAboutBanner('#about-banner-block');
loadAboutInfo('#about-info-block');

// const aboutInfo = await AboutInfoAPI.get();
// let html = '';
// aboutInfo.forEach(function (info) {
//     html += `<${info.title_tag}>${info.title}</${info.title_tag}>
//     <div class="info-block">${info.content}</div>`;
// });

// let app = document.querySelector('#about-info-app');
// app.innerHTML = html;

// const app = Vue.createApp({
//     data() {
//         return {
//             items: aboutInfo,
//         };
//     },
//     mounted() {
//         console.log('aboutInfo', this.items);
//     },
// });

// app.mount('#about-info-app');
