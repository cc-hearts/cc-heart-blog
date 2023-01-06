---
title: useToggleDark
---

## useToggleDark

> `useToggleDark` 用于切换暗黑主题颜色(切换`dark/light`)

<details>
  <summary>useToggleDark.ts</summary>

<<< @/FE/vue/hooks/useToggleDark.ts

</details>

<details>
  <summary>style.css</summary>

<<< @/FE/vue/hooks/style.css

</details>

## useIsDark

`useIsDark` 用于判断当前是否是暗黑模式主题

<details>
  <summary>useIsDark.ts</summary>

<<< @/FE/vue/hooks/useIsDark.ts

</details>

## 封装暗黑主题切换的 switch

> 样式配色参考 `vite press` 配色

<script setup>
  import SwitchTheme from './switchTheme.vue'
</script>

<SwitchTheme />

<details>
  <summary>switchTheme.vue</summary>

<<< @/FE/vue/hooks/switchTheme.vue

</details>
