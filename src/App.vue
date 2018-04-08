<template>
  <div class="all-wrapper menu-side">
    <div class="layout-w">
      <div class="content-w">
        <header-secondary></header-secondary>
        <div :class="['content-i', {'adding-wallet': IS_ADD_WALLET_OPEN}]">
          <div class="content-box">
            <router-view></router-view>
          </div>
          <!--<sidebar></sidebar> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeToggleButton from './components/Shared/ThemeToggleButton'
import Sidebar from './components/Sidebar/Sidebar'

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    ThemeToggleButton,
    Sidebar
  },
  computed: {
    ...mapGetters({
      IS_ADD_WALLET_OPEN: 'isAddWalletOpen',
      CURRENT_CURRENCY: 'currencyList'
    }),
    /*addingWallet() {
      return {
        'adding-wallet': this.IS_ADD_WALLET_OPEN
      }
    }*/
  },
  created() {
    this.GET_COIN_LIST()
    this.GET_WALLET_LIST()
  },
  methods: {
    ...mapActions({
      GET_COIN_LIST: 'getCoinList',
      GET_WALLET_LIST: 'getWalletList'
    })
  },
  filters: {

  }
}
</script>

<style>
  * {
    outline: none !important;
  }

  body {
    margin: 0;
    padding: 0;
  }
</style>
