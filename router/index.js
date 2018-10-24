import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default function () {
  let routes = []
  /*Add here in order how do you want routes*/
  routes = require('./routes').default
  routes = require('@imagina/qblog/_router/routes').default

  //Route 404
  routes.push({
    path: '*',
    component: require('../layouts/master').default,
    children: [
      {
        path: '/',
        component: require('../layouts/pages/404').default,
        name: '404'
      }
    ]
  })

  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes,
    // Leave these as they are and change from quasar.conf.js instead!
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  })

  return Router
}
