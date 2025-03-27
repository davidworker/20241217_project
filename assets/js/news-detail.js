import {} from './main.js';
import { load as PageBanner } from './components/PageBanner.js';
import { load as NewsDetailBody } from './components/NewsDetailBody.js';
import { load as PageContact } from './components/PageContact.js';

PageBanner('#news-detail-banner-block', '最新消息', {
    subtitle: '掌握老夫科技最新動態，了解產業創新趨勢',
});

NewsDetailBody('#news-detail-body-block');
PageContact(
    '#news-detail-contact-block',
    '打造您的數位轉型方案',
    '想了解如何為您的企業打造專屬的數位轉型方案？',
    '立即諮詢'
);
