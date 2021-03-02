<template>
  <div class="heroSection">
    <div
      style="height: 100vh;"
      class="first jarallax d-flex align-center justify-center"
    >
      <img src="./../assets/img/hero-bg.jpg" class="jarallax-img">
      <v-container style="vertical-align: top;" class="text-center">
        <h1 ref="heading" :class="$vuetify.breakpoint.xs ? 'display-1' : 'display-2'">
          {{ heading }}
        </h1>
        <p style="min-height: 32px;" class="mt-2 headline">
          {{ subheading }}
        </p>
      </v-container>
    </div>

    <p>
      Jarallax is an open-source javascript library which makes adjusting css
      based on interaction easy. With Jarallax it's easy to create a parallax
      scrolling website.
    </p>
    <div class="filler" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: '',
      subheading: '',
      i: 0,
      j: 0
    }
  },
  mounted () {
    this.typeWriter()
  },
  methods: {
    typeWriter () {
      const heading = 'Hello, I\'m Lukasz.'
      const subheading = 'Vue.js Developer.'
      if (this.i < heading.length) {
        this.heading += heading.charAt(this.i)
        this.i++
      } else if (this.j < subheading.length) {
        setTimeout(() => {
          this.subheading += subheading.charAt(this.j)
          this.j++
        }, 800)
      }
      setTimeout(this.typeWriter, 60)
    }
  }

  // watch: {
  //   windowHeight (newHeight, oldHeight) {
  //     this.txt = `it changed to ${newHeight} from ${oldHeight}`
  //   }
  // },

}
</script>

<style lang="scss" scoped>
.filler {
  height: 50vh;
}
</style>
