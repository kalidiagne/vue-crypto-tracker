import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cje2qiknx0neo01017jd1ddpl'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
