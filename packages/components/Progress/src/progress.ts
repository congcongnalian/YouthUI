import { ExtractPropTypes } from 'vue'

export type ProgressProps = ExtractPropTypes<typeof progressProps>
export const progressProps = {
  type: {
    type: String,
    default: 'line',
    values: ['line', 'circle']
  },
  percentage: {
    type: Number,
    require: true,
    validator: (val: number): boolean => val >= 0 && val <= 100
  },
  status: {
    type: String,
    values: ['success', 'danger', 'warning']
  },
  textInside: {
    type: Boolean,
    default: false
  },
  barHeight: {
    type: Number
  }
}

export const useInnerStyle = (props: ProgressProps) => {
  let innerStyle: Record<string, string> = {}
  innerStyle = {
    width: `${props.percentage}%`
  }
  if (props.status) {
    innerStyle['background-color'] = `var(--y-color-${props.status})`
  }
  return innerStyle
}

export const useBarStyle = (props: ProgressProps) => {
  let barStyle: Record<string, string> = {}
  if (props.barHeight) {
    barStyle = {
      height: `${props.barHeight}px`
    }
  }

  return barStyle
}

// export const dealTextPosition = (width)
