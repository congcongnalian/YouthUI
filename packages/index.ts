/* eslint-disable */

import { App, Plugin } from 'vue'
import 'packages/styles/common.css'
import 'packages/styles/theme/theme.less'

import { ButtonPlugin } from './components/Button'
import { FooPlugin } from './components/Foo'
import { ProgressPlugin } from './components/Progress'
import { AvatarPlugin } from './components/Avatar'
import { DatePickerPlugin } from './components/DatePicker'
// import { ContainerPlugin } from './components/Container'
import { LayoutPlugin } from './components/Layout'
// import { ListPlugin } from './components/List'
// import { SwitchPlugin } from './components/Switch'
// import { IconPlugin } from './components/Icon'
// import { UploadPlugin } from './components/Upload'

const YouthUIPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    FooPlugin.install?.(app)
    ProgressPlugin.install?.(app)
    AvatarPlugin.install?.(app)
    DatePickerPlugin.install?.(app)
    // ContainerPlugin.install?.(app)
    LayoutPlugin.install?.(app)
    // ListPlugin.install?.(app)
    // SwitchPlugin.install?.(app)
    // IconPlugin.install?.(app)
    // UploadPlugin.install?.(app)
  }
}

export default YouthUIPlugin

export * from './components/Button'
export * from './components/Foo'
export * from './components/Progress'
export * from './components/Avatar'
export * from './components/DatePicker'
// export * from './components/Container'
export * from './components/Layout'
// export * from './components/List'
// export * from './components/Switch'
// export * from './components/Icon'
// export * from './components/Upload'
