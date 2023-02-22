<template>
  <table class="y-date-table">
    <thead>
      <th v-for="item in weekList">{{ item }}</th>
    </thead>
    <!-- <DateTableContent
      :date-table="dateTable"
      @date-change="handleDateChange"
    ></DateTableContent> -->
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
  </table>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'
import { computed, ref } from 'vue'
import { getDateTable, DateTableItem } from './date-utils'
import { dateTableProps } from './DateTable'
// import DateTableContent from './DateTableContent.vue'
import DateTableItemComp from './DateTableItem.vue'
const weekList = ['日', '一', '二', '三', '四', '五', '六']

const emit = defineEmits<{
  (e: 'dateChange', date: string): void
}>()

const props = defineProps(dateTableProps)
let { date } = props

// const today = getToday()
let activeDate = ref(props.date.getFormatDate())
let dateTable = computed(() => getDateTable(date.year, date.month))

const ns = useNamespace('table')
const tableItemClasses = computed(() => {
  const res = [ns.addBlock('item')]

  return res
})

const handleClick = (item: DateTableItem) => {
  activeDate.value = item.date
  emit('dateChange', item.date)
}

// const handleDateChange = (activeDate: string) => {
//   emit('dateChange', activeDate)
// }
</script>

<style scoped lang="less">
@import 'packages/styles/date-picker/date-table.less';
</style>
