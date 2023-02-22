<template>
  <div>
    <y-switch v-model="value1">
      <template #active>
        <y-icon type="#icon-select-bold" class="iconStyle" :size="1.4"></y-icon>
      </template>
      <template #inactive>
        <y-icon type="#icon-close-bold" class="iconStyle" :size="1.4"></y-icon>
      </template>
    </y-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let value1 = ref(true)
</script>

<style lang="less"></style>
