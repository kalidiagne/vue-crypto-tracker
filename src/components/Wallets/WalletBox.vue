<template>
    <div>
      <div class="support-ticket coin-card">
        <div class="st-meta">
          <div class="avatar">
            <coin-icon :coin="wallet.short"></coin-icon>
          </div>
        </div>
        <div class="st-body">
          <div class="ticket-content">
              <p class="label">  </p>
            <h5 class="ticket-title mb-2">
              {{ wallet.name | uppercase }}
            </h5>
              <h6 class="ticker-title" style="font-weight: 300">
                <!--{{ detail.price_btc * 22 }} -->
                1212
                <small>
                  <div class="badge badge-dark">
                    {{ wallet.short | uppercase }}
                  </div>
                </small>
              </h6>
            <div class="balance-value ticker-title">
              -
              <h6 class="trending trending-down-basic" v-if="percentageLast24h <= 0">
                <span>% {{ percentageLast24h }} </span>
                <i class="os-icon os-icon-arrow-2-down"></i>
              </h6>
              <h6 class="trending trending-up-basic" v-else>
                <span>% {{ percentageLast24h }} </span>
                <i class="os-icon os-icon-arrow-2-up"></i>
              </h6>
            </div>


            <div class="ticket-description">

            </div>
          </div>
        </div>
        <div class="st-foot">
        </div>
      </div>
    </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex';
  export default {
    name: "account",
    props: ['wallet'],
    computed: {
      ...mapGetters({
        walletList: 'coinList'
      }),
      percentageLast24h () {
        let coin = _.find(this.walletList, this.wallet.short)
        if (coin) return coin.percentageLast24;
      },
      coinIcon () {
        return `/static/img/coin-icon/128/icon/btc.png`
      },
      tradingClass () {
        return {
          'trending-up': true,
          'trending-down': false
        }
      }
    }
  }
</script>

<style scoped>
  .balance-value {
    font-size: 1.8rem;
    font-weight: 400;
    color: #303a46;
    white-space: nowrap;
  }

  .trending {
    padding: 3px 10px;
    border-radius: 30px;
    display: inline-block;
    font-size: 0.81rem;
    vertical-align: middle;
    margin-left: 10px;
  }

  .trending-up {
    color: #fff;
    background-color: #5eb314;
  }

  .trending-down {
    color: #fff;
    background-color: #e65252;
  }

  .trending-down-basic {
    color: #e65252;
    padding: 0px;
  }

  .trending-up-basic {
    color: #5eb314;
    padding: 0px;
  }

  .project-users {
    flex: 0 !important;
  }
</style>
