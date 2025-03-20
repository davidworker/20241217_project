import {} from './main.js';
import { load as PageBanner } from './components/PageBanner.js';
import { load as PartnerCompany } from './components/PartnerCompany.js';
import { load as PartnerIndustry } from './components/PartnerIndustry.js';

PageBanner('#partner-banner-block', '合作夥伴');
PartnerCompany('#partner-company-block');
PartnerIndustry('#partner-industry-block');
