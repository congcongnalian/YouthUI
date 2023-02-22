import { ExtractPropTypes, PropType } from 'vue'
import { DateTable, DateTableItem, DateData } from './date-utils'

export type DateTableContentProps = ExtractPropTypes<
  typeof dateTableContentProps
>
export const dateTableContentProps = {
  dateTable: {
    type: Object as PropType<DateTable>,
    require: true
  }
}

export type DateTableItemProps = ExtractPropTypes<typeof dateTableItemProps>
export const dateTableItemProps = {
  item: {
    type: Object as PropType<DateTableItem>,
    require: true,
    default: {}
  },
  activeDate: {
    type: String
  }
}

export type DateTableProps = ExtractPropTypes<typeof dateTableProps>
export const dateTableProps = {
  date: {
    type: Object as PropType<DateData>,
    require: true,
    default: {}
  },
  year: {
    type: Number,
    require: true
  },
  month: {
    type: Number,
    require: true
  }
}
