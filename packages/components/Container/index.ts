import { App, Plugin } from 'vue'
import Container from './src/container.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
export const ContainerPlugin: Plugin = {
  install(app: App) {
    app.component('YContainer', Container)
    app.component('YHeader', Header)
    app.component('YMain', Main)
    app.component('YAside', Aside)
    app.component('YFooter', Footer)
  }
}

export { Container, Header, Main, Aside, Footer }
