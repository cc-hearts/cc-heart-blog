<template>
  <div>
    <span>
      {{ content }}
    </span>
    <div
      id="progress-bar"
      :style="{
        '--progress-bar-step': percentWidth,
      }"
    >
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// @ts-ignore
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  total: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 0,
  },
});

const percentWidth = computed(() => {
  return Number.parseFloat(String((props.step * 100) / props.total)) + "%";
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";
#progress-bar {
  --#{$prefix}-progress-bar-bgc: #f57c00;
  --progress-bar-step: 0;
  --#{$prefix}-progress-bar-transform: rgba(255, 255, 255, 0.4);
  width: 400px;
  height: 20px;
  line-height: 20px;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
  background-color: #f5f5f5;
  opacity: 0.95;
  & > div {
    width: var(--progress-bar-step);
    height: 100%;
    background-color: var(--#{$prefix}-progress-bar-bgc);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
      height: 100%;
      background: linear-gradient(
        45deg,
        transparent 25%,
        var(--#{$prefix}-progress-bar-transform) 25%,
        var(--#{$prefix}-progress-bar-transform) 50%,
        transparent 50%,
        transparent 75%,
        var(--#{$prefix}-progress-bar-transform) 75%,
        var(--#{$prefix}-progress-bar-transform)
      );
      background-size: 40px 40px;
      animation: move-background-position 2s linear infinite;
    }
  }
}

@keyframes move-background-position {
  0% {
    background-position: 40px 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
