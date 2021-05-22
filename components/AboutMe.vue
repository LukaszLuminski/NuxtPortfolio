<template>
  <div class="about pt-9 pb-12">
    <v-container class="about__container pb-5">
      <div
        class="title-wrapper"
        data-aos="fade-right"
        data-aos-duration="1100"
        data-aos-once="true"
        data-aos-anchor="#about"
      >
        <p class="section-title pt-8">
          About me
        </p>
        <v-divider class="mt-2 mb-8" />
      </div>
      <div
        class="about__card-wrapper"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-anchor="#about"
      >
        <v-card
          class="about__card float-left mt-1 mr-4 mb-2 transition"
          :class="!imgLoaded ? 'hidden' : ''"
          elevation="10"
          :height="$vuetify.breakpoint.xs ? '180px' : '198px'"
          :width="$vuetify.breakpoint.xs ? '150px' : '165px'"
        >
          <v-img :src="info.img" alt="" @load="imgLoaded = true" />
        </v-card>
        <v-progress-circular
          :class="imgLoaded ? 'hidden' : ''"
          class="about__img-loading transition"
          indeterminate
          color="grey"
          :style="$vuetify.breakpoint.xs ? 'top: 82px; left: 64px' : 'top: 91px; left: 71px'"
        />
        <div class="mb-13" v-html="info.description" />
      </div>
    </v-container>
    <div class="about__bg about__bg__top" />
    <div class="about__bg about__bg__bottom" />
    <div id="contact" class="anchor" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: null,
      imgLoaded: false
    }
  },
  created () {
    this.info = this.$store.state.aboutMe.data
  }
}
</script>

<style lang="scss">
.about {
  &, &__card {
    background-color: $color-light-grey !important;
  }
  &__card-wrapper {
    position: relative;
  }
  &__img-loading {
    position: absolute;
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
