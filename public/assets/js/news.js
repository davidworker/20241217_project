import {} from './main.js';
import { load as PageBanner } from './components/PageBanner.js';
import { load as NewsList } from './components/NewsList.js';

PageBanner('#news-banner-block', '最新消息');
NewsList('#news-list-block');
