<template>
  <v-app
    :class="{
      hidden: !isLoaded
    }"
  >
    <NavMain />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/layout/Footer.vue'
import NavMain from '~/components/layout/NavMain.vue'

export default {
  components: { NavMain, Footer },

  data () {
    return {
      isLoaded: false
    }
  },

  created () {
    this.$nuxt.$on('homepage-ready', () => {
      this.isLoaded = true
    })
  }
}
</script>
