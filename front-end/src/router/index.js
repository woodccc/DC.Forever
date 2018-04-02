import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Todo from '@/components/Todo/Todo'
import WeightManager from '@/components/WeightManager/WeightManager'
import QRCode from '@/components/QRCode'
import Login from '@/components/complex/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/todo',
      name: 'todo',
      component: Todo
    }, {
      path: '/weightManager',
      name: 'weightManager',
      component: WeightManager
    }, {
      path: '/qr-code',
      name: 'qr-code',
      component: QRCode
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
