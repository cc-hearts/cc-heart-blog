---
title: tabBar
---

# tabs 切换导航组件

导航切换组件

## 普通用法

<script setup>
  import {reactive} from 'vue'
  import Tabs from './core/tabs.vue'
  const tabBarProps = reactive({
    columns: [
      {text: 'user'},
      {text: 'config'},
      {text: 'role'},
      {text: 'task'},
    ]
  })
</script>

<div>
  <Tabs v-bind="tabBarProps" />
</div>