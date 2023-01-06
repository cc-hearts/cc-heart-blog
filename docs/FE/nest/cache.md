---
title: cache 缓存模块
---

## Redis 缓存
 TODO
## 使用 缓存拦截器
> 缓存拦截器可以使用在`get` 请求上 这样可以走`协商缓存`
```ts
  @Get('api')
  @CacheTTL(10) // 缓存时间
  @UseInterceptors(CacheInterceptor)
  getHello(): { cache: string } {
    return { cache: 'cache' };
  }
```
## 参考资料

- [nest docs caching](https://docs.nestjs.com/techniques/caching)
