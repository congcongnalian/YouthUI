<template>
  <div class="switch-container">
    <y-switch v-model="value1" size="small"></y-switch>
    <y-switch v-model="value1"></y-switch>
    <y-switch v-model="value1" size="large"></y-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let value1 = ref(true)
</script>

<style lang="less">
.switch-container{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
