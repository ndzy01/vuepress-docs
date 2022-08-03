import { defineClientConfig } from '@vuepress/client';
import { NdzyPlugin } from './components';

export default defineClientConfig({
  rootComponents: [NdzyPlugin],
});
