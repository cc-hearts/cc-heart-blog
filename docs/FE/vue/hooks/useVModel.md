---
title: useVModel 的实现
---

实现一个简易版的`useVModel` 可以避免`children.vue` 重复定义许多的 emits 以及转发函数

DONE:
- [x] 支持`ref`、`reactive` 等两种

```vue
<!-- children.vue -->
<template>
  <input :value="modelValue" @input="handleChange" />
</template>
<script lang="ts">
defineProps<{ modelValue: string }>();
const emits = defineEmits(["update:modelValue"]);
function handleChange(...args) {
  emits("update:modelValue", args);
}
</script>

<!-- app.vue -->
<template>
  <Children v-model="data" />
</template>
<script lang="ts" setup>
const data = ref("");
</script>
```

使用`useVModel` 简化事件的声明发布:

```vue
<!-- children.vue -->
<template>
  <input v-model="modelValue" />
</template>
<script lang="ts" setup>
const props = defineProps<{ modelValue: string }>();
const data = useVModel(props.modelValue);
</script>
```

<details>
  <summary>详情</summary>

<<< @/FE/vue/hooks/useVModel.ts

</details>
