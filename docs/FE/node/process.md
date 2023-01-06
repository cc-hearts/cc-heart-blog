---
title: process
---

# process

堆内存使用情况

```js
function usedSize() {
  // 获取堆内存使用情况
  const used = process.memoryUsage().heapUsed;
  return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
}
```
