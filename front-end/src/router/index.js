import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WeightManager from '@/components/WeightManager/WeightManager'
import QRCode from '@/components/QRCode'
import Login from '@/components/complex/Login'
import RubikCube from '@/components/complex/RubikCube/RubikCube'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }, {
      path: '/rubikCube',
      name: 'rubikCube',
      component: RubikCube
    }
  ]
})
