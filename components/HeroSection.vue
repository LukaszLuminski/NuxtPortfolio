<template>
  <div
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0.2]
      }
    }"
    class="heroSection"
  >
    <div
      :class="hasTouch ? 'img-wrapper' : 'jarallax'"
      class="heroSection__first jarallax d-flex align-center justify-center"
    >
      <img
        src="/img/hero-bg.jpg"
        :class="hasTouch ? 'fixed-img' : 'jarallax-img'"
        alt=""
      >
      <HeroContent
        :heading="heading"
        :subheading="subheading"
        :cursor="cursor"
        :animate-socials="animateSocials"
      />
    </div>
    <div id="projects" class="anchor" />
  </div>
</template>

<script>
// import AOS from 'aos'
import HeroContent from './HeroContent.vue'
import IntersectionObserverMixin from '~/mixins/intersectionObserver.js'

export default {
  components: { HeroContent },

  mixins: [IntersectionObserverMixin],

  props: {
    hasTouch: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      heading: '',
      subheading: '',
      cursor: false,
      animateSocials: false,
      textColor: null,
      i: 0,
      j: 0,
      sectionName: ' '
    }
  },

  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.typeWriter()
      }, 1000)
    })
  },

  methods: {
    typeWriter () {
      const heading = "Hello, I'm Lukasz"
      const subheading = 'Vue.js Web & Mobile Developer'
      if (this.i < heading.length) {
        this.heading += heading.charAt(this.i)
        this.i++
      } else if (this.j < subheading.length) {
        setTimeout(() => {
          this.subheading += subheading.charAt(this.j)
          this.j++
        }, 400)
      } else if (this.j === subheading.length) {
        setTimeout(() => {
          this.cursor = true
        }, 200)
        setTimeout(() => {
          this.cursor = false
          this.animateSocials = true
        }, 500)
      }
      setTimeout(this.typeWriter, 60)
    },

    changeColor () {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        this.textColor = 'black'
      } else {
        this.textColor = 'white'
      }
    }
  }
}
</script>
