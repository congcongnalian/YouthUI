<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, getCurrentInstance } from 'vue';
import classnames from 'classnames';
interface Props {
  span?: number;
  // offset?: number;
}

const props = withDefaults(defineProps<Props>(), {
  span: 24, //这个元素占据多少格子
  // offset: 0,
});

const styles = classnames(`grid-column-start:span ${props.span}`, {});

type ComputeOffSet = (span: number) => number;
const computeOffset: ComputeOffSet = inject('computeOffset')!;
let offset = computeOffset(props.span);
console.log('返回的', offset);
console.log(getCurrentInstance());
</script>

<style lang="less" scoped>
@import url(../style/col.less);
</style>
