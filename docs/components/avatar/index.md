# Avatar 头像

使用 Avatar 组件来代表人物形象，支持图片、文字或者图标的形式作为 Avatar 的内容。

## 基本用法

可以使用shape和size属性来设置 Avatar 的形状和大小。

<preview path="./basic.vue" title="Avatar" description="?"></preview>

## 支持类型

支持使用图片、文字来作为 Avatar 的内容。

<preview path="./type.vue" title="Avatar" description="?"></preview>

## API

### Avatar 属性

|  名称 |    说明    |                类型               |   默认值   |
|:-----:|:----------:|:---------------------------------:|:----------:|
|  size | Avatar尺寸 | `'large' \| 'default' \| 'small'` |     ——     |
| shape | Avatar形状 | `'circle' \| 'square'` | `'circle'` |
|  src  |  图片路径  | `string` |     ——     |
|  icon |  图标路径  | `string` |     ——     |

### Avatar 插槽

|  插槽名 |      说明      |
|:-------:|:--------------:|
| default | 头像自定义内容 |
