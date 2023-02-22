import { App, Plugin } from 'vue';
import DatePicker from './src/index.vue';

export const DatePickerPlugin: Plugin = {
  install(app: App) {
    app.component('y-date-picker', DatePicker);
  },
};

export {
  DatePicker,
};
