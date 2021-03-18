<template>
  <transition v-if="isLoaded" name="home">
    <v-app>
      <NavMain />
      <v-main>
        <nuxt />
      </v-main>
      <Footer />
    </v-app>
  </transition>
  <v-app v-else>
    <v-container class="progress-container d-flex justify-center align-center">
      <v-row
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center pt-0"
          cols="12"
        >
          Loading
        </v-col>
        <v-col cols="6" class="mb-15 pb-15">
          <v-progress-linear
            class="progress"
            indeterminate
            rounded
            height="6"
            color="brown lighten-3"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  <!-- <v-overlay v-else color="white" :opacity="1" /> -->
</template>

<script>
import Footer from '../components/layout/Footer.vue'
import NavMain from '~/components/layout/NavMain.vue'
export default {
  components: { NavMain, Footer },
  transition: 'home',
  data: () => ({
    isLoaded: false
  }),
  mounted () {
    this.isLoaded = true
  }
}
</script>

<style lang="scss" scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity .7s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.progress-container {
  height: 100vh;
}
</style>
