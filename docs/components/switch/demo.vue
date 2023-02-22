<template>
  <div>
    <y-switch v-model="value1" ></y-switch>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
let value1 = ref(true)

</script>