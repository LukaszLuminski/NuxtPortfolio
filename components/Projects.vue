<template>
  <div class="projects">
    <v-container class="projects__container">
      <div class="title-wrapper">
        <h2 class="display-1 section-title pt-8">
          My most recent, Vue.js projects
        </h2>
        <v-divider class="mt-2 mb-6" />
      </div>
      <v-row
        class="projects__row mb-15"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-anchor="#projects"
      >
        <v-col
          v-for="(project, i) in arrOfProjects"
          :key="i"
          class="col-12 col-sm-6"
        >
          <v-card
            elevation="10"
            :class="touchScreen ? 'disable-hover' : 'enable-hover'"
            class="projects__card"
            :style="!imgsReady ? 'opacity: 0' : 'opacity: 1'"
          >
            <figure class="hover-effect" @click="checkScreen(project)">
              <img :src="`/img/${project.img}`" @load="allLoadedImg++">
              <article class="d-flex align-center">
                <div class="card-content mb-12">
                  <h3 class="mb-3">
                    {{ project.title }}
                  </h3>
                  <p>{{ project.description }}</p>
                </div>
              </article>
            </figure>
            <div :class="!imgsReady ? 'd-none' : 'd-flex'" class="links align-center mt-auto py-3">
              <a :href="project.live" target="_blank" :class="touchScreen ? 'ml-auto mr-5' : 'mx-5'">Live</a><a v-if="project.code" :href="project.code" target="_blank" :class="touchScreen ? 'mx-auto' : ''">Code</a><a :class="touchScreen ? 'mr-auto' : 'd-none'" class="mx-5" @click="openDialog(project)">More info</a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div id="skills" class="anchor" />
  </div>
</template>

<script>
import projects from '../utils/projects'
export default {
  data () {
    return {
      arrOfProjects: projects,
      allImg: 0,
      allLoadedImg: 0,
      imgsReady: false

    }
  },
  computed: {
    touchScreen () {
      let touchScreen
      navigator.maxTouchPoints > 0 ? touchScreen = true : touchScreen = false
      return touchScreen
    }
  },
  watch: {
    allLoadedImg (val) {
      if (val === this.allImg) {
        this.imgsReady = true
      }
    }
  },
  mounted () {
    this.allImg = projects.length
  },
  methods: {
    openDialog (val) {
      this.$emit('open-dialog', val)
    },
    checkScreen (val) {
      if (!this.touchScreen) {
        this.openDialog(val)
      }
    }
  }
}
</script>

<style lang="scss">
.title-wrapper {
    width: max-content;
  }
  .section-title {
    color: #333333;
    padding-right: 10px;
  }
.projects {
  min-height: 700px;
  background: #f2f2f2;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%);
  &__card {
    position: relative;
    transition: .4s;
    border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  }
}
.card-content {
  height: fit-content;
}
.links {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, .55);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  a {
    font-size: 19px;
    text-decoration: none;
    color: white;
  }
}
.v-application .elevation-10.projects__card {
  transition: .4s;
  &:hover {
    box-shadow: none !important;
  }

}
</style>
