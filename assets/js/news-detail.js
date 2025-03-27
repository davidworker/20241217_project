import {} from './main.js';
import { load as PageBanner } from './components/PageBanner.js';
import { load as NewsDetailBody } from './components/NewsDetailBody.js';

PageBanner('#news-detail-banner-block', '最新消息', {
    subtitle: '掌握老夫科技最新動態，了解產業創新趨勢',
});

NewsDetailBody('#news-detail-body-block');
