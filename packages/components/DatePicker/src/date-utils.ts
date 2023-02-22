export const weekList = ['日', '一', '二', '三', '四', '五', '六']

export type DateData = {
  year: number
  month: number
  day: number
  getFormatDate: () => string
}

export const getDate = (date: Date) => {
  const res: DateData = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    getFormatDate() {
      return `${this.year}-${this.month}-${this.day}`
    }
  }

  return res
}

export type DateTableItem = {
  // Day of the Month
  day: number
  isCurrentMonth: boolean
  active: boolean
  date: string
}
export type DateTable = DateTableItem[][]

const tableNum = 42
const rowNum = 6
const colNum = 7

/**
 * @description: Get the length of the month
 * @param {number} year
 * @param {number} month
 * @return {number} The length of the month(28~31)
 */
export const getMonthLength = (year: number, month: number) => {
  return new Date(year, month, 0).getDate()
}

/**
 * @description: Get the first day of the week of the month
 * @param {number} year
 * @param {number} month
 * @return {*} Sunday -> Saturday 0 -> 6
 */
export const getFirstDayOfWeek = (year: number, month: number) => {
  return new Date(year, month - 1, 1).getDay()
}

export const getDateTable = (year: number, month: number) => {
  const res: DateTableItem[][] = Array.from(Array(rowNum), () => [])

  let lastMonthLength = getMonthLength(year, month - 1)
  const currentMonthLength = getMonthLength(year, month)
  const currentFirstDay = getFirstDayOfWeek(year, month)
  let lastMonthPointer = 1
  let currentMonthPointer = 1
  let nextMonthPointer = 1

  for (let i = 0; i < tableNum; i++) {
    // get the int number!
    const col = Math.floor(i / colNum)

    if (lastMonthPointer <= currentFirstDay) {
      // deal last month
      res[col].push({
        day: lastMonthLength,
        isCurrentMonth: false,
        active: false,
        date: `${year}-${month - 1}-${lastMonthLength}`
      })
      lastMonthLength--
      lastMonthPointer++
    } else if (currentMonthPointer <= currentMonthLength) {
      // deal current month
      res[col].push({
        day: currentMonthPointer,
        isCurrentMonth: true,
        // 判断是否是当天
        active:
          new Date().getFullYear() == year &&
          new Date().getMonth() + 1 == month &&
          currentMonthPointer == new Date().getDate(),
        date: `${year}-${month}-${currentMonthPointer}`
      })
      currentMonthPointer++
    } else {
      // deal next month
      res[col].push({
        day: nextMonthPointer,
        isCurrentMonth: false,
        active: false,
        date: `${year}-${month + 1}-${nextMonthPointer}`
      })
      nextMonthPointer++
    }
  }

  return res
}
