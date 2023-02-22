<template>
  <div>
    <input v-model="selectDate" placeholder="please select" />
    <div class="y-date-picker">
      <div class="y-date-picker-header clickable">
        <div>
          <span @click="handleYearClick(-1)">&lt;&lt;</span>
          <span @click="handleMonthClick(-1)">&lt;</span>
        </div>
        <span>{{ date.year }}</span>
        <span>{{ date.month }}</span>
        <div>
          <span @click="handleMonthClick(1)">&gt;</span>
          <span @click="handleYearClick(1)">&gt;&gt;</span>
        </div>
      </div>
      <transition>
        <DateTable
          @date-change="handleDateChange"
          :date="date"
          :year="date.year"
          :month="date.month"
        ></DateTable>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, Ref, ref } from 'vue'
import { getDateTable, getDate } from './date-utils'
import DateTable from './DateTable.vue'

const date = reactive(getDate(new Date()))
let year = ref(2023)
let month: Ref<number> = ref(2)
const selectDate = ref('')

const handleDateChange = (date: string) => {
  console.log('date-change', date)
  selectDate.value = date
}

const handleMonthClick = (sign: number) => {
  date.month += sign
  if (date.month === 0) {
    date.year--
    date.month += 12
  } else if (date.month > 12) {
    date.year++
    date.month -= 12
  }
}

const handleYearClick = (sign: number) => {
  date.year += sign
}
</script>

<style scoped lang="less">
.y-date-picker {
  width: 400px;
  border: 1px solid var(--y-color-border);
  .y-date-picker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px 5px;
    // box-sizing: border-box;

    span {
      cursor: pointer;
    }

    span + span {
      margin-left: 12px;
    }
  }
}
.clickable {
  span {
    &:hover {
      color: var(--y-color-primary);
    }
  }
}
</style>
