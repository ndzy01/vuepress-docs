import { defineUserConfig, defaultTheme } from "vuepress";
import pluginFullTextSearch from "vuepress2-plugin-full-text-search";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "docs",
  description: "文档",
  head: [],
  theme: defaultTheme({
    logo: "",
    sidebar: {
      "/": [
        {
          text: "首页",
          children: ["/README.md"],
        },
        { text: "测试", link: "/abc/a" },
      ],
    },
  }),
  // @ts-ignore
  plugins: [[pluginFullTextSearch]],
});
