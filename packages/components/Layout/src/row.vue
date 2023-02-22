<template>
  <div :class="finalClassName" :style="finalStyles" ref="row">
    <slot :computeOffset="computeOffset"></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, getCurrentInstance } from 'vue'
import classnames from 'classnames'
type Justify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'

type Align = 'start' | 'center' | 'end'
interface Props {
  justify?: Justify
  align?: Align
  flex?: boolean
  gutter?: number
}

const props = withDefaults(defineProps<Props>(), {
  justify: 'start', //主轴的对齐方式
  align: 'start', //侧轴的对齐方式
  flex: false, //是否使用flex布局
  gutter: 0 //grid布局间隔
})

// 类名合并工具classnames
const finalClassName = classnames('row-bg', 'yt-row', {
  ['row-flex-container']: props.flex,
  ['row-grid-container']: !props.flex
})
//也用来组合style样式
const finalStyles = classnames(
  `justify-content:${props.justify};`,
  `align-items:${props.align};`,
  {
    [`grid-gap: ${props.gutter}px;`]: props.gutter
  }
)

let offset = 0

function computeOffset(span: number): number {
  offset = +span
  return offset
}
provide('computeOffset', computeOffset)
</script>

<style lang="less" scoped>
@import url(../style/row.less);
</style>
