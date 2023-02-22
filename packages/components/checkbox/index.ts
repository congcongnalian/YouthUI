import { App, Plugin } from 'vue';
import Checkbox from './checkbox.vue';

export const CheckboxPlugin: Plugin = {
  install(app: App) {
    app.component('my-checkbox', Checkbox);
  },
};

export {
  Checkbox,
};