import type { Plugin } from '@vuepress/core';
import { path } from '@vuepress/utils';

export const NdzyPlugin = (): Plugin => ({
  name: '@vuepress/ndzy',

  clientConfigFile: path.resolve(__dirname, '../client/config.ts'),
});
