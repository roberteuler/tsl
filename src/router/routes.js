const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Overview.vue") }]
  },
  {
    path: "/Ranking",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Ranking.vue") }]
  },
  {
    path: "/Login",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/Overview",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Overview.vue") }]
  },
  {
    path: "/Game",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Game.vue") }]
  },

];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
