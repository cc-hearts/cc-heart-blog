---
title: TODO
---

<script setup>
  import ProgressBar from '../components/library/progressbar.vue'
</script>

# 🌰 TODO

<details>
<summary>game</summary>
<ProgressBar content="grid games" alt="https://codingfantasy.com/games/flexboxadventure/play" :step="3" :total="84" />
<ProgressBar content="xss games" alt="https://xss-game.appspot.com/level2" :step="2" :total="6" />
</details>

<details>
<summary>vue</summary>
<ProgressBar content="vue" title="计算属性" alt="https://cn.vuejs.org/guide/introduction.html" :step="20" :total="100" />

> `v-if` 的优先级要比`v-for` 更高

> `ref` 在深层响应式中会被解包（脱去`value`） 当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包。

> `$ref` 代替`ref.value`

> 计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。

</details>


- rollup promise use

