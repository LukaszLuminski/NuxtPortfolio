<template>
  <div
    id="projects"
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0.4]
      }
    }"
    class="projects pb-8"
  >
    <v-container class="projects__container mb-3">
      <div
        id="projects-title"
        class="title-wrapper"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-anchor="#projects"
        :data-aos-offset="!$vuetify.breakpoint.xs ? '300' : ''"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 class="section-title pt-8">
          My most recent, Vue.js
          <br :class="$vuetify.breakpoint.xs ? '' : 'd-none'">projects
        </h2>
        <v-divider class="mt-2 mb-6" />
        <div
          v-if="hasTouch"
          class="d-flex align-center projects__tip"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="700"
          data-aos-anchor="#projects"
          :data-aos-offset="!$vuetify.breakpoint.xs ? '300' : ''"
          data-aos-anchor-placement="center-bottom"
        >
          <img src="/img/lightbulb.svg" width="30px" alt="" class="mb-1"> <p class="projects__tip__text caption pl-1 mb-0">
            Tap on a thumbnail for a short description
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-anchor="#projects"
        :data-aos-offset="!$vuetify.breakpoint.xs ? '300' : ''"
        data-aos-anchor-placement="center-bottom"
      >
        <Project
          :is-ios="isIos"
          :has-touch="hasTouch"
          :arr="arrOfVueProjects"
          :imgs-ready="imgsReady"
          @add-loaded-img="allLoadedImg++"
        />
      </div>
      <div
        class="title-wrapper"
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="800"
        data-aos-anchor="#projects"
        :data-aos-offset="!$vuetify.breakpoint.xs ? '300' : ''"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 class="section-subtitle pt-8">
          Older projects, various
          <br :class="$vuetify.breakpoint.xs ? '' : 'd-none'">tech stack
        </h2>
        <v-divider class="mt-2 mb-6" />
      </div>
      <div
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="800"
        data-aos-anchor="#projects"
        :data-aos-offset="!$vuetify.breakpoint.xs ? '300' : ''"
        data-aos-anchor-placement="center-bottom"
      >
        <Project
          class="mb-15"
          :is-ios="isIos"
          :has-touch="hasTouch"
          :arr="arrOfOtherProjects"
          :imgs-ready="imgsReady"
          @add-loaded-img="allLoadedImg++"
        />
      </div>
    </v-container>
    <div id="skills" class="anchor" />
    <div class="projects__bg" />
  </div>
</template>

<script>
import Project from './Project.vue'
import IntersectionObserverMixin from '~/mixins/intersectionObserver.js'

export default {
  components: { Project },

  mixins: [IntersectionObserverMixin],

  props: {
    isIos: {
      type: Boolean,
      required: true
    },
    hasTouch: {
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
      imgsReady: false,
      visible: false,
      sectionName: 'Projects'
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
  position: relative;
  &__bg {
    position: absolute;
    height: 90px;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/img/shadow-top.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &__tip {
    margin-top: -15px;
    &__text {
      color: #514d48;
    }
  }
  background: $color-light-grey;
  &__card {
    position: relative;
    transition: 0.4s;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
.card-content {
  width: 100%;
  padding: 1rem;
}
.links {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  min-height: 52.5px;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.55);
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
</style>
