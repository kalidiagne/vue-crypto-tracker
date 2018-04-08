<template>
  <div v-if="open" class="onboarding-modal modal fade animated show" id="onboardingFormModal" role="dialog" tabindex="-1" style="display: block; padding-left: 0px;">
    <div class="modal-dialog modal-centered" role="document">
      <div class="modal-content text-center">
        <button aria-label="Close" class="close" data-dismiss="modal" type="button" @click="open = !open">
          <span class="close-label">Skip Intro</span><span class="os-icon os-icon-close"></span>
        </button>
        <div class="onboarding-media">
          <!--<img alt="" src="/static/img/bigicon5.png" width="200px"> -->
          <img alt="" src="https://steemitimages.com/DQmV75cQgvWMEXBdDrH7vJfMLzyAY8KxLvAsBrViSyendvB/coins-2.png" width="420px">
        </div>
        <div class="onboarding-content with-gradient">
          <h4 class="onboarding-title">
           Create new Wallet
          </h4>
          <div class="onboarding-text">
          </div>
          <form>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="">Wallet name</label><input class="form-control" placeholder="Enter your full name..." type="text" value="">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="">Crypto coin</label>
                  <el-select v-model="value8" filterable placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "add-wallet-modal",
    props: ['open'],
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value8: ''
      }
    },
    methods: {
      addWallet() {

      }
    },
  }
</script>

<style scoped>

</style>
