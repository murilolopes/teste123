import { createStore } from "vuex";

import app from "./app";
import appConfig from "./app-config";
import verticalMenu from "./vertical-menu";

export default createStore({
  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
});
