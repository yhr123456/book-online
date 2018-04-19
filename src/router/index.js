import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/page/home-page/HomePage'
import Class from '@/components/page/classification/Class'
import shoppingCart from '@/components/page/shopping-cart/shoppingCart'
import PersonalCenter from '@/components/page/personal-center/PersonalCenter'
import PersonalData from '@/components/page/personal-center/PersonalData'
import Address from '@/components/page/personal-center/Address'
import SigninAndSingnup from '@/components/page/personal-center/SigninAndSingnup'



Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Class',
      name: 'Class',
      component: Class
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter', 
      component: PersonalCenter
    },
    {
      path: '/PersonalData',
      name: 'PersonalData', 
      component: PersonalData
    },
    {
      path: '/Address',
      name: 'Address', 
      component: Address
    },
    {
      path: '/SigninAndSingnup',
      name: 'SigninAndSingnup', 
      component: SigninAndSingnup
    },

  ]
})
