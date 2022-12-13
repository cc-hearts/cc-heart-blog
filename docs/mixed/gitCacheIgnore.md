---
title: git ignore track files
---

# git ignore track files

`.gitignore` 只能忽略那些原来没有被 `track` 的文件 因此要把本地缓存的`track` 文件清除再`commit` 即可清除缓存

```shell
$ git rm -r cached .
$ git add .
$ git commit -m 'chore: update .gitignore file'
```
