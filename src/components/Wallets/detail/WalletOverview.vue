<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="element-box">
        <div class="element-balances">
          <div class="balance">
            <div class="balance-title">
              Total Coins
            </div>
            <div class="balance-value">
              {{ totalCoin }}
            </div>
            <div class="balance-link">
              <a class="btn btn-link btn-underlined" href="#"><span>Request Increase</span><i class="os-icon os-icon-arrow-right4"></i></a>
            </div>
          </div>
          <div class="balance hidden-mobile">
            <div class="balance-title">
              Total Invested
            </div>
            <div class="balance-value">
              <span>{{ totalInvested | currency }} </span><span class="trending trending-down-basic"><span>%12</span><i class="os-icon os-icon-arrow-2-down"></i></span>
            </div>
            <div class="balance-link">
              <a class="btn btn-link btn-underlined" href="#"><span>View Statement</span><i class="os-icon os-icon-arrow-right4"></i></a>
            </div>
          </div>
          <div class="balance">
            <div class="balance-title">
              Active Profit
            </div>
            <div class="balance-value">
              $17,800
            </div>
            <div class="balance-link">
              <a class="btn btn-link btn-underlined" href="#"><span>Request Increase</span><i class="os-icon os-icon-arrow-right4"></i></a>
            </div>
          </div>
          <div class="balance">
            <div class="balance-title">
              Gain
            </div>
            <div class="balance-value danger">
              $180
            </div>
            <div class="balance-link">
              <a class="btn btn-link btn-underlined btn-gold" href="#"><span>Pay Now</span><i class="os-icon os-icon-arrow-right4"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="element-wrapper">
        <div class="element-actions">
          <form class="form-inline justify-content-sm-end">
          </form>
        </div>
        <h6 class="element-header">
          Wallet Overview
        </h6>
        <div class="element-content">
          <div class="row">

            <div class="col-lg-3 col-sm-12">
              <element-box title="TOTAL COINS" :value="totalCoin">
              </element-box>
            </div>

            <div class="col-lg-3 col-sm-12">
              <element-box title="TOTAL INVESTED" :value="totalInvested" currency="true">
              </element-box>
            </div>

            <div class="col-lg-3 col-sm-12">
              <a class="element-box el-tablo" href="#">
                <div class="label">
                  ACTIVE PROFIT
                </div>
                <div class="value">
                  125
                </div>
                <div class="trending trending-down-basic">
                  <span>9%</span><i class="os-icon os-icon-arrow-down"></i>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-sm-12">
              <a class="element-box el-tablo" href="#">
                <div class="label">
                  GAIN
                </div>
                <div class="value">
                  125
                </div>
                <div class="trending trending-down-basic">
                  <span>9%</span><i class="os-icon os-icon-arrow-down"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ElementBox from './../../Shared/ElementBox'
  export default {
    name: "wallet-overview",
    computed: {
      ...mapGetters({
        totalCoin: 'totalCoin',
        totalInvested: 'totalInvested'
      })
    },
    components: {
      ElementBox
    }
  }
</script>
