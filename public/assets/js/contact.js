import {} from './main.js';
import { load as PageBanner } from './components/PageBanner.js';
import { load as ContactForm } from './components/ContactForm.js';
import { load as ContactAddress } from './components/ContactAddress.js';

PageBanner('#contact-banner-block', '聯絡我們');
ContactForm('#contact-form-block');
ContactAddress('#contact-address-block');
