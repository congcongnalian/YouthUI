<template>
  <div>
    <y-button>Default</y-button>
    <y-button type="primary">Primary</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="danger" disabled>Danger</y-button>
  </div>

  <div>
    <y-button type="primary" round>Primary</y-button>
    <y-button type="primary" circle></y-button>
  </div>

  <div class="top-align">
    <y-button size="large">Large</y-button>
    <y-button>Default</y-button>
    <y-button size="small">Small</y-button>
    <y-button size="large" round>Large</y-button>
    <y-button round>Default</y-button>
    <y-button size="small" round>Small</y-button>
  </div>
</template>

<script setup lang="ts">
const onClick = (num: number) => {
  console.log(`我是第 ${num} 个自定义按钮`)
}
</script>

<style scoped>
div + div {
  margin-top: 12px;
}

div {
  display: flex;
  align-items: center;
}

.top-align {
  display: flex;
  align-items: flex-start;
}
</style>
