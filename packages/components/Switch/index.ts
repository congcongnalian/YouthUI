import { App, Plugin } from 'vue';
import Switch from './src/index.vue';

export const SwitchPlugin: Plugin = {
  install(app: App) {
    app.component('y-switch', Switch);
  },
};

export {
  Switch,
};
