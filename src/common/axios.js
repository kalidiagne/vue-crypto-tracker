import axios from 'axios'

export const COINMARKETCAP = axios.create({
  baseURL: 'https://api.coinmarketcap.com/v1/ticker/',
  /*transformResponse: (data) => {
    console.log('coin cap transform')
    return data
  }*/
})

export const COINCAP = axios.create({
  baseURL: 'https://coincap.io/front',
  /*transformResponse: (data) => {
    console.log('coin cap transform ')
    return data
  }*/
})
