<template>
  <v-footer dark class="theFooter text-center" height="90px">
    <v-row class="theFooter__copyright">
      <v-col>
        <p class="mb-2">
          &#169; {{ new Date().getFullYear() }}. All rights reserved. Made with
          <span class="theFooter__copyright__icon">&#9829;</span> by Lukasz
          Luminski
        </p>
        <p class="mb-2 subtitle">
          Background icons from <a href="http://getdrawings.com/biography-icon">Biography Icon</a>
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.theFooter {
  margin-top: -3px;
  &__copyright {
    font-size: 13px;
    a {
      color: white;
      transition: .2s;
      &:hover {
        color: lightgray;
      }
      text-decoration: none !important;
    }
    &__icon {
      font-size: 17px;
      color: red;
    }
  }
}
</style>
