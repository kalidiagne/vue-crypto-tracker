<template>
  <div class="top-menu-secondary">
    <div class="logo-w">
      <a class="logo" href="index.html"><img src="/static/img/logo.png"></a>
    </div>
      <ul>
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          tag="li"
          :to="route.to" active-class="active" exact>
          <a href="#">
            <div class="icon-w d-inline-block">
              <div class="os-icon os-icon-window-content"></div>
            </div>
            <span> {{ route.title }} </span>
          </a>
        </router-link>

        <!--<router-link tag="li" :to="accounts" active-class="active">
          <a href="">
            <div class="icon-w d-inline-block">
              <div class="os-icon os-icon-wallet-loaded"></div>
            </div>
            <span> Accounts </span>
          </a>
        </router-link>-->
      </ul>


    <!--------------------
    START - Top Menu Controls
    -------------------->
    <div class="top-menu-controls">
      <!-- <div class="fancy-selector-w" style="margin: 0; padding: 0">
        <div class="fancy-selector-current">
          <div class="fs-img">
            <img alt="" src="img/card1.png">
          </div>
          <div class="fs-main-info">
            <div class="fs-name">
              USD
            </div>
            <div class="fs-sub">
              <span>Balance:</span><strong>$5,304</strong>
            </div>
          </div>
          <div class="fs-extra-info">
            <strong>5476</strong><span>ending</span>
          </div>
        </div>
        <div class="fancy-selector-options">
          <div class="fancy-selector-option">
            <div class="fs-img">
              <img alt="" src="img/card2.png">
            </div>
            <div class="fs-main-info">
              <div class="fs-name">
                Capital One Venture Card
              </div>
              <div class="fs-sub">
                <span>Balance:</span><strong>$5,304</strong>
              </div>
            </div>
            <div class="fs-extra-info">
              <strong>5476</strong><span>ending</span>
            </div>
          </div>
          <div class="fancy-selector-option active">
            <div class="fs-img">
              <img alt="" src="img/card1.png">
            </div>
            <div class="fs-main-info">
              <div class="fs-name">
                American Express Platinum
              </div>
              <div class="fs-sub">
                <span>Balance:</span><strong>$8,274</strong>
              </div>
            </div>
            <div class="fs-extra-info">
              <strong>2523</strong><span>ending</span>
            </div>
          </div>
          <div class="fancy-selector-option">
            <div class="fs-img">
              <img alt="" src="img/card3.png">
            </div>
            <div class="fs-main-info">
              <div class="fs-name">
                CitiBank Preferred Credit
              </div>
              <div class="fs-sub">
                <span>Balance:</span><strong>$1,202</strong>
              </div>
            </div>
            <div class="fs-extra-info">
              <strong>6345</strong><span>ending</span>
            </div>
          </div>
          <div class="fancy-selector-actions text-right">
            <a class="btn btn-primary" href="#"><i class="os-icon os-icon-ui-22"></i><span>Add Account</span></a>
          </div>
        </div>
      </div> -->
      <div class="top-icon top-search d-xl-none">
        <i class="os-icon os-icon-ui-37"></i>
      </div>

      <div class="logged-user-w">
        <div class="logged-user-i">
          <div class="avatar-w">
            <img alt="" src="/static/img/avatar1.jpg">
          </div>
          <div class="logged-user-menu">
            <div class="logged-user-avatar-info">
              <div class="avatar-w">
                <img alt="" src="/static/img/avatar1.jpg">
              </div>
              <div class="logged-user-info-w">
                <div class="logged-user-name">
                  Kalidou diagne
                </div>
                <div class="logged-user-role">
                  Administrator
                </div>
              </div>
            </div>
            <div class="bg-icon">
              <i class="os-icon os-icon-wallet-loaded"></i>
            </div>
            <ul>
              <li>
                <router-link :to="{name: 'profile'}">
                  <i class="os-icon os-icon-user-male-circle2"></i><span>Profile details</span>
                </router-link>
              </li>
              <li>
                <a href="#"><i class="os-icon os-icon-signs-11"></i><span>Logout</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--------------------
      END - User avatar and menu in secondary top menu
      -------------------->
    </div>
    <!--------------------
    END - Top Menu Controls
    -------------------->


  </div>
</template>

<script>
  export default {
    name: "header-secondary",
    data() {
      return {
        routes: [
          {
            title: 'Dashboard',
            to: {
              name: 'dashboard'
            }
          },
          {
            title: 'Wallets',
            to: {
              name: 'wallets'
            }
          }
        ],
        user_routes: [
          {
            title: 'Profile details',
            to: {
              name: 'profile'
            }
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
