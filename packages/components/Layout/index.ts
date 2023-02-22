import { App, Plugin } from 'vue'
import Col from './src/col.vue'
import Row from './src/row.vue'

export const LayoutPlugin: Plugin = {
  install(app: App) {
    app.component('YCol', Col)
    app.component('YRow', Row)
  }
}

export { Col }
export { Row }
