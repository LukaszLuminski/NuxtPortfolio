<template>
  <div class="about">
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
      <v-card class="float-left mt-1 mr-4 mb-2" elevation="10" width="165px">
        <v-img :src="info.img" alt="" />
      </v-card>
      <div class="mb-15" v-html="info.description" />
    </v-container>
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
