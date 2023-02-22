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

# 布局

flex布局与grid布局

## 基础布局
<Preview comp-name="Layout" demo-name="demo">
  <demo />
</Preview>

## 分栏间隔
<Preview comp-name="Layout" demo-name="demo1">
  <demo1 />
</Preview>

## 混合布局
<Preview comp-name="Layout" demo-name="demo1">
  <demo2 />
</Preview>

<!-- ## 列偏移
<Preview comp-name="Layout" demo-name="demo1">
  <demo3 />
</Preview> -->

## 对齐方式
<Preview comp-name="Layout" demo-name="demo1">
  <demo4 />
</Preview>


## Row API
### Row Attributes
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`gutter` | 栅格间隔 | number | - | `0` | 否 
`justify` | flex布局下水平排列的方式 | enum | start,end,center,space-around,space-between,space-evenly | `start` | 否
`align` | flex布局下垂直排列的方式 | enum | start,center,end | `start` | 否 
`flex` | 是否使用flex布局 | boolean | - | `false`| 否

### Row Slots
插槽名 | 说明 |子标签
:-: | :-: | :-: 
default | 自定义默认内容 | Col

## Col API
### Col Attributes
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`span` | 栅格所占据的列数 | number | - | `24` | 否 

### Col Slots
插槽名 | 说明 
:-: | :-: 
default | 自定义默认内容 | 

