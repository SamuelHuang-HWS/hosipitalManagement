import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registered',
    name: 'Registered',
    component: () => import(/* webpackChunkName: "registered" */ '../views/registered/registered.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
    meta: {
      title: "首页",
      requireAuth: true
    },
    children:[]
  },
  {
    path:'*',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// // 判断是否需要登录权限 以及是否登录
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   if (to.matched.some(res => res.meta.requireAuth)) {
//     if(Cookie.getCookie("pin")){
//       next()
//     }else{
//       next({
//         path: "/login"
//       });
//     }
//     // 判断是否需要登录权限
//   } else {
//     next()
//   }
// });

export default router
