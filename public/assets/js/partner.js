import {} from './main.js';
import { load as PageBanner } from './components/PageBanner.js';
import { load as PartnerCompany } from './components/PartnerCompany.js';
import { load as PartnerIndustry } from './components/PartnerIndustry.js';
import { load as PageContact } from './components/PageContact.js';

PageBanner('#partner-banner-block', '合作夥伴');
PartnerCompany('#partner-company-block');
PartnerIndustry('#partner-industry-block');
PageContact(
    '#partner-contact-block',
    '成為合作夥伴',
    '我們歡迎各產業的合作提案，一起創造更多可能性',
    '聯絡我們'
);
