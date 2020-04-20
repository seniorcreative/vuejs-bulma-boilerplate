import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "signup" */ './views/Signup.vue'),
    // },
    // {
    //   path: '/thanks',
    //   name: 'thanks',
    //   component: Thanks,
    // },
  ],
});
