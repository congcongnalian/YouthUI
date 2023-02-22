<template>
  <div>
    <y-progress :percentage="70" />
    <y-progress :percentage="40" />
    <y-progress :percentage="40" status="warning" />
    <y-progress :percentage="40" status="danger" />
    <y-progress :percentage="40" :barHeight="30" />
    <y-progress :percentage="40" :barHeight="30" :textInside="true" />
  </div>
</template>

<!-- <script lang="ts" setup>
import y-process from '../src/index.vue'
</script> -->
