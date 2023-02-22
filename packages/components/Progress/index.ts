import { App, Plugin } from 'vue'
import Progress from './src/index.vue'

export const ProgressPlugin: Plugin = {
  install(app: App) {
    app.component('YProgress', Progress)
  }
}

export { Progress }
