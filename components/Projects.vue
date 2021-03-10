<template>
  <div class="projects">
    <v-container class="projects__container">
      <h2 class="display-1 projects__title pt-10">
        My projects
      </h2>
      <v-divider class="mt-2 mb-6" />
      <v-row
        class="projects__row"
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
          >
            <figure class="hover-effect" @click="checkScreen(project.title)">
              <v-img :src="require(`~/assets/img/${project.img}`)">
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-2"
                    />
                  </v-row>
                </template>
              </v-img>
              <article class="d-flex align-center">
                <div class="card-content mb-12">
                  <h3 class="mb-3">
                    {{ project.title }}
                  </h3>
                  <p>{{ project.description }}</p>
                </div>
              </article>
            </figure>
            <div class="links d-flex align-center mt-auto py-3">
              <a :href="project.live" target="_blank">Live</a><a v-if="project.code" :href="project.code" target="_blank">Code</a><a @click="openDialog(project.title)">More info</a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </v-col>
  </v-row>
  </v-container>
  </div>
</template>

<script>
import projects from '../utils/projects'
export default {
  data () {
    return {
      arrOfProjects: projects
    }
  },
  computed: {
    touchScreen () {
      let touchScreen
      navigator.maxTouchPoints > 0 ? touchScreen = true : touchScreen = false
      return touchScreen
    }
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

<style lang="scss" scoped>

.projects {
  min-height: 700px;
  background: #f2f2f2;
  &__container {
@media (min-width: 1264px) {
    max-width: 1140px;

}
  max-width: 960px;
  }
  &__card {
    position: relative;
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
  justify-content: space-around;
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
