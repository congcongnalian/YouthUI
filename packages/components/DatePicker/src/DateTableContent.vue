<template>
  <tbody>
    <tr v-for="dayRow in dateTable">
      <td
        v-for="item in dayRow"
        :class="tableItemClasses"
        @click="handleClick(item)"
      >
        <DateTableItemComp
          :key="item.date"
          :item="item"
          :active-date="activeDate"
        ></DateTableItemComp>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts" setup>
import DateTableItemComp from './DateTableItem.vue'
import { dateTableContentProps } from './DateTable'
import { DateTableItem, getDate } from './date-utils'
import { useNamespace } from 'packages/hooks/use-namespace'
import { computed, ref } from 'vue'

const ns = useNamespace('table')
const props = defineProps(dateTableContentProps)
const emit = defineEmits<{
  (e: 'dateChange', date: string): void
}>()

const tableItemClasses = computed(() => {
  const res = [ns.addBlock('item')]

  return res
})

const today = getDate(new Date())
let activeDate = ref(`${today.year}-${today.month}-${today.day}`)

const handleClick = (item: DateTableItem) => {
  activeDate.value = item.date
  emit('dateChange', activeDate.value)
}
</script>

<style scoped lang="less">
@import 'packages/styles/date-picker/date-picker.less';
</style>
