<template>
  <div
    id="about"
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0.7]
      }
    }"
    class="about pt-9 pb-12"
  >
    <v-container id="aboutAnimate" class="about__container pb-5">
      <div
        class="title-wrapper"
      >
        <h2 class="section-title pt-8">
          About me
        </h2>
        <v-divider class="mt-2 mb-8" />
      </div>
      <div
        class="about__card-wrapper"
        data-aos-anchor-placement="center-bottom"
      >
        <v-card
          class="about__card float-left mt-1 mr-4 mb-2 transition"
          elevation="10"
          :height="$vuetify.breakpoint.xs ? '180px' : '198px'"
          :width="$vuetify.breakpoint.xs ? '150px' : '165px'"
        >
          <div class="about__img" :style="`background-image: url('${info.img}')`" />
        </v-card>
        <div class="mb-13" v-html="info.description" />
      </div>
    </v-container>
    <div class="about__bg about__bg__top" />
    <div class="about__bg about__bg__bottom" />
    <div id="contact" class="anchor" />
  </div>
</template>

<script>
import IntersectionObserverMixin from '~/mixins/intersectionObserver.js'

export default {
  mixins: [IntersectionObserverMixin],

  data () {
    return {
      info: null,
      imgLoaded: false,
      sectionName: 'About me'
    }
  },

  created () {
    this.info = this.$store.state.aboutMe.data
  }
}
</script>

<style lang="scss">
.about {
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    z-index: -1;
    @media (min-width: $breakpoint-md) {
      background: url("/img/bio-small.png");
     background-size: 46% !important;
    background-position: 141% 48% !important
    }
    @media (min-width: $breakpoint-lg) {
      background-size: 25% !important;
      background-position: 96% 47% !important;
      background: url("/img/bio.png");
    }
    @media (min-width: $breakpoint-md) {
      display: initial;
      background-repeat: no-repeat;
    }
    display: none;
  }
  &,
  &__card {
    background-color: $color-light-grey !important;
  }
  &__card-wrapper {
    position: relative;
  }
  &__img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
  position: relative;
  min-height: 600px;
  &__container {
    @media (min-width: $breakpoint-md) {
      padding-right: 20%;
    }
  }
  &__bg {
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    left: 0;
    right: 0;
    height: 90px;

    &__top {
      background-image: url("/img/shadow-bottom.png");
      top: -15px;
    }
    &__bottom {
      background-image: url("/img/contact-shadow.png");
      bottom: 0;
    }
  }
}
</style>
