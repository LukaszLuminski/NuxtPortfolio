<template>
  <v-app v-if="isLoaded">
    <NavMain />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
  <v-overlay v-else color="white" :opacity="1" />
</template>

<script>
import Footer from '../components/layout/Footer.vue'
import NavMain from '~/components/layout/NavMain.vue'
export default {
  components: { NavMain, Footer },
  data: () => ({
    isLoaded: false
  }),
  mounted () {
    this.isLoaded = true
  }
}
</script>
