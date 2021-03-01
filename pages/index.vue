<template>
  <div class="heroSection">
    <v-parallax
      dark
      :src="require('~/assets/img/hero-bg.jpg')"
      :height="windowHeight"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            Lukasz Luminski
          </h1>
          <h4 class="subheading">
            Frontend Web Developer
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="filler" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      windowHeight: window.innerHeight
    }
  },
  // watch: {
  //   windowHeight (newHeight, oldHeight) {
  //     this.txt = `it changed to ${newHeight} from ${oldHeight}`
  //   }
  // },

  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize () {
      this.windowHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.filler {
  height: 100vh;
}
</style>
