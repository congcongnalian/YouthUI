<script setup>
</script>

# Button 按钮

## 基本用法

Button有颜色属性 `type` , 外形属性 `circle` 、 `round` , 可组合使用样式

<preview path="./demo1.vue" title="Button" description="component description content"></preview>

## 禁用状态

你可以给Button传入 `disabled` 属性，值的类型为 `Boolean` ，来表示Button是否被禁用

<preview path="./disabled-demo.vue" title="Button" description="component description content"></preview>

## Button尺寸

你可以选择传入 `size` 属性，有 `small` 和 `large` 两种尺寸可以选择。

<preview path="./size.vue" title="Button" description="component description content"></preview>

## Button API

### Button属性

|  属性名  |      说明      |                                   类型                                   |    默认值   |
|:--------:|:--------------:|:------------------------------------------------------------------------:|:-----------:|
|   size   |   Button尺寸   | `'large' \| 'default' \| 'small'` | `'dafault'` |
|   type   |   Button类型   | `'primary' \| 'default' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` |
|   round  | 是否为圆角按钮 | `boolean` | `false` |
|  circle  | 是否为圆形按钮 | `boolean` | `false` |
| disabled | 是否为禁用状态 | `boolean` | `false` |
|   icon   |    图标名称    | `string` |      ——     |

### Button插槽

|  插槽名 |       说明       |
|:-------:|:----------------:|
| default | Button自定义内容 |
|   icon  |    自定义图标    |
