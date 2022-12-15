import { ref, watch, type Ref, type UnwrapNestedRefs } from "vue";
import { getCurrentInstance } from "vue";

export function useVModel<T>(
  props: Ref<T> | UnwrapNestedRefs<T>,
  keys: keyof typeof props,
  emitName?: string
) {
  const vm = getCurrentInstance();
  const _emit = vm?.proxy?.$emit.bind(vm.proxy);
  emitName = emitName ?? "update:modelValue";
  const proxy = ref(props[keys]);
  function cloneFn(fn: (...args: any) => any) {
    // 可以new的函数
    if (fn.prototype) {
      return function () {
        return fn.call(this, arguments);
      };
    } else {
      return (...rest: any[]) => fn.call(this, rest);
    }
  }

  const _toString = Object.prototype.toString;

  const getType: (str: unknown) => string = (str) =>
    _toString.call(str).slice(8, -1);

  function deepClone(data: any) {
    switch (getType(data)) {
      case "Object":
        let _data = {};
        Object.keys(data).forEach((key) => {
          Reflect.set(_data, key, deepClone(data[key]));
        });
        return _data;
      case "Function":
        return cloneFn(data);
      case "Array":
        return [...data];
      case "Date":
        return new Date(data - 0);
      case "RegExp":
        return new RegExp(data.source, data.flags);
      default:
        return data;
    }
  }

  watch(
    () => props[keys],
    (val) => {
      if (proxy.value !== val) {
        proxy.value = deepClone(val);
      }
    },
    { deep: true }
  );

  watch(
    () => proxy?.value,
    (val) => {
      if (val !== props[keys]) {
        _emit?.(emitName!, val);
      }
    }
  );
  return proxy;
}
