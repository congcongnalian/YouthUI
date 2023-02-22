<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 开关

点击切换开关状态

## 基础用法
<Preview comp-name="Switch" demo-name="demo">
  <demo />
</Preview>

## 禁用状态
<Preview comp-name="Switch" demo-name="demo1">
  <demo1 />
</Preview>

## 自定义背景色
<Preview comp-name="Switch" demo-name="demo2">
  <demo2 />
</Preview>

## 自定义图标
<Preview comp-name="Switch" demo-name="demo3">
  <demo3 />
</Preview>

## 尺寸
<Preview comp-name="Switch" demo-name="demo4">
  <demo4 />
</Preview>




## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`v-model` | 开关选中状态 | boolean | - | `true` | 否 
`disabled` | 是否为禁用状态 | boolean | - | `false` | 否
`inactiveColor` | 关闭时的背景色 | string | - | `#ccc` | 否
`activeColor` | 打开时的背景色 | string | - | `skyblue` | 否
`size` | 按钮的大小 | enum | `large,default,small` | `default` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`change` | 开关状态切换时触发 | $event| 原生的 dom event
`click` | 开关点击时触发 | $event | 原生的 dom event

## 插槽
名称 | 说明 
:-: | :-: 
`active` | 开关开启状态时候的图标内容
`inactive` | 开关关闭状态时候的图标内容
