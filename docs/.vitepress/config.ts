import { DefaultTheme, defineConfig } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  { text: "Guide", link: "/guide/" },
  { text: "Components", link: "/components/" },
  // 顶部导航下拉菜单按如下方式：
  {
    text: "FE",
    items: [
      { text: "node", link: "/FE/node/" },
      { text: "vue", link: "/FE/vue/" },
    ],
  },
  {
    text: "TODO",
    link: "/todo/",
  },
  {
    text: "mixed",
    link: "/mixed/",
  },
];

export default defineConfig({
  title: "heart blog",
  description: "life",
  lang: "cn-ZH",
  base: "/",
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: {
    nav,
  },
});
