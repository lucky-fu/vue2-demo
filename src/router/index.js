import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "introduce" */ "../views/Login.vue"),
    },
    {
      path: "/replace",
      name: "replace",
      component: () =>
        import(/* webpackChunkName: "introduce" */ "../views/Replace.vue"),
    },
  ],
});

export default router;