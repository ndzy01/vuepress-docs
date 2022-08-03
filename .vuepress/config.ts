import { defineUserConfig, defaultTheme } from 'vuepress';
import pluginFullTextSearch from 'vuepress2-plugin-full-text-search';
import { containerPlugin } from '@vuepress/plugin-container';
import NdzyPlugin from './plugin/plugin-ndzy/node/index';
import { fun } from './readFiles';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'docs',
  description: '文档',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  ],
  theme: defaultTheme({
    logo: '/favicon.png',
    navbar: fun().nav,
    sidebar: fun().nav,
  }),
  // @ts-ignore
  plugins: [
    [pluginFullTextSearch],
    containerPlugin({
      type: 'tip',
    }),
    [NdzyPlugin],
  ],
});
