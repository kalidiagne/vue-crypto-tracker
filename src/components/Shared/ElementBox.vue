<template>
  <a class="element-box el-tablo trend-in-corner " href="#">
    <div class="label">
      {{ title }}
    </div>
    <div class="value" v-if="currency">
      {{ value | currency }}
    </div>
    <div class="value" v-else>
      {{ value }}
    </div>
    <div class="trending trending-up-basic">
      <span>12%</span><i class="os-icon os-icon-arrow-up2"></i>
    </div>
  </a>
</template>

<script>
  export default {
    name: "element-box",
    props: {
      title: String,
      value: Number,
      percentage: Number,
      currency: Boolean
    }
  }
</script>

<style scoped>
  .el-tablo .value {
    font-size: 2rem !important;
  }
</style>

