import Vue from 'vue'
import Router from 'vue-router'
import WeightManager from '@/components/complex/WeightManager/WeightManager'
import QRCode from '@/components/simple/QRCode'
import Login from '@/components/complex/Login'
import RubikCube from '@/components/complex/RubikCube/RubikCube'
import Links from '@/components/global/Links'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Links',
      component: Links
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
    }, {
      path: '/links',
      name: 'Links',
      component: Links
    }
  ]
})
