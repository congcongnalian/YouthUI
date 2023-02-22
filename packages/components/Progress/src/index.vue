<template>
  <div :class="progressClasses" ref="progressRef" :style="barStyle">
    <!-- whole bar -->
    <div :class="barClass">
      <!-- outside part -->
      <div :class="outerClasses">
        <!-- inside part -->
        <div :class="innerClasses" :style="innerStyle">
          <div :class="innerTextClasses" v-if="textInside">
            <span>{{ `${percentage}%` }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- text part with line-->
    <div :class="outerTextClasses" v-if="!textInside">
      <span v-if="!status">{{ `${percentage}%` }}</span>
      <i v-else></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'
import { onMounted, reactive, ref } from 'vue'
import { progressProps, useInnerStyle, useBarStyle } from './progress'

const progressRef = ref()
// onMounted(() => {
//   console.log(progressRef)
// })

const ns = useNamespace('progress')
const props = defineProps(progressProps)
const { type, textInside, barHeight, status } = props

const progressClasses = [ns.baseName, ns.addModifier(type)]
const barClass = [ns.addBlock('bar')]
const outerClasses = [ns.addBE('bar', 'outer')]
const innerClasses = [ns.addBE('bar', 'inner')]
const outerTextClasses = [ns.addElement('text')]
const innerTextClasses = [ns.addBE('bar', 'innerText')]

const innerStyle = useInnerStyle(props)
const barStyle = useBarStyle(props)
</script>

<style scoped lang="less">
@import 'packages/styles/progress/progress.less';
</style>
