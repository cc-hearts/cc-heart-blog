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

  watch(
    () => props[keys],
    (val) => {
      if (proxy.value !== val) {
        proxy.value = JSON.parse(JSON.stringify(val));
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
