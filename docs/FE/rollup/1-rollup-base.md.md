---
title: rollup 初使用
---

## 快速配置文件

首先创建一个工程 在工程下创建如下的列表

```shell
.
├── rollup.config.js #rollup 打包配置文件
├── package.json
└── src # es6 代码
    ├── index.js
    └── shard.js
```

在安装对应的模块

```shell
npm i --save-dev rollup
```

## rollup 配置

在 `rollup.config.js` 配置

> 这里的`package.json` 设置了 `type:module` 使用的是`esm` 规范

```js
import { join } from 'path'
const resolveFile = function (filePath) {
    return join(fileURLToPath(import.meta.url), '..', filePath)
}
export default {
    input: resolveFile('src/index.js'), // 入口文件
    output: {
	    file: resolveFile('dist/bundle.js') // 输出的文件
	    format: 'esm' // 转译之后的模块规范
    }
}
```

## 编译源码

> `src/index.js`

```js
import { foo } from "./shard";
function init() {
  foo();
}
init();
```

> `src/shard.js`

```js
export function foo() {
  console.log("this is foo");
}
```

简单配置完成之后 在终端输入

```shell
# -c 是--config 的缩写 后面如果不传入文件名
# 则按照下列顺序加载配置文件
# rollup.config.mjs -> rollup.config.cjs -> rollup.config.js
npx rollup -c
```

之后就能看到`dist/index.js` 是我们打包之后的文件

```js
function foo() {
  console.log("this is foo");
}

function init() {
  foo();
}

init();
```