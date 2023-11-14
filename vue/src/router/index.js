import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import List from "../views/List.vue";

const routes = [
    { path:"", redirect:{ name:"home" } },
    { path:"/home", name:"home", component: Home },
    { path:"/list", name:"list", component: List }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;