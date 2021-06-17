<template>
  <div id="projects" class="projects pb-8">
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
        <p class="section-title pt-8">
          My most recent, Vue.js
          <br :class="$vuetify.breakpoint.xs ? '' : 'd-none'">projects
        </p>
        <v-divider class="mt-2 mb-6" />
        <div
          v-if="isIos || touchScreen"
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
        <p class="section-subtitle pt-8">
          Older projects, various
          <br :class="$vuetify.breakpoint.xs ? '' : 'd-none'">tech stack
        </p>
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
export default {
  components: { Project },
  props: {
    isIos: {
      type: Boolean,
      required: true
    },
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
      imgsReady: false,
      visible: false
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
  // @media (min-width: 768px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%);
  // }
  // clip-path: polygon(0 0, 100% 0, 100% 98%, 0% 100%);
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
