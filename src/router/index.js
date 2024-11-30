import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "ProductCategory",
    component: () => import("../views/ProductCategory.vue"),
  },
  {
    path: "/products/product-details/:id",
    name: "prod-details",
    component: () => import("../views/ProductsDetails.vue"),
  },
  {
    path: "/cart-page",
    name: "cartPage",
    component: () => import("../views/CartPage.vue"),
  },
  {
    path: "/cart-page",
    name: "cart-page",
    component: () => import("../views/CheckOut.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
