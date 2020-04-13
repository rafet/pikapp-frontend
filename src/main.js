import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import Ripple from "vue-ripple-directive";
import Antd from "ant-design-vue";

import FullScreenLoading from "./components/FullScreenLoading";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCompactDisc);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.directive("ripple", Ripple);
Vue.use(Antd);

Vue.component("full-screen-loading", FullScreenLoading);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
