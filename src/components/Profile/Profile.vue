<template>
  <div class="row">
    <div class="col-sm-6">
      <profile-detail></profile-detail>
    </div>
    <div class="col-sm-6">
      <profile-settings></profile-settings>
    </div>
  </div>
</template>

<script>
  import ProfileDetail from './ProfileDetail'
  import ProfileSettings from './ProfileSettings'

  export default {
    name: "profile",
    components: {
      ProfileDetail,
      ProfileSettings
    }
  }
</script>

<style scoped>

</style>
