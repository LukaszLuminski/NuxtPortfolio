<template>
  <div>
    <HeroSection :touch-screen="touchScreen" />
    <Projects :touch-screen="touchScreen" />
    <Skills />
    <FullScreenDialog
      class="mt-15"
      :show="dialog"
      :project="project"
      @close="dialog = false"
    />
  </div>
</template>

<script>
import FullScreenDialog from '../components/FullScreenDialog.vue'
import HeroSection from '../components/HeroSection.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
export default {
  components: { HeroSection, Projects, FullScreenDialog, Skills },
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
        navigator.maxTouchPoints > 0 ? touchScreen = true : touchScreen = false
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
</style>
