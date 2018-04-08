<template>
  <div class="pricing-plan col-sm-4" :class="{highlight: plan.highlight}">
    <div class="plan-head">
      <div class="plan-image">
        <img alt="" src="img/plan1.png">
      </div>
      <div class="plan-name">
        {{ plan.name }}
      </div>
    </div>
    <div class="plan-body">
      <div class="plan-price-w">
        <div class="price-value">
          $10
        </div>
        <div class="price-label">
          For Price
        </div>
      </div>
      <div class="plan-btn-w">
        <a class="btn btn-primary btn-rounded" href="#">Contact Us</a>
      </div>
    </div>
    <div class="plan-description">
      <h6>
        Quick Description
      </h6>
      <p>
        Pane, problem that millions lay up as and but antiquity in that officers. Was at survey is be behavioural how behavioural writing arrange trial.
      </p>
      <h6>
        Features
      </h6>
      <ul>
        <li>
          User Profiles
        </li>
        <li>
          File Manager
        </li>
        <li>
          Pricing Plans
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "plan",
    props: ['plan']
  }
</script>

<style scoped>

</style>
