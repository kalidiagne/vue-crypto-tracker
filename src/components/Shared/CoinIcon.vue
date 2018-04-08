<template>
  <div class="avatar">
    <img class="coin-icon" :src="coinIcon" :style="iconHeight">
  </div>
</template>

<script>
  export default {
    name: "coin-icon",
    props: {
      coin: {
        type: String,
        required: true
      },
      height: {
        type: String,
        default: '35'
      }
    },
    computed: {
      coinIcon () {
        return `/static/img/coin-icon/128/icon/${this.coin.toLowerCase()}.png`
      },
      iconHeight () {
        return {
          'height': this.height + 'px'
        }
      }
    }
  }
</script>

<style scoped>
  .coin-icon {
    height: 35px;
  }
</style>
