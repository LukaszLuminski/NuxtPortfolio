<template>
  <div class="homepage transition" :class="!isLoaded ? 'hidden' : ''">
    <HeroSection :is-ios="isIos" :touch-screen="touchScreen" />
    <div v-if="isLoaded">
      <Projects :is-ios="isIos" />
      <Skills :aos-position="getOffset" />
      <AboutMe :aos-position="getOffset" />
      <Contact :aos-position="getOffset" />
    </div>

    <!-- <div class="px-6 mt-11">
      <v-container>
        <p class="headline">
          Work in progress...
        </p>
        <p>
          Check my previous portfolio website at
          <a
            href="https://lukaszluminski.github.io/Portfolio/"
          >https://lukaszluminski.github.io/Portfolio/</a>.
        </p>
      </v-container>
    </div> -->

    <FullScreenDialog
      class="mt-15"
      :show="dialog"
      :project="project"
      @close="dialog = false"
    />
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'
import FullScreenDialog from '~/components/FullScreenDialog.vue'
import HeroSection from '~/components/HeroSection.vue'
import Projects from '~/components/Projects.vue'
import Skills from '~/components/Skills.vue'
import AboutMe from '~/components/AboutMe.vue'
import Contact from '~/components/Contact.vue'
import aosMixin from '~/mixins/aosPosition.js'
export default {
  components: { HeroSection, Projects, FullScreenDialog, Skills, AboutMe, Contact },
  mixins: [aosMixin],
  transitions: 'route',
  data () {
    return {
      dialog: false,
      project: null,
      isLoaded: false,
      isIos: null,
      projects: false,
      skills: false,
      about: false
    }
  },
  computed: {
    touchScreen () {
      let touchScreen
      if (process.browser) {
        navigator.maxTouchPoints > 0
          ? (touchScreen = true)
          : (touchScreen = false)
      }
      return touchScreen
    }
  },
  created () {
    smoothscroll.polyfill()
    this.$root.$on('open-dialog', (val) => {
      this.project = val
      this.dialog = true
    })
    const checkIfIOS = () => {
      const iosQuirkPresent = () => {
        const audio = new Audio()

        audio.volume = 0.5
        return audio.volume === 1 // volume cannot be changed from "1" on iOS 12 and below
      }

      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      const isAppleDevice = navigator.userAgent.includes('Macintosh')
      const isisIos = navigator.maxTouchPoints >= 1 // true for iOS 13 (and hopefully beyond)

      return isIOS || (isAppleDevice && (isisIos || iosQuirkPresent()))
    }
    this.isIos = checkIfIOS()
  },
  mounted () {
    if (this.isIos) { window.__forceSmoothScrollPolyfill__ = true }
    this.$nextTick(() => {
      setTimeout(() => {
        this.isLoaded = true
        this.$nuxt.$emit('homepage-ready')
      }, 800)
    })
  }
}
</script>

<style lang="scss">
body, html {
  max-width: 100vw;
  overflow-x: hidden;
}
.anchor {
  height: 45px;
  margin-top: -45px;
}
.container {
  @media (min-width: 960px) {
    max-width: 900px;
  }
  @media (min-width: 1264px) {
    max-width: 1185px;
  }
}
.rc-anchor.rc-anchor-normal.rc-anchor-light {
  z-index: 1000;
}
</style>
