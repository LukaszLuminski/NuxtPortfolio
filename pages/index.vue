<template>
  <div>
    <HeroSection :touch-screen="touchScreen" />
    <Projects :touch-screen="touchScreen" />
    <Skills />
    <AboutMe />
    <Contact />
    <div class="px-6 mt-11">
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
    </div>

    <FullScreenDialog
      class="mt-15"
      :show="dialog"
      :project="project"
      @close="dialog = false"
    />
  </div>
</template>

<script>
import FullScreenDialog from '~/components/FullScreenDialog.vue'
import HeroSection from '~/components/HeroSection.vue'
import Projects from '~/components/Projects.vue'
import Skills from '~/components/Skills.vue'
import AboutMe from '~/components/AboutMe.vue'
import Contact from '~/components/Contact.vue'
export default {
  components: { HeroSection, Projects, FullScreenDialog, Skills, AboutMe, Contact },
  data () {
    return {
      dialog: false,
      project: null
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
    this.$root.$on('open-dialog', (val) => {
      this.project = val
      this.dialog = true
    })
  }
}
</script>

<style lang="scss">
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
