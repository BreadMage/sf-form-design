import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/form-design",
    name: "index",
    component: Layout,
    children: [
      {
        path: "form-design",
        name: "index-form-design",
        component: () => import("@/views/index")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
