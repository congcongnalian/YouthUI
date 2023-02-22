<template>
  <div class="container" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type Directives = 'vertical' | 'horizontal';
interface Props {
  direction?: Directives;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'vertical', //容器flex布局的方向，默认是竖直
});

const style = `flex-direction: ${
  props.direction == 'horizontal' ? 'row' : 'column'
};`;
</script>

<style lang="less" scoped>
.container {
  display: flex;
  width: 100%;
}
</style>
