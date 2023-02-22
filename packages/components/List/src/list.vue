<template>
    <div class="list-container" ref="list">
      <slot></slot>
      <div class="dot-container" v-if="loading">
        <div class="dot-spinner">
          <div class="dot-spinner__dot" v-for=" in 8"></div>
        </div>
      </div>
     
        <div v-if="finished && finishedReminder" class="finished-slot">
          {{ finishedReminder }}
        </div>
      
     
        <div v-if="error && errorReminder && !loading" class="finished-slot" @click="changeError">
          {{ errorReminder }}
        </div>
      
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { useThrottleFn } from '@vueuse/core';
  interface Props {
    finishedReminder?: string; //加载完成后的提示
    loading?: boolean; //加载
    finished?: boolean; //加载完毕
    error?: boolean; //加载出错
    errorReminder?:string;//出错后的提示
    offset?:number; 
    disabled:boolean; //是否禁用滚动加载
  }
  
  const props = withDefaults(defineProps<Props>(), {
    finishedReminder: '',
    loading: false,
    finished: false,
    error:false,
    errorReminder:'',
    offset:300,
    disabled:false
  });
  
  const emit = defineEmits(['update:loading', 'onload','update:error',]);
  
  const list = ref<HTMLElement | null>();
  
  
  //鼠标滚轮事件
  function scrollChange() {
    let scrollHeight = (list.value as HTMLElement).scrollHeight; //正文总高度scrollHeight
    let offsetHeight = (list.value as HTMLElement).offsetHeight; //可见区域高度offsetHeight
    let scrollTop = (list.value as HTMLElement).scrollTop; //可滚动容器超出当前窗口显示范围的高度scrollTop
    if (scrollTop + offsetHeight > scrollHeight - props.offset && !props.finished) {
      updatedList();
    }
  }
  
  function changeError(){
    emit('update:error',false)
    emit('onload')
  }
  function updatedList() {
    emit('update:loading', true);
    emit('onload');
  }
  //在这里dom元素才被挂载上去
  onMounted(() => {
    emit('update:loading', true);
    emit('onload');
    //注册滚轮滑动事件
    if(!props.disabled){
      list.value?.addEventListener('scroll', useThrottleFn(scrollChange, 500));
    }
  });
  
  onBeforeUnmount(() => {
    list.value?.removeEventListener('scroll', scrollChange);
  });
  </script>
  
  <style lang="less" scoped>
  @import url(../style/list.less);
  </style>
  