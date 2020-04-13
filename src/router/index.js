import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QrScan from "../views/QrScan.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/qr",
    name: "QrScan",
    component: QrScan
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
