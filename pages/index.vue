<template>
  <div class="homepage">
    <div class="main" :class="!isLoaded ? 'hidden' : ''">
      <HeroSection :is-ios="isIos" :has-touch="hasTouch" />
      <div v-if="isLoaded">
        <Projects :is-ios="isIos" :has-touch="hasTouch" />
        <Skills :aos-position="getOffset" :has-touch="hasTouch" />
        <AboutMe :aos-position="getOffset" />
        <Contact :aos-position="getOffset" />
      </div>
      <FullScreenDialog
        class="mt-15"
        :show="fullScreenDialog"
        :project="project"
        @close="fullScreenDialog = false"
      />
    </div>
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
  components: {
    HeroSection,
    Projects,
    FullScreenDialog,
    Skills,
    AboutMe,
    Contact
  },

  mixins: [aosMixin],

  transitions: 'route',

  data () {
    return {
      fullScreenDialog: false,
      skillDialog: false,
      project: null,
      skill: null,
      isLoaded: false,
      isIos: null,
      projects: false,
      skills: false,
      about: false,
      hasTouch: false,
      isIntersecting: false
    }
  },

  created () {
    this.$root.$on('open-dialog', (val) => {
      this.project = val
      this.fullScreenDialog = true
    })
    this.$root.$on('open-skill-dialog', (val) => {
      this.skill = val
      this.skillDialog = true
    })
  },

  mounted () {
    window.scrollTo(0, 0)
    if ('ontouchstart' in window) {
      this.hasTouch = true
    }

    if (this.hasTouch) {
      this.$nuxt.$emit('is-touch-device')
    }

    smoothscroll.polyfill()
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
    if (this.isIos) {
      window.__forceSmoothScrollPolyfill__ = true
    }
    this.isLoaded = true
    this.$nuxt.$emit('homepage-ready')

    if (!this.hasTouch) {
      this.$nuxt.$emit('hide-icon-credits')
    }
  }
}
</script>

<style lang="scss">
body,
html {
  max-width: 100vw;
  overflow-x: hidden;
}

.homepage {
  position: relative;
}

.progress-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  padding-bottom: 70px;

  @media (min-width: $breakpoint-sm) {
    padding-bottom: 0;
  }
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
