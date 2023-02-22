import DefaultTheme from 'vitepress/theme'
import YouthUI from '../../../dist/youth-ui.es'
import '../../../dist/style.css'
import '../styles/common.css'

import {
  AntDesignContainer,
  ElementPlusContainer
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(YouthUI)
    app.component('demo-preview', ElementPlusContainer)
  }
}
