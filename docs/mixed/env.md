---
title: 环境变量 配置
---

## node 环境变量配置

> 淘宝源镜像地址

```shell
npm config set registry https://registry.npmmirror.com
```

> npm 官方源地址

```shell
npm config set registry https://registry.npmjs.org
```

## node 全局安装的包位置查看

yarn:

```shell
yarn global list --depth=0
```

npm

```shell
npm list -g --depth=0
```
