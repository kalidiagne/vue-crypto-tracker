import { FIRESTORE } from "../../common/firestore"
import { COINCAP } from "../../common/axios"
import { COINMARKETCAP } from "../../common/axios"
import _ from 'lodash'
const WALLET = FIRESTORE.collection('wallets')
export const wallet = {

  state: {
    transactions: [],
    coinId: null,
    walletList: [],
    totalCoin: 0,
    totalInvested: 0,
    totalProfit: 0,
    totalGain: 0
  },

  actions: {
    /*getWalletList({commit, state}, data) {
      WALLET
        .doc('222')
        .get()
        .then(res => {
          this.createNewWallet(res.data())
         })
    },*/
    createNewWallet({commit, state}, wallet) {
      console.log('create wallet')
      let data = {
        coinId: wallet.coinId,
        name:  wallet.name,
        userId: Math.round(Math.random()* 100,2) < 50 ? 222 : 333
      }


      let USER_WALLET = WALLET.doc('222')
      let userWallet = []
      let walletList = []

      WALLET
        .doc('222')
        .get()
        .then(res => {
          userWallet = res.data()
        })
        .then(() => {
          var walletList = [...userWallet.walletList, data.coinId]
          USER_WALLET
            .set({
              created: userWallet.created ? userWallet.created : new Date(),
              lastUpdate: new Date(),
              walletList: _.uniq(walletList)
            })
            .then(() => {
              console.log('set wallet')
              USER_WALLET
                .collection(data.coinId)
                .add(data)
                .then(doc => {
                  console.log('new wallet added')
                })
            })
        })
    },
    registerTransactions({commit, dispatch, state}, transaction) {
      commit('setTransaction', transaction)
    },
    getWalletList ({ commit, state}, limit) {
      COINMARKETCAP
        .get()
        .then(res => {
          commit('setWalletList', _.take(res.data, 10))
        })
    }

  },

  mutations: {
    setWalletList (state, payload) {
      console.log('set wallet list', payload)
      state.walletList = payload
    },
    setTransaction (state, transaction) {
      state.transactions.push(transaction)
    },
    RESET_WALLET_OPEN(state) {

    }
  },

  getters: {
    totalCoin (state) {
      return _.sumBy(state.transactions, 'coins')
    },
    totalInvested (state) {
      return _.sumBy(state.transactions, 'price')
    },
    transactions (state) {
      return state.transactions
    },
    walletList (state) {
      return state.walletList
    }
  }

}
