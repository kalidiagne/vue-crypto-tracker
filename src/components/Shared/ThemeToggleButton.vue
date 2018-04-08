<template>
  <div class="floated-colors-btn second-floated-btn" @click="TOGGLE_THEME">
    <div :class="['os-toggler-w', {on: IS_DARK_THEME}]">
      <div class="os-toggler-i">
        <div class="os-toggler-pill"></div>
      </div>
    </div>
    <span>Dark Theme </span>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: "theme-toggle-button",
    computed: {
      ...mapGetters({
        IS_DARK_THEME: 'isDarkThemeActive'
      })
    },
    methods: {
      ...mapMutations({
        TOGGLE_THEME: 'toggleTheme'
      })
    }
  }
</script>

<style scoped>

</style>
