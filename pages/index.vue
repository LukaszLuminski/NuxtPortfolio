<template>
  <div>
    <HeroSection />
    <div id="projects" class="mb-10" />
    <Projects
      @open-dialog="openDialog"
    />
    <FullScreenDialog class="mt-15" :show="dialog" :title="title" @close="dialog = false" />
  </div>
</template>

<script>
import FullScreenDialog from '../components/FullScreenDialog.vue'
import HeroSection from '../components/HeroSection.vue'
import Projects from '../components/Projects.vue'
export default {
  components: { HeroSection, Projects, FullScreenDialog },
  data () {
    return {
      dialog: false,
      title: null
    }
  },
  methods: {
    openDialog (val) {
      this.title = val
      this.dialog = true
    }
  }
}
</script>

<style lang="scss">
</style>
