import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import login from '@/page/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '登录页面',
      component: resolve => require(['@/page/login'], resolve)
    },
    {
      path: '/login',
      name: '登录页面',
      component: resolve => require(['@/page/login'], resolve)
    },
    {
      path: '/home',
      name: '登录页面',
      component: resolve => require(['@/page/home'], resolve),
      children: [
        {
          path: 'index',
          component: resolve => require(['@/page/index'], resolve)
        }
      ]
    }
  ]
})
