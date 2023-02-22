# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 直线进度条

Progress需要一个必填的属性， `percentage` ，该属性表示这个进度条的百分比，并且值必须在0~100范围内。

另外，你可以传入一个名为 `status` 的字符串属性（不需要冒号绑定），来表示这个进度条的状态。

<preview path="./progress-line.vue" title="Progress" description="?"></preview>

## 设置进度条高度并且让百分比显示在进度条内

你可以传入一个 `number` 属性 `barHeight` 来控制进度条的高度，并且可以通过 `text-inside` 属性来控制进度条是否在内，该属性的值为 `Boolean` 类型。

<preview path="./bar-tex-inside.vue" title="Progress" description="?"></preview>

## Progress API

### Progress属性

|    属性名   |          说明          |    类型   |                可选值                |  默认值  |
|:-----------:|:----------------------:|:---------:|:------------------------------------:|:--------:|
|  percentage |    百分比，**必填**    | `number` |                 0-100                |     0    |
|     type    |       进度条类型       | `string` | `'line' \| 'circle'` | `'line'` |
|  barHeight  |      进度条的高度      | `number` |                  ——                  |    10    |
| text-inside | 文字是否显示在进度条内 | `boolean` |                  ——                  | `false` |
|    status   |     进度条当前状态     | `string` | `'success' \| 'danger' \| 'warning'` |    ——    |
