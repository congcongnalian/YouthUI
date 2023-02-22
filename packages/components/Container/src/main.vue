<template>
  <div :class="finalClassName">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const finalClassName = 'yt-main';
</script>

<style lang="less" scoped></style>
