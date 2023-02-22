<!-- 加载 demo 组件 start -->
<script setup>
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 布局

flex布局与grid布局

## 基础布局

<preview path="./demo.vue" title="Layout" description="."></preview>

## 分栏间隔

<preview path="./demo1.vue" title="Layout" description="."></preview>

## 混合布局

<preview path="./demo2.vue" title="Layout" description="."></preview>

<!-- ## 列偏移
<preview path="./demo3.vue" title="Layout" description=".">
</preview> -->

## 对齐方式

<preview path="./demo4.vue" title="Layout" description="."></preview>

## Row API

### Row Attributes

参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`gutter` | 栅格间隔 | number | - | `0` | 否
`justify` | flex布局下水平排列的方式 | enum | start, end, center, space-around, space-between, space-evenly | `start` | 否
`align` | flex布局下垂直排列的方式 | enum | start, center, end | `start` | 否
`flex` | 是否使用flex布局 | boolean | - | `false` | 否

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
