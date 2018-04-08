<template>
  <div>
    <div class="support-ticket text-center coin-card" v-if="!isAdd">
      <div class="st-body">
        <div class="ticket-content">
          <button class="btn-lg btn btn-outline-primary mb-4" @click="addWallet">
            Add New Holding
          </button>
          <button class="btn btn-lg btn-outline-primary">
            Connect Api Service
          </button>
        </div>
      </div>
      <div class="st-foot">
      </div>
    </div>
    <div v-else>
      <div class="support-ticket text-center coin-card add-wallet" v-if="isAdd" @blur="removeAdd">
        <div class="st-body align-items-start">
          <div class="ticket-content text-left col-12 m-0 p-0">
              <h4 class="ticket-title mb-4">
                Create new Wallet
              </h4>

            <div class="form-group">
              <label>Wallet name</label>
              <el-input v-model="wallet.name"></el-input>
            </div>

            <div class="form-group">
              <label>Coin</label>
              <el-select v-model="wallet.coin"
                         filterable
                         placeholder=""
                         class="col-12 m-0 p-0">
                <el-option label="wallet" :value="{id: 'test', name: 'test'}"></el-option>
                <el-option
                  v-for="coin in coinList"
                  :key="coin.id"
                  :label="coin.name"
                  :value="coin.name">
                  <span class="float-left">{{ coin.name }}</span>
                  <span class="float-right">
                    <div class="badge badge-dark">
                      {{ coin.symbol }}
                    </div>
                  </span>
                </el-option>
              </el-select>
            </div>

            <button :disabled="!isAddValid" class="btn-lg col mr-2 mb-2 btn btn-primary"
                    @click="createNewWallet"
                    type="button"> Create
            </button>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  import { CREATE_NEW_WALLET } from "../../graphql/wallet"

  export default {
    name: "add-new-wallet",
    data() {
      return {
        wallet: {
          name: '',
          coin: ''
        },
        open: false,
        isAdd: false
      }
    },
    computed: {
      ...mapGetters(['coinList']),
      isAddValid() {
        return this.wallet.name.length > 0 && this.wallet.coin
      }
    },
    methods: {
      ...mapMutations({
        TOGGLE_ADD_WALLET_OPEN: 'setAddWalletOpen',
        RESET_WALLET_OPEN: 'resetWalletOpen'
      }),
      createNewWallet() {
        var vm = this
        this.$apollo.mutate({
          mutation: CREATE_NEW_WALLET,
          variables: {
            name: this.wallet.name,
            long: this.wallet.coin.name,
            short: this.wallet.coin.symbol,
            userId: 'cje2r29qkcddn0168bqzcuev9'
          }
        }).then(() => {
          vm.$notify({
            message: `${vm.wallet.name} wallet created`,
            type: 'success',
            duration: 5000
          })
          console.log('wallet added message')
        }).catch(err => {
          console.log('error ', err.message)
          this.$message(err.message, {
            type: 'error'
          })
        })
        this.clear()
      },
      addWallet() {
        this.TOGGLE_ADD_WALLET_OPEN()
        this.isAdd = !this.isAdd
      },
      clear() {
        this.RESET_WALLET_OPEN()
        this.open = false
        this.isAdd = false
        this.wallet = {
          coin: '',
          name: ''
        }
      },
      removeAdd() {
        this.isAdd = !this.isAdd
      }
    }
  }
</script>
