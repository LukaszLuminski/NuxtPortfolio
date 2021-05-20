<template>
  <div class="about pt-2 pt-sm-9 pb-12">
    <v-container class="about__container pb-5">
      <div
        class="title-wrapper"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-anchor="#about"
      >
        <p class="section-title pt-8">
          About me
        </p>
        <v-divider class="mt-2 mb-8" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-anchor="#about"
      >
        <v-card
          class="float-left mt-1 mr-4 mb-2"
          elevation="10"
          :width="$vuetify.breakpoint.xs ? '150px' : '165px'"
        >
          <v-img :src="info.img" alt="" />
        </v-card>
        <div class="mb-13" v-html="info.description" />
      </div>
    </v-container>
    <div class="about__bg about__bg__top" />
    <div class="about__bg about__bg__bottom" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: null
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
  background-color: $color-light-grey;
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
