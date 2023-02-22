<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Container容器

用于布局的容器组件，采用Flex布局，方便快速搭建页面的基本结构：<br>
`<y-container>`:外层容器。当子元素中包含`<y-header>`活着`<y-footer>`时，全部子元素会垂直上下排列，如果要水平排列请添加`direction: 'horizontal'`<br>
`<y-header>`:顶栏容器。<br>
`<y-aside>`:顶栏容器。<br>
`<y-main>`:顶栏容器。<br>
`<y-footer>`:顶栏容器。<br>
## 常见页面布局
<Preview comp-name="Container" demo-name="demo">
  <demo />
</Preview>

<Preview comp-name="Container" demo-name="demo1">
  <demo1 />
</Preview>

<Preview comp-name="Container" demo-name="demo2">
  <demo2 />
</Preview>

<Preview comp-name="Container" demo-name="demo3">
  <demo3 />
</Preview>

<Preview comp-name="Container" demo-name="demo4">
  <demo4 />
</Preview>

<Preview comp-name="Container" demo-name="demo5">
  <demo5 />
</Preview>

<Preview comp-name="Container" demo-name="demo6">
  <demo6 />
</Preview>

# Container API
## Container Attributes
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`direction` | 子元素排列的方向 | enum | vertical,horizontal | `vertical` | 否 

## Container Slots
插槽名字 | 说明 | 子标签 
:-: | :-: | :-: 
`default` | 自定义默认内容 | Container/Header/Aside/Main/Footer

# Header API
## Header Attributes
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`height` | 顶栏高度 | string | - | `60px` | 否 

## Header Slots
插槽名字 | 说明 
:-: | :-: 
`default` | 自定义默认内容 

# Aside API
## Aside Attributes
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`width` | 侧边栏宽度 | string | - | `300px` | 否 

## Aside Slots
插槽名字 | 说明 
:-: | :-: 
`default` | 自定义默认内容 

# Main API
## Main Slots
插槽名字 | 说明 
:-: | :-: 
`default` | 自定义默认内容 

# Footer API
## Footer Attributes
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`height` | 底栏高度 | string | - | `60px` | 否 

## Footer Slots
插槽名字 | 说明 
:-: | :-: 
`default` | 自定义默认内容 


