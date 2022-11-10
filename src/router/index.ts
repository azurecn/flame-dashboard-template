import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ "../views/Login/Login.vue")
  },
  {
    path: "/",
    name: "layout",
    component: () => import(/* webpackChunkName: "about" */ "../views/Layout/Layout.vue"),
    children: [
      {
        path: "/",
        name: "mobile-setting",
        component: () => import(/* webpackChunkName: "about" */ "../views/MobileSetting/MobileSetting.vue"),
      },
      {
        path: "/baseSetting",
        name: "base-setting",
        component: () => import(/* webpackChunkName: "about" */ "../views/BaseSetting/BaseSetting.vue"),
      },
      {
        path: "/complexSetting",
        name: "complex-setting",
        component: () => import(/* webpackChunkName: "about" */ "../views/ComplexSetting/ComplexSetting.vue"),
      },
      {
        path: "/pageSetting",
        name: "page-setting",
        component: () => import(/* webpackChunkName: "about" */ "../views/PageSetting/PageSetting.vue"),
      },
      {
        path: "/monacoEditor",
        name: "monacoEditor",
        component: () => import(/* webpackChunkName: "monacoEditor" */ "../views/MonacoEditor/MonacoEditor.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
