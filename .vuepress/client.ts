import { defineClientConfig } from '@vuepress/client';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './index.css';
import Pwd from './components/pwd.vue';
import CodeDiv from './components/codeDiv.vue';

export default defineClientConfig({
  enhance({ app, router }) {
    app.use(Antd);
    app.component('n-pwd', Pwd);
    app.component('n-code', CodeDiv);

    router.beforeEach((to, from, next) => {
      const flag = globalThis.localStorage?.getItem('flag') || '';

      if (to.path !== '/') {
        if (flag === 'ndzy') {
          next();
        } else {
          next({ path: '/' });
        }
      } else {
        next();
      }
    });
  },
});
