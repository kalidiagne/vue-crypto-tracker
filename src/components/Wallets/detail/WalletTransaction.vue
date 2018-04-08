<template>
  <div class="element-wrapper">
    <h6 class="element-header">
      Recent Transactions
      <div class="element-actions" @click="addTransaction">
        <button class="btn btn-primary btn-lg col">
          <i class="os-icon os-icon-coins-4"></i>
          <span>Add transaction</span>
        </button>
      </div>
    </h6>
    <div class="element-box-tp">
      <div class="table-responsive">
        <table class="table table-padded">
          <thead>
          <tr>
            <th class="text-center">
              CURRENCY
            </th>
            <th>
              PAID PER COIN
            </th>
            <th class="text-center">
              TOTAL PAID
            </th>
            <th class="text-center">
              COINS BOUGHT
            </th>
            <th class="text-center">
              DATE
            </th>
            <th class="text-right">
              PROFIT
            </th>
            <th class="text-center">
              ACTIONS
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="transaction in transactions">
            <td class="nowrap text-center">
              <coin-icon :coin="transaction.short" height="25"></coin-icon>
            </td>
            <td>
              <span class="text-success">{{ transaction.price | currency }} </span>
            </td>
            <td class="cell-with-media">
              <img alt="" src="img/company1.png" style="height: 25px;"><span>Banana Shakes LLC</span>
            </td>
            <td class="text-center">
              {{ transaction.coins }}
            </td>
            <td>
              {{ transaction.date }}
            </td>
            <td class="text-right bolder nowrap">
              <span class="text-success">+ </span>
            </td>
            <td class="row-actions">
              <a href="#"><i class="os-icon os-icon-grid-10"></i></a><a href="#"><i class="os-icon os-icon-ui-44"></i></a><a class="danger" href="#"><i class="os-icon os-icon-ui-15"></i></a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: "wallet-transaction",
    data() {
      return {
        users: [],
        coins: [
          {
            cap24hrChange: -6.05,
            long: "Bitcoin",
            mktcap: 65173805891.25,
            perc: -6.05,
            price: 3934.85,
            shapeshift: true,
            short: "BTC",
            supply: 16563225,
            usdVolume: 2337600000,
            volume: 2337600000,
            vwapData: 3997.5639538606733,
            vwapDataBTC: 3997.5639538606733
          },
          {
            cap24hrChange: -6.59,
            long: "Ethereum",
            mktcap: 26016428866.32,
            perc: -6.59,
            price: 275.02,
            shapeshift: true,
            short: "ETH",
            supply: 94598316,
            usdVolume: 945732000,
            volume: 945732000,
            vwapData: 278.03921067242516,
            vwapDataBTC: 278.03921067242516
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        COIN_LIST: 'coinList',
        transactions: 'transactions'
      })
    },
    methods: {
      ...mapMutations({
        REGISTER_TRANSACTION: 'setTransaction'
      }),
      addTransaction() {
        let index = Math.round(Math.random()*100, 2) <= 50 ? 0 : 1
        let coin = this.coins[index]
        this.REGISTER_TRANSACTION({
          name: coin.long,
          price: coin.price * Math.round(Math.random()* 100, 2) / 10,
          date: new Date(),
          short: coin.short,
          coins: Math.round(Math.random() * 100, 2)
        })
      }
    },
  }
</script>

<style scoped>

</style>
