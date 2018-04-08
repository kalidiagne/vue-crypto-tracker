<template>
  <div class="container">
    <wallet-overview></wallet-overview>
    <wallet-transaction></wallet-transaction>

    <!--<div class="floated-chat-btn">
      <i class="os-icon os-icon-mail-07"></i><span>Demo Chat</span>
    </div>-->
  </div>
</template>

<script>
  import WalletOverview from './detail/WalletOverview'
  import WalletTransaction from './detail/WalletTransaction'
  import { mapGetters } from 'vuex'
  export default {
    name: "wallet-detail",
    data() {
      return {
        totals: {
        }
      }
    },
    computed: {
      ...mapGetters({
        walletList: 'walletList'
      })
    },
    components: {
      WalletTransaction,
      WalletOverview
    }
  }
</script>

<style scoped>

</style>
