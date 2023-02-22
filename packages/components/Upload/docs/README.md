<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo1 from './demo1.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 上传组件

上传文件
# 记得将button替换成button组件
## 基础用法
<Preview comp-name="Upload" demo-name="demo">
  <demo />
</Preview>

## 展示上传列表
<Preview comp-name="Upload" demo-name="demo1">
  <demo1 />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`action` | 必选参数，上传的地址 | string | - | - | 是 
`headers` | 设置上传的请求头部| object | - | - | 否
`name` | 上传文件的字段名| string | - | `file` | 否
`list` | 是否显示上传的文件名字 | boolean | - | `false` | 否
`disabled` | 是否禁用 | boolean | - | `false` | 否

## 插槽
名字 | 说明 
:-: | :-: 
`tip` | 提示说明文字 
