import {} from './main.js';
import { load as loadAboutBanner } from './components/AboutBanner.js';
// import { load as loadAboutInfo } from './components/AboutInfo.js';
import { load as loadAboutInfoVue } from './components/AboutInfoVue.js';

loadAboutBanner('#about-banner-block');
// loadAboutInfo('#about-info-block');
loadAboutInfoVue('#about-info-block');
