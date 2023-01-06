---
title: Golang基本语法介绍
---



## 使用Map 实现一个Set 集合

> 在Go中，空结构通常不使用任何内存

```go
unsafe.Sizeof(struct{}{}) // 结果为 0
```

因此可以使用`空结构` 作为`Map` 的第二项

```go
func main() {
	type void struct{}
	var undefined void
	set := make(map[string]void)
	// add
	set["foo"] = undefined

	// each
	for v := range set {
		fmt.Println(v)
	}

	// delete
	delete(set, "foo")
	// size
	size := len(set)
	fmt.Println(size)
}
```

## 遍历字符串

```go
func main() {
	var a = "123"

	for index, unicode := range a {
		fmt.Println(index, unicode)
	}
}
```


##

- [golang 设计模式](https://mp.weixin.qq.com/s/9iXdsgtuQh6pge5vSDPoQA)