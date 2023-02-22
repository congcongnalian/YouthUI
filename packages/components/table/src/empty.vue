<template>
  <tr class="table-empty-tr">
    <td :colspan="colspan"></td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  colspan: { type: Number, default: 0 }
});
</script>

<script>
export default { name: "table-empty" }
</script>