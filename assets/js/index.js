import {} from './main.js';
import { load as loadIndexBanner } from './components/IndexBanner.js';
import { load as loadIndexService } from './components/IndexService.js';
import { load as loadIndexStaff } from './components/IndexStaff.js';

loadIndexBanner('#index-banner-block');
loadIndexService('#index-service-block');
loadIndexStaff('#index-staff-block');
