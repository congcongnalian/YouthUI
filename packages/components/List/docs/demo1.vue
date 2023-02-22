<template>
  <div>
    <y-list
      :finished="finished"
      v-model:error="error"
      error-reminder="请求失败,点击重新加载"
      v-model:loading="loading"
      @onload="onLoad"
    >
      <y-cell v-for="(item, index) in list" :key="index" :content="item">
      </y-cell>
      <template #error>3333</template>
    </y-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const list = ref<Array<number>>([])
const loading = ref(false)
const error = ref(false)
const finished = ref(false)
error.value = true
const onLoad = () => {
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }
    // 加载状态结束
    loading.value = false
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
</script>

<style lang="less" scoped></style>
