<!-- 加载 demo 组件 start -->
<script setup>
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 列表组件

展示列表

## 基础用法

<preview path="./demo.vue" title="List" description="?"></preview>

## 错误提示

<preview path="./demo1.vue" title="List" description="?"></preview>

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
