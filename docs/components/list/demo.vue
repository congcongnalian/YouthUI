<template>
  <div>
    <y-list
      finished-reminder="加载完成了"
      :finished="finished"
      v-model:loading="loading"
      @onload="onLoad"
    >
      <y-cell v-for="(item, index) in list" :key="index" :content="item">
      </y-cell>
      <!-- <template #finished>111</template> -->
      <!-- <template #error>3333</template> -->
    </y-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const list = ref<Array<number>>([]);
const loading = ref(false);
const finished = ref(false);
// const refreshing = ref(false);
const onLoad = () => {
  
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }
    // 加载状态结束
    loading.value = false;
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
  
};
</script>

<style lang="less" scoped></style>
