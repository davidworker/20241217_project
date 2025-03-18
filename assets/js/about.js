import {} from './main.js';
import { load as loadAboutBanner } from './components/AboutBanner.js';
import { AboutInfoAPI } from './api/AboutInfoAPI.js';

loadAboutBanner('#about-banner-block');

const aboutInfo = await AboutInfoAPI.get();
let html = '';
aboutInfo.forEach(function (info) {
    html += `<${info.title_tag}>${info.title}</${info.title_tag}>
    <div class="info-block">${info.content}</div>`;
});

let app = document.querySelector('#about-info-app');
app.innerHTML = html;
