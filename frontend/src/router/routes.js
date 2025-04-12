export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
    meta: { layout: "AppLayoutMain" },
    children: [
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/OrdersView.vue"),
      },
      {
        path: "user-data",
        name: "userData",
        component: () => import("@/views/UserDataView.vue"),
      },
    ],
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: () => import("@/views/SingInView.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("@/views/SuccessView.vue"),
    meta: { layout: "AppLayoutMain" },
  },
];
