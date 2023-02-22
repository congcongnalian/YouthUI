<template>
  <div :style="style" :class="finalClassName">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: '60px',
});

const style = `height: ${props.height};`;

const finalClassName = 'yt-footer';
</script>

<style lang="less" scoped></style>
