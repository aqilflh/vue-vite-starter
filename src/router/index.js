import { createRouter, createWebHistory } from "vue-router";
import home from "../components/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
