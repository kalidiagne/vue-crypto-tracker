<template>
  <div class="container">
      <div class="content-box">
        <div class="support-tickets">
          <div class="support-index">
            <div class="col-12">
              <div class="row">
                <router-link :to="{name: 'wallet-detail', params: { id: wallet.id }}" class="col-4 mb-4" v-for="(wallet, i) in wallets" >
                    <wallet-box :wallet="wallet"> </wallet-box>
                </router-link>

                <div class="col-12 col-md-4 mb-4">
                  <add-new-wallet>
                  </add-new-wallet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import WalletBox from './WalletBox'
  import AddNewWallet from './AddNewWallet'
  import { USER_WALLET_LIST } from "../../graphql/wallet"

  import _ from 'lodash'
  import { mapGetters } from 'vuex'
  export default {
    name: "wallets",
    components: {
      WalletBox,
      AddNewWallet
    },
    data() {
      return {
        wallets: [],
        open: false
      }
    },
    apollo: {
      wallets: {
        query: USER_WALLET_LIST,
        update(data) {
          return data.User.wallets
        },
        variables: {
          id: 'cje2r29qkcddn0168bqzcuev9'
        },
        pollInterval: 1000
      }
    }
  }
</script>

<style scoped>

</style>
