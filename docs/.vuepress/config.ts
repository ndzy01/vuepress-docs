import { defineUserConfig, defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
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
        { text: "test", children: ["/test/a.md"] },
      ],
    },
  }),
  plugins: [
    docsearchPlugin({
      apiKey: "",
      appId: "",
      indexName: "",
    }),
  ],
});
