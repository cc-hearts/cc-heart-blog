---
title: nest 学习之路
---

# nest 学习

执行的流程

> 发起的请求 ==> 中间件 ==> 守卫 ==> 拦截器(next.handle() 之前) ==> 管道 ==> 执行对应的 Controller 方法 ==> 拦截器(next.handle() 之后) ==> 请求结束 返回内容

> 这里中间件 ==> 到拦截器中的所有的异常 都可以被异常过滤器捕获

- [版本控制](./version.md)

- [环境变量配置](./envVariable.md)

- [前缀](./prefix.md)

- [拦截器](./interceptor.md)
