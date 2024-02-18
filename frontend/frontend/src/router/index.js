import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../components/DashboardView.vue";

import LoginView from "../components/LoginView.vue";
import RegisterView from "../components/RegisterView.vue";
import AdminloginView from "../components/AdminloginView.vue";

const routes = [
  {
    path: "/",
    name: "DashboardView",
    component: DashboardView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/register",
    name: "RegisterView",
    component: RegisterView,
  },
  {
    path: "/adminlogin",
    name: "AdminloginView",
    component: AdminloginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
