<template>
  <div>
    
    <svg class="icon"  :style="finalStyle">
      <use :xlink:href="type"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import '../assets/iconfont.js'
import {computed} from 'vue'
interface Props {
  size?: number
  type: string
}
const props = withDefaults(defineProps<Props>(), {
  size: 2,
  type: ''
})

const finalStyle = computed(()=>{
  return `width:${props.size}em; height:${props.size}em;`
})
</script>

<style scoped lang="less">

.icon {
  vertical-align: -0.15em;
  overflow: hidden;
  // fill: red;
}
</style>
