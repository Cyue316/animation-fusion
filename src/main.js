import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const files = require.context("./components", false, /\d\.vue/);
let routerMap = []
files.keys().forEach(file => {
  let componentName = files(file).default.name;
  const routeItem = {
    path: `/${componentName}`,
    meta: {
      title: componentName
    },
    component: files(file).default
  }
  routerMap.push(routeItem)
});
console.log(routerMap)

const routes = routerMap
const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
