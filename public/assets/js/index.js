import {} from './main.js';
import { load as loadIndexBanner } from './components/IndexBanner.js';
import { load as loadIndexService } from './components/IndexService.js';
import { load as loadIndexStaff } from './components/IndexStaff.js';
import { load as PageContact } from './components/PageContact.js';

loadIndexBanner('#index-banner-block');
loadIndexService('#index-service-block');
loadIndexStaff('#index-staff-block');
PageContact(
    '#index-contact-block',
    '專業協助',
    '探索最新的科技解決方案，我們的專業團隊將為您量身打造數位轉型策略',
    '立即諮詢'
);
