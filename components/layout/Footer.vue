<template>
  <v-footer dark class="theFooter text-center" height="80px">
    <v-row class="theFooter__copyright">
      <v-col>
        <p class="mb-2">
          &#169; {{ new Date().getFullYear() }}. All rights reserved. Made with
          <span class="theFooter__copyright__icon">&#9829;</span> by Lukasz
          Luminski
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
  &__copyright {
    font-size: 13px;
    &__icon {
      font-size: 17px;
      color: red;
    }
  }
}
</style>
