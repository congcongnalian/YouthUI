import { App, Plugin } from 'vue';
import Cell from './src/cell.vue';
import List from './src/list.vue';

export const ListPlugin: Plugin = {
  install(app: App) {
    app.component('y-cell', Cell);
    app.component('y-list', List);
  },
};

export { Cell };
export { List };
