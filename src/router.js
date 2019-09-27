import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from './views/page-not-found.vue'

Vue.use(Router);
const parsePropsIntAgency = r => ({id: parseInt(r.params.id), agency: r.params.agency})  
const parsePropsIntTitle = r => ({id: parseInt(r.params.id), title: r.params.title})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "bundle-base" */ './views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "bundle-base" */ './views/about.vue'),
    },
    {
      path: '/stop',
      name: 'stop',
      component: () => import(/* webpackChunkName: "bundle-stop" */ './views/stops/all-stops.vue')
    },
    {
      path: '/stop/:id',
      name: 'stop-detail',
      props: parsePropsIntTitle,
      component: () => import(/* webpackChunkName: "bundle-stop" */ './views/stops/stop-detail.vue')
    },
    {
      path: '/routes',
      name: 'routes',
      // props: parsePropsIntAgency,
      component: () => import(/* webpackChunkName: "bundle-routes" */ './views/bus-routes/routes.vue')
    },
    {
      path: '/route/:id',
      name: 'route-detail',
      props: parsePropsIntAgency,
      component: () => import(/* webpackChunkName: "bundle-routes" */ './views/bus-routes/route-detail.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import(/* webpackChunkName: "bundle-map" */ './views/map.vue')
    },
    {
      path: "*",
      name: "/404",
      component: PageNotFound
    }
  ]
})
