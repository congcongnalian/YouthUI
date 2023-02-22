<template>
    <div class="cell-container">
      <slot>{{ content }}</slot>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    content?: number;//要是没有传递插槽这里面就是插槽的默认内容
  }
  
  const props = withDefaults(defineProps<Props>(), {
    content: 0,
  });
  </script>
  
  <style lang="less" scoped>
  .cell-container {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 4px;
    background: linear-gradient(145deg, #f7fbff, #e9f1f6);
    border-bottom: 1px solid #ccc;
  }
  </style>
  