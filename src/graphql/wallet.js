import gql from 'graphql-tag'

export const USER_WALLET_LIST = gql`
  query userWalletList ($id: ID!) {
    User(id: $id) {
      wallets {
        id
        name
        short
        long
        createdAt
        updatedAt
        transactions {
          id
          createdAt
          updatedAt
          coin
          coinShort
          currency
          currencyShort
          price
          pricePerCoin
          buyAt

        }
      }
    }
  }
`

export const CREATE_NEW_WALLET = gql`
  mutation createNewWallet(
    $name: String!,
    $short: String!,
    $long: String!,
    $userId: ID!,
  ){
    createWallet(
      name: $name,
      short: $short,
      long: $long,
      userId: $userId
    ) {
      id
      name
      user {
        firstname
        lastname
      }
    }
  }
`
