<template>
  <div class="element-wrapper">
    <h6 class="element-header">
      Dashboard Box
    </h6>
    <div class="element-box">
      <div class="element-info">
        <div class="row align-items-center">
          <div class="col-sm-8">
            <div class="element-info-with-icon">
              <div class="element-info-icon">
                <div class="os-icon os-icon-wallet-loaded"></div>
              </div>
              <div class="element-info-text">
                <h5 class="element-inner-header">
                  Statistics
                </h5>
                <div class="element-inner-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis commodi deleniti eius molestias numquam perferendis qui recusandae unde vero?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="d-none d-xl-block col-xl-4">
          <div class="padded">
            <div class="el-tablo bigger mb-4">
              <div class="value">
                245
              </div>
              <div class="trending trending-up">
                <span>12%</span><i class="os-icon os-icon-arrow-up2"></i>
              </div>
              <div class="label">
                total profit
              </div>
            </div>
            <div class="el-tablo bigger">
              <div class="value">
                245
              </div>
              <div class="label">
                Invested
              </div>
            </div>
            <div class="el-chart-w"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
              <canvas height="210" id="liteLineChart" width="634" class="chartjs-render-monitor" style="display: block; height: 105px; width: 317px;"></canvas>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="padded b-l b-r-xl">
            <div class="element-info-with-icon smaller">
              <div class="element-info-icon">
                <div class="os-icon os-icon-bar-chart-stats-up"></div>
              </div>
              <div class="element-info-text">
                <h5 class="element-inner-header">
                  Monthly Revenue
                </h5>
                <div class="element-inner-desc">
                  Calculated every month
                </div>
              </div>
            </div>
           <!--
            <div class="os-progress-bar primary" v-for="account in accounts">
              <div class="bar-labels">
                <div class="bar-label-left">
                  <span> {{ account.name }}</span><span class="positive">+10</span>
                </div>
                <div class="bar-label-right">
                  <span class="info">72/100</span>
                </div>
              </div>
              <div class="bar-level-1" style="width: 100%">
                <div class="bar-level-2" style="width: 60%">
                  <div class="bar-level-3" style="width: 20%"></div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="row">
            <div class="col-sm-6 b-r b-b">
              <div class="el-tablo centered padded">
                <div class="value">
                  3814
                </div>
                <div class="label">
                  invested
                </div>
              </div>
            </div>
            <div class="col-sm-6 b-b">
              <div class="el-tablo centered padded">
                <div class="value">
                  47.5K
                </div>
                <div class="label">
                  Current Profit
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 b-r">
              <div class="el-tablo centered padded">
                <div class="value">
                  $95
                </div>
                <div class="label">
                  Total transactions
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="el-tablo centered padded">
                <div class="value">
                  12
                </div>
                <div class="label">
                  <strong>Coins</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "overview-statistic",
    props: ['accounts']
  }
</script>

<style scoped>

</style>
