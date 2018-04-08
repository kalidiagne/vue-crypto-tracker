<template>
  <div class="user-profile compact">
    <div class="up-head-w" style="background-image:url(img/profile_bg1.jpg)">
      <div class="up-social">
        <a href="#"><i class="os-icon os-icon-twitter"></i></a><a href="#"><i class="os-icon os-icon-facebook"></i></a>
      </div>
      <div class="up-main-info">
        <h2 class="up-header">
          Kalidou Diagne
        </h2>
        <h6 class="up-sub-header">
          Product Designer at Facebook
        </h6>
      </div>
      <svg class="decor" width="842px" height="219px" viewBox="0 0 842 219" preserveAspectRatio="xMaxYMax meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-381.000000, -362.000000)" fill="#FFFFFF"><path class="decor-path" d="M1223,362 L1223,581 L381,581 C868.912802,575.666667 1149.57947,502.666667 1223,362 Z"></path></g></svg>
    </div>
    <div class="up-controls">
      <div class="row">
        <div class="col-sm-6">
          <div class="value-pair">
            <div class="label">
              Status:
            </div>
            <div class="value badge badge-pill badge-success">
              Online
            </div>
          </div>
        </div>
        <div class="col-sm-6 text-right">
          <a class="btn btn-primary btn-sm" href=""><i class="os-icon os-icon-link-3"></i><span>Add to Friends</span></a>
        </div>
      </div>
    </div>
    <div class="up-contents">
      <div class="m-b">
        <div class="row m-b">
          <div class="col-sm-6 b-r b-b">
            <div class="el-tablo centered padded-v">
              <div class="value">
                25
              </div>
              <div class="label">
                Products Sold
              </div>
            </div>
          </div>
          <div class="col-sm-6 b-b">
            <div class="el-tablo centered padded-v">
              <div class="value">
                315
              </div>
              <div class="label">
                Friends
              </div>
            </div>
          </div>
        </div>
        <div class="padded">
          <div class="os-progress-bar primary">
            <div class="bar-labels">
              <div class="bar-label-left">
                <span>Profile Completion</span><span class="positive">+10</span>
              </div>
              <div class="bar-label-right">
                <span class="info">72/100</span>
              </div>
            </div>
            <div class="bar-level-1" style="width: 100%">
              <div class="bar-level-2" style="width: 80%">
                <div class="bar-level-3" style="width: 30%"></div>
              </div>
            </div>
          </div>
          <div class="os-progress-bar primary">
            <div class="bar-labels">
              <div class="bar-label-left">
                <span>Status Unlocked</span><span class="positive">+5</span>
              </div>
              <div class="bar-label-right">
                <span class="info">45/100</span>
              </div>
            </div>
            <div class="bar-level-1" style="width: 100%">
              <div class="bar-level-2" style="width: 30%">
                <div class="bar-level-3" style="width: 10%"></div>
              </div>
            </div>
          </div>
          <div class="os-progress-bar primary">
            <div class="bar-labels">
              <div class="bar-label-left">
                <span>Followers</span><span class="negative">-12</span>
              </div>
              <div class="bar-label-right">
                <span class="info">74/100</span>
              </div>
            </div>
            <div class="bar-level-1" style="width: 100%">
              <div class="bar-level-2" style="width: 80%">
                <div class="bar-level-3" style="width: 60%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "profile-detail"
    }
</script>

<style scoped>

</style>
