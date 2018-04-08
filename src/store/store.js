import Vuex from 'vuex'
import Vue from 'vue'

import { currency } from './modules/currency'
import { coin } from './modules/coin'
import { wallet } from './modules/wallet'
import { user } from './modules/user'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    darkThemeActive: false,
    addWalletOpen: false
  },
  actions: {

  },
  mutations: {
    setAddWalletOpen(state) {
      state.addWalletOpen = !state.addWalletOpen
    },
    toggleTheme(state) {
      state.darkThemeActive = !state.darkThemeActive
    },
    resetWalletOpen(state) {
      state.addWalletOpen = false
    }
  },
  getters: {
    isAddWalletOpen(state) {
      return state.addWalletOpen
    },
    isDarkThemeActive(state) {
      return state.darkThemeActive
    }
  },
  modules: {
    currency,
    coin,
    wallet,
    user
  }
});

