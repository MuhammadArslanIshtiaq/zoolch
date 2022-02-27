import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routesOptions = [
  {
    path: '/',
    name: 'Home',
    componentPath: 'Home',
  },
  {
    path: '/about',
    name: 'About',
    componentPath: 'About',
  },
  {
    path: '/services',
    name: 'Services',
    componentPath: 'Services',
  },
  {
    path: '/digital-marketing',
    name: 'Digital Marketing',
    componentPath: 'DigitalMarketing',
  },
  {
    path: '/website-development',
    name: 'Website Development',
    componentPath: 'WebsiteDevelopment',
  },
  {
    path: '/app-development',
    name: 'App Development',
    componentPath: 'AppDevelopment',
  },
  {
    path: '/products',
    name: 'Product',
    componentPath: 'Product',
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    componentPath: 'Portfolio',
  },
];

const routes = routesOptions.map((route) => {
  return {
    ...route,
    component: () => import(`@/views/${route.componentPath}.vue`),
  };
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
