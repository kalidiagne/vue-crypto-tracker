<template>
  <div>
    <div class="section-heading centered">
      <h1>
        Hover Effect on Plans
      </h1>
      <p>
        Here is a set of demos of pricing plans table, we are planning on bringing more cool pricing plans layout in the near future so stay tuned.
      </p>
    </div>

    <div class="container">
      <div class="pricing-plans row no-gutters">
        <!--<plan v-for="plan in plans" :plan="plan"></plan> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Plan from './Plan'
  export default {
    name: "plans",
    data() {
      return {
        plans: [
          { name: 'Free', highlight: false },
          { name: 'Plus', highlight: true },
          { name: 'Premium', highlight: false }
        ]
      }
    },
    components: { Plan }
  }
</script>

<style scoped>

</style>
