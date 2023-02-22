<template>
  <div class="d-switch" :class="{ 'is-checked': checked }">
    <input
      class="d-switch__input"
      ref="input"
      type="checkbox"
      :checked="checked"
      @change="handleInput"
      :disabled="disabled"
      :class="{ 'is-disabled': disabled }"
      @click="handleClick"
    />
    <span class="d-switch_action">
      <slot class="icon" name="active" v-if="checked"></slot>
      <slot class="icon" name="inactive" v-else></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
const props = defineProps({
  modelValue: {
    //绑定值，必须等于active-value或inactive-value，默认为Boolean类型
    type: [ Boolean],
    default:true
  },

  inactiveColor: {
    //switch 关闭时的背景色
    type: [String],
    default: '#ccc'
  },
  activeColor: {
    //switch 打开时的背景色
    type: [String],
    default: 'skyblue'
  },
  inactiveIcon: {
    //switch 关闭时的icon
    type: [String],
    default: ''
  },
  activeIcon: {
    //switch 打开时的icon
    type: [String],
    default: ''
  },
  disabled: {
    type: [Boolean],
    default: false
  },
  size: {
    type: [String],
    default: 'default'
  }
})
const emits = defineEmits(['update:modelValue', 'change','click'])

//获取input元素
const input = ref<HTMLInputElement | null>()
//判断当前组件是否是打开状态
const checked = computed(() => {
  return props.modelValue 
})
//input事件 获取当前input事件
const handleInput = () => {
  nextTick(() => {
    const val = input.value?.checked
    console.log(val);
    
    emits('update:modelValue', val) // 开关点击后的状态传给v-model
    emits('change', val) //给组件增加change 事件
  })
}
const handleClick = (e : Event)=>{

  emits('click',e)
}
let smallSize = {
  inputHeight: '20px',
  inputWidth: '40px',
  dotSize: '15px'
}
let finalSize = {
  inputHeight: '25px',
  inputWidth: '50px',
  dotSize: '20px'
}
let largeSize = {
  inputHeight: '35px',
  inputWidth: '70px',
  dotSize: '30px'
}
if (props.size == 'small') {
  Object.assign(finalSize, smallSize)
} else if (props.size == 'large') {
  Object.assign(finalSize, largeSize)
}
</script>

<style scoped lang="less">
.d-switch {
  position: relative;
  height: v-bind('finalSize.inputHeight');
  transition: background 0.2s;
  width: v-bind('finalSize.inputWidth');
  background: v-bind(inactiveColor);
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  .d-switch__input {
    position: relative;
    z-index: 1;
    margin: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .d-switch_action {
    position: absolute;
    transition: 0.2s;
    left: 25%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    height: v-bind('finalSize.dotSize');
    width: v-bind('finalSize.dotSize');
    background: #fff;
    border-radius: 50%;
    .iconStyle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .is-disabled {
    cursor: not-allowed; //鼠标禁用样式
  }
  &.is-checked {
    background-color: v-bind(activeColor);
    .d-switch_action {
      left: 100%;
      background: #fff;
      margin-left: -25%;
    }
  }
}
</style>
