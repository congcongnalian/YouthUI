**包管理从npm更改到pnpm，安装使用`pnpm i`**

**提交时并没有提交产物，需要使用命令打包**

# 组件目录改变

存放组件文件的目录改为packages/components，将原先零散的组件目录放入这个目录，将index导入和导出的模块修改路径即可。

**添加了vitepress文档以及代码预览插件**

原先的preview将不再使用，改为使用vitepress的demo插件，使用方法如下

```vue
<preview path="demoPath" title="Title" description="component description content"></preview>
```

path为组件`demo`的Path，如有一个组件里有多个分开的组件`demo`，则创建多个demo的vue文件

title和description使用`antdesign`的代码展示容器时使用，因为标题和内容在该容器内显示。

本项目统一使用ElementPlus的代码展示容器。

这部分以配置好，无需额外配置

# config说明

在docs/config中，存有顶部导航和侧边导航的配置

nav.ts 顶部导航
sidebar.ts 侧边导航

这些配置为vitepress常用配置，请自行查看资料或查看代码

# components

存文档文件的位置
每个组件的文档目录为components/xxx/
