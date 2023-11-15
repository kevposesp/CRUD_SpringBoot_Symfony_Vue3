import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import List from "../views/List.vue";
import ListClient from "../views/client/List.vue";
import Table from "../views/client/Table.vue"

const routes = [
    { path:"", redirect:{ name:"home" } },
    { path:"/home", name:"home", component: Home },
    { path:"/list", name:"list", component: List },
    { path:"/listclient", name:"listclient", component: ListClient },
    { path:"/table/:id", name:"table", component: Table }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;