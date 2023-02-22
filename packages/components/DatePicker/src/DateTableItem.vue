<template>
  <span :class="tableItemClasses">{{ item.day }}</span>
</template>

<script lang="ts" setup>
import { dateTableItemProps } from './DateTable'
import { useNamespace } from 'packages/hooks/use-namespace'
import { computed } from 'vue'

const ns = useNamespace('table')
const props = defineProps(dateTableItemProps)
const tableItemClasses = computed(() => {
  const res = [ns.addBE('item', 'text')]
  res.push(ns.getClass('current-month', props.item.isCurrentMonth))
  if (props.activeDate === props.item.date)
    res.push(ns.getClass('active', true))
  return res
})
</script>

<style scoped></style>
