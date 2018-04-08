<template>
  <div>
    <overview-statistic :accounts="accounts"></overview-statistic>
  </div>
</template>

<script>
  import OverviewStatistic from './OverviewStatistic'
  export default {
    name: "overview",
    data() {
      return {
        accounts: [
          {
            "id": "bitcoin",
            "name": "Bitcoin",
            "symbol": "BTC",
            "rank": "1",
            "price_usd": "10045.5",
            "price_btc": "1.0",
            "24h_volume_usd": "8715330000.0",
            "market_cap_usd": "169444098621",
            "available_supply": "16867662.0",
            "total_supply": "16867662.0",
            "max_supply": "21000000.0",
            "percent_change_1h": "-1.3",
            "percent_change_24h": "2.84",
            "percent_change_7d": "23.96",
            "last_updated": "1518763467"
          },
          {
            "id": "ethereum",
            "name": "Ethereum",
            "symbol": "ETH",
            "rank": "2",
            "price_usd": "928.816",
            "price_btc": "0.0932181",
            "24h_volume_usd": "2815520000.0",
            "market_cap_usd": "90694505267.0",
            "available_supply": "97645287.0",
            "total_supply": "97645287.0",
            "max_supply": null,
            "percent_change_1h": "-1.02",
            "percent_change_24h": "-1.14",
            "percent_change_7d": "14.57",
            "last_updated": "1518763452"
          },
          {
            "id": "ripple",
            "name": "Ripple",
            "symbol": "XRP",
            "rank": "3",
            "price_usd": "1.12398",
            "price_btc": "0.00011281",
            "24h_volume_usd": "955737000.0",
            "market_cap_usd": "43845578418.0",
            "available_supply": "39009215838.0",
            "total_supply": "99992725510.0",
            "max_supply": "100000000000",
            "percent_change_1h": "-1.16",
            "percent_change_24h": "-2.17",
            "percent_change_7d": "41.91",
            "last_updated": "1518763441"
          },
          {
            "id": "bitcoin-cash",
            "name": "Bitcoin Cash",
            "symbol": "BCH",
            "rank": "4",
            "price_usd": "1498.88",
            "price_btc": "0.150431",
            "24h_volume_usd": "796160000.0",
            "market_cap_usd": "25435993600.0",
            "available_supply": "16970000.0",
            "total_supply": "16970000.0",
            "max_supply": "21000000.0",
            "percent_change_1h": "-2.52",
            "percent_change_24h": "9.97",
            "percent_change_7d": "17.54",
            "last_updated": "1518763453"
          },
          {
            "id": "litecoin",
            "name": "Litecoin",
            "symbol": "LTC",
            "rank": "5",
            "price_usd": "213.314",
            "price_btc": "0.0214087",
            "24h_volume_usd": "1468080000.0",
            "market_cap_usd": "11783104465.0",
            "available_supply": "55238308.0",
            "total_supply": "55238308.0",
            "max_supply": "84000000.0",
            "percent_change_1h": "-1.94",
            "percent_change_24h": "-8.43",
            "percent_change_7d": "46.36",
            "last_updated": "1518763441"
          },
          {
            "id": "cardano",
            "name": "Cardano",
            "symbol": "ADA",
            "rank": "6",
            "price_usd": "0.397907",
            "price_btc": "0.00003993",
            "24h_volume_usd": "249154000.0",
            "market_cap_usd": "10316562857.0",
            "available_supply": "25927070538.0",
            "total_supply": "31112483745.0",
            "max_supply": "45000000000.0",
            "percent_change_1h": "-0.79",
            "percent_change_24h": "-2.29",
            "percent_change_7d": "12.53",
            "last_updated": "1518763455"
          },
          {
            "id": "stellar",
            "name": "Stellar",
            "symbol": "XLM",
            "rank": "7",
            "price_usd": "0.448336",
            "price_btc": "0.00004500",
            "24h_volume_usd": "84142300.0",
            "market_cap_usd": "8266214943.0",
            "available_supply": "18437544483.0",
            "total_supply": "103689123972",
            "max_supply": null,
            "percent_change_1h": "-1.06",
            "percent_change_24h": "-1.99",
            "percent_change_7d": "24.24",
            "last_updated": "1518763443"
          },
          {
            "id": "neo",
            "name": "NEO",
            "symbol": "NEO",
            "rank": "8",
            "price_usd": "121.723",
            "price_btc": "0.0122164",
            "24h_volume_usd": "199982000.0",
            "market_cap_usd": "7911995000.0",
            "available_supply": "65000000.0",
            "total_supply": "100000000.0",
            "max_supply": null,
            "percent_change_1h": "-1.48",
            "percent_change_24h": "-2.03",
            "percent_change_7d": "8.87",
            "last_updated": "1518763448"
          },
          {
            "id": "eos",
            "name": "EOS",
            "symbol": "EOS",
            "rank": "9",
            "price_usd": "9.88452",
            "price_btc": "0.00099203",
            "24h_volume_usd": "337825000.0",
            "market_cap_usd": "6644858678.0",
            "available_supply": "672248999.0",
            "total_supply": "900000000.0",
            "max_supply": "1000000000.0",
            "percent_change_1h": "-1.37",
            "percent_change_24h": "-2.35",
            "percent_change_7d": "17.82",
            "last_updated": "1518763452"
          },
          {
            "id": "iota",
            "name": "IOTA",
            "symbol": "MIOTA",
            "rank": "10",
            "price_usd": "2.06737",
            "price_btc": "0.00020749",
            "24h_volume_usd": "65568200.0",
            "market_cap_usd": "5746317521.0",
            "available_supply": "2779530283.0",
            "total_supply": "2779530283.0",
            "max_supply": "2779530283.0",
            "percent_change_1h": "-2.81",
            "percent_change_24h": "-0.61",
            "percent_change_7d": "17.52",
            "last_updated": "1518763451"
          }
        ]
      }
    },
    components: {
      OverviewStatistic
    }
  }
</script>

<style scoped>

</style>
