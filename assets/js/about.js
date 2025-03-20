import {} from './main.js';
import { load as PageBanner } from './components/PageBanner.js';
// import { load as loadAboutInfo } from './components/AboutInfo.js';
import { load as loadAboutInfoVue } from './components/AboutInfoVue.js';
import { load as loadAboutValue } from './components/AboutValue.js';

PageBanner('#about-banner-block', '關於我們');
// loadAboutInfo('#about-info-block');
loadAboutInfoVue('#about-info-block');
loadAboutValue('#about-value-block');
