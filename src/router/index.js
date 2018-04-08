import Vue from 'vue'

import Profile from './../components/Profile/Profile'

import Dashboard from './../components/Dashboard/Dashboard'

//import AccountHome from '../components/Wallets/AccountHome'
import Wallets from '../components/Wallets/Wallets'
import WalletDetail from '../components/Wallets/WalletDetail'
//import AccountDetail from '../components/Wallets/AccountDetail'

import Overview from '../components/Overview/Overview'

import Plans from '../components/Plans/Plans'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/wallets',
      name: 'wallets',
      component: Wallets,
    },
    {
      path: '/wallets/:id',
      name: 'wallet-detail',
      component: WalletDetail
    },
    {
      path: 'profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    },
    {
      path: '/plans',
      name: 'plans',
      component: Plans
    }
  ]
})
