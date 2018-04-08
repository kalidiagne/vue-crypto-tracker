<template>
  <div class=" desktop-menu menu-top-w menu-activated-on-hover">
    <div class="menu-top-i">
      <div class="logo-w">
        <a class="logo" href="index.html"><img src="/static/img/logo.png"></a>
      </div>
      <ul class="main-menu">

        <router-link tag="li" :to="dashboard" active-class="active" exact>
          <a href="">
            <div class="icon-w">
              <div class="os-icon os-icon-window-content"></div>
            </div>
            <span> Dashboard </span>
          </a>
        </router-link>

        <router-link tag="li" :to="accounts" active-class="active">
          <a href="">
            <div class="icon-w">
              <div class="os-icon os-icon-wallet-loaded"></div>
            </div>
            <span> Accounts </span>
          </a>
        </router-link>

      </ul>
      <div class="logged-user-w">
        <div class="avatar-w">
          <img alt="" src="/static/img/avatar1.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app-header",
    computed: {
      dashboard() {
        return { name: 'dashboard' }
      },
      accounts() {
        return { name: 'accounts' }
      }
    }
  }
</script>

<style scoped>

</style>
