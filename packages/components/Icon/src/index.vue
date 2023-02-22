<template>
  <div>
    <!-- <svg class="icon" :style="finalStyle">
      <use :xlink:href="type"></use>
    </svg> -->
    <i :class="iconClass"></i>
  </div>
</template>

<script lang="ts" setup>
// import '../assets/iconfont.js'
import { computed } from 'vue'
interface Props {
  size?: number
  type: string
}
const props = withDefaults(defineProps<Props>(), {
  size: 2,
  type: ''
})

const iconClass = ['iconfont', `icon-${props.type}`]

const finalStyle = computed(() => {
  return `width:${props.size}em; height:${props.size}em;`
})
</script>

<style scoped lang="less">
@import '../assets/demo.css';
.icon {
  vertical-align: -0.15em;
  overflow: hidden;
  // fill: red;
}
</style>
