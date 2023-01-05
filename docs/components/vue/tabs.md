---
title: tabs components
---

# tabs 切换导航组件

导航切换组件

## 普通用法

<script setup>
  import { reactive, ref } from 'vue'
  import Tabs from './core/tabs.vue'
  const tabsProps = reactive({
    columns: [
      {text: 'user'},
      {text: 'config'},
      {text: 'role'},
      {text: 'task'},
    ]
  })

  const slotTabsProps = reactive({
    columns: [
      { slot: { name : 'user'} },
      { text :'config' },
      { text :'role' },
      { text :'task' },
    ]
  })

  const active = ref(2)
</script>

<div>
  <Tabs v-bind="tabsProps" />
</div>

```vue
<script setup>
import { reactive } from "vue";
import Tabs from "./core/tabs.vue";
const tabBarProps = reactive({
  columns: [
    { text: "user" },
    { text: "config" },
    { text: "role" },
    { text: "task" },
  ],
});
</script>

<template>
  <div>
    <Tabs v-bind="tabBarProps" />
  </div>
</template>
```

## 插槽使用

<div>
   <Tabs v-bind="slotTabsProps">
    <template #user>
      <i>123213</i>
    </template>
   </Tabs>
</div>

```vue
<script setup>
import { reactive } from "vue";
import Tabs from "./core/tabs.vue";
const slotTabsProps = reactive({
  columns: [
    { slot: { name: "user" } },
    { text: "config" },
    { text: "role" },
    { text: "task" },
  ],
});
</script>

<template>
  <div>
    <Tabs v-bind="slotTabsProps">
      <template #user>
        <i>123213</i>
      </template>
    </Tabs>
  </div>
</template>
```

## active

使用`active` 属性可以控制显示的 tab 拦

  <Tabs v-bind="slotTabsProps" v-model:active="active">
    <template #user>
      <i>123213</i>
    </template>
   </Tabs>

```vue
<script setup>
  const active = ref(2);
</script>

<template>
  <Tabs v-bind="slotTabsProps" v-model:active="active">
    <template #user>
      <i>123213</i>
    </template>
   </Tabs>
</template>
```
