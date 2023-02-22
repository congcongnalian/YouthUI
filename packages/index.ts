/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';
import 'packages/styles/common.css'
import 'packages/styles/theme/theme.less'






import { FooPlugin } from './components/Foo';
import { ProgressPlugin } from './components/Progress';




const YouthUIPlugin: Plugin = {
  install(app: App) {
    FooPlugin.install?.(app);
    ProgressPlugin.install?.(app);
  },
};

export default YouthUIPlugin;








export * from './components/Button'
export * from './components/Foo'
export * from './components/Progress'
export * from './components/Avatar'
export * from './components/DatePicker'

