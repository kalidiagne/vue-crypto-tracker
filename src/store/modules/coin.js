import { COINMARKETCAP } from './../../common/axios'
import { COINCAP } from './../../common/axios'

export const coin = {
  state: {
    coinLimit: 200,
    coinList: []
  },

  actions: {
    getCoinList({commit, state}) {
      console.log('here lorem1 lorem2')
      if (state.coinList.length <= 0) {
        COINMARKETCAP
          .get(`?limit=${state.coinLimit}`)
          .then(res => {
            commit('setCoinList', res.data)
          })
      }
    }
  },

  mutations: {
    setCoinList(state, coinList) {
      state.coinList = coinList
    }
  },

  getters: {
    coinList(state) {
      return state.coinList.map(coin => {
        let currentCoin = {
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          percentageLast24: coin.percent_change_24h
        }
        return currentCoin
      })
    }
  }

}
