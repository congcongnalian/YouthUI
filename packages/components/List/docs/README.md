<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo1 from './demo1.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 列表组件

展示列表

## 基础用法
<Preview comp-name="List" demo-name="demo">
  <demo />
</Preview>

## 错误提示
<Preview comp-name="List" demo-name="demo1">
  <demo1 />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model:loading` | 是否处于加载状态，加载过程中不触发 onload 事件 | boolean | - | `false` | 是
`v-model:error` | 是否处于加载失败，加载失败后点击错误提示可以重新触发 onload 事件 | boolean | - | `false` | 否
`finished` | 是否处于加载失败，加载失败后点击错误提示可以重新触发 onload 事件 | boolean | - | `false` | 否
`offset` | 滚动条与底部距离小于 offset 时触发 onload 事件 | number | - | `300` | 否
`finished-reminder` | 加载完成后的提示文案 | string | - | - | 否
`error-reminder` | 加载失败后的提示文案 | string | - | - | 否


## 事件
事件名 | 说明 | 参数列表 
:-: | :-: | :-: 
`onload` | 滚动条与底部距离小于 offset 时触发 | -

## 插槽
名字 | 说明 
:-: | :-: 
`default` | 列表内容

