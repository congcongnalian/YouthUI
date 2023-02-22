<template>
  <div :style="style" :class="finalClassName">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: '300px',
});

const style = `width: ${props.width};`;
const finalClassName = 'yt-aside';
</script>

<style lang="less" scoped></style>
