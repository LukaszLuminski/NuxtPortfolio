<template>
  <div class="projects-wrap">
    <div class="projects">
      <v-container class="projects__container mb-3">
        <div
          class="title-wrapper"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-anchor="#projects"
        >
          <p class="section-title pt-8">
            My most recent, Vue.js
            <br :class="$vuetify.breakpoint.xs ? '' : 'd-none'">projects
          </p>
          <v-divider class="mt-2 mb-6" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-anchor="#projects"
        >
          <Project
            :touch-screen="touchScreen"
            :arr="arrOfVueProjects"
            :imgs-ready="imgsReady"
            @add-loaded-img="allLoadedImg++"
          />
        </div>
        <div
          class="title-wrapper"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-anchor="#projects"
        >
          <p class="section-subtitle pt-8">
            Older projects, various
            <br :class="$vuetify.breakpoint.xs ? '' : 'd-none'">tech stack
          </p>
          <v-divider class="mt-2 mb-6" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-anchor="#projects"
        >
          <Project
            class="mb-15"
            :touch-screen="touchScreen"
            :arr="arrOfOtherProjects"
            :imgs-ready="imgsReady"
            @add-loaded-img="allLoadedImg++"
          />
        </div>
      </v-container>
      <div id="skills" class="anchor" />
    </div>
  </div>
</template>

<script>
import Project from './Project.vue'
export default {
  components: { Project },
  props: {
    touchScreen: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      arrOfOtherProjects: null,
      arrOfVueProjects: null,
      allImg: 0,
      allLoadedImg: 0,
      imgsReady: false
    }
  },
  watch: {
    allLoadedImg (val) {
      if (val === this.allImg) {
        this.imgsReady = true
      }
    }
  },
  created () {
    this.arrOfOtherProjects = this.$store.state.otherProjects.items
    this.arrOfVueProjects = this.$store.state.vueProjects.items
    this.allImg = this.arrOfVueProjects.length + this.arrOfOtherProjects.length
  }
}
</script>

<style lang="scss">
.section-title,
.section-subtitle {
  margin-bottom: 0 !important;
}
.section-title {
  @media (min-width: 325px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 2.1rem;
  }
  font-size: 1.3rem;
}
.section-subtitle {
  @media (min-width: 325px) {
    font-size: 1.35rem;
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  font-size: 1.2rem;
}
.title-wrapper {
  width: max-content;
}
.section-title {
  color: $color-dark-grey;
  padding-right: 10px;
}
.projects {
  background: $color-light-grey;
  @media (min-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%);
  }
  clip-path: polygon(0 0, 100% 0, 100% 98%, 0% 100%);
  &__card {
    position: relative;
    transition: 0.4s;
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
  background: rgba(0, 0, 0, 0.55);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  a {
    font-size: 19px;
    text-decoration: none;
    color: white;
  }
}
.v-application .elevation-10.projects__card {
  transition: 0.4s;
  &:hover {
    box-shadow: none !important;
  }
}
.projects-wrap {
     filter: drop-shadow(-1px 3px 4px rgba(47, 47, 47, 0.3));
  }
</style>
