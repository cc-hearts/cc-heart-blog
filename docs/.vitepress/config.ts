import { DefaultTheme, defineConfig } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  { text: "Guide", link: "/guide/" },
  { text: "Components", link: "/components/" },
  // 顶部导航下拉菜单按如下方式：
  /*
  {
    text: 'Dropdown Menu',
    items: [
      { text: 'Item A', link: '/item-1' },
      { text: 'Item B', link: '/item-2' },
      { text: 'Item C', link: '/item-3' }
    ]
  }
   */
];

export default defineConfig({
  title: "heart blog",
  description: "life",
  lang: "cn-ZH",
  base: "/",
  lastUpdated: true,
  themeConfig: {
    nav
  }
});
