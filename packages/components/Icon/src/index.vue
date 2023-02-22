<template>
  <div>
    
    <!-- <svg class="icon"  :style="finalStyle">
      <use :xlink:href="type"></use>
    </svg> -->

    <span :class="finalClassName" :style="finalStyle"></span>
  </div>
</template>

<script lang="ts" setup>
import classnames from 'classnames';
import {computed} from 'vue'
interface Props {
  size?: number
  type: string
  color:string
}
const props = withDefaults(defineProps<Props>(), {
  size: 30,
  color:'',
  type: ''
})



const finalClassName = classnames( 'iconfont','icon', {
  [`${props.type}`]:props.type
});
const finalStyle = classnames(`font-size: ${props.size}px;`,{
  [`color:${props.color}`]:props.color
});
</script>

<style scoped lang="less">
@import url(../assets/iconfont.css);
.icon {
  vertical-align: -0.15em;
  overflow: hidden;
  fill: red;
}
</style>
