<template>
  <div class="about-wrap">
    <div class="about py-2 py-sm-5">
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
    </div>
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
.about-wrap {
  filter: drop-shadow(0 -0 0.3rem rgba(47, 47, 47, 0.4));
  margin-bottom: -58px;
  z-index: 10;
  position: relative;
}
.about {
  @media (min-width: 768px) {
    clip-path: polygon(0 0, 100% 8%, 100% 94%, 0% 100%);
  }
  clip-path: polygon(0 0, 100% 4%, 100% 96%, 0% 100%);
  background-color: $color-light-grey;
  min-height: 600px;
  &__container {
    @media (min-width: $breakpoint-md) {
      padding-right: 20%;
    }
  }
}
</style>
