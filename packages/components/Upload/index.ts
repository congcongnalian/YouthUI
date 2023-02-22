import { App, Plugin } from 'vue';
import Upload from './src/index.vue';

export const UploadPlugin: Plugin = {
  install(app: App) {
    app.component('y-upload', Upload);
  },
};

export {
  Upload,
};
