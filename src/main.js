// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUi from 'element-ui'
import App from './App'
import router from './router'

import { store } from './store/store'
import { apolloProvider } from './common/apolloProvider'
import { messages } from './messages/messages'

// GLOBAL COMPONENTS INSTALL
import components from './components/components'
Vue.component(components.Header.name, components.Header)
Vue.component(components.HeaderSecondary.name, components.HeaderSecondary)
Vue.component(components.CoinIcon.name, components.CoinIcon)


// GLOBAL FILTERS
Vue.filter('currency', value => {
  let currency =  {
    "symbol": "$",
    "name": "US Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "USD",
    "name_plural": "US dollars"
  }
  return `${value.toFixed(currency.decimal_digits)} ${currency.symbol}`
})

Vue.filter('uppercase', value => {
  return value.toUpperCase();
})

Vue.filter('lowercase', value => {
  return value.toLowerCase()
})

Vue.filter('percentage', value => {
  return `%`. value;
})


Vue.use(ElementUi)
Vue.config.productionTip = false
Vue.config.devtools = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  messages,
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
