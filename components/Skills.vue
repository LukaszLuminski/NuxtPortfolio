<template>
  <div class="skills">
    <v-container class="skills__container">
      <div
        class="title-wrapper"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-anchor="#skills"
      >
        <p class="section-title pt-8">
          My skills
        </p>
        <v-divider class="mb-12" />
      </div>
      <v-row
        class="skills__row mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-anchor="#skills"
      >
        <v-col
          v-for="(skill, i) in skills"
          :key="i"
          class="col-4 col-sm-2 text-center"
        >
          <div class="skills__img mx-auto" :style="`background-image: url('${skill.img}')`" />
          <p class="skills__title mt-3">
            {{ skill.title }}
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div id="about" class="anchor" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: null
    }
  },
  created () {
    this.skills = this.$store.state.skills.items
  }
}
</script>

<style lang="scss">
  .skills {
    &__container {
      @media (min-width: $breakpoint-md) {
        padding-left: 20%;
      }
      @media (min-width: $breakpoint-sm) {
        margin-bottom: 0;
      }
      margin-bottom: -70px;
    }
    &__row {
      @media (min-width: $breakpoint-sm) {
       margin-right: -29px;
        margin-left: -29px;
      }
      margin-right: 0;
        margin-left: 0;
    }
    &__title {
      font-size: 17px;
    }
    &__img {
      @media (min-width: $breakpoint-sm) {
        height: 50px;
      width: 50px;
      }
      height: 47px;
      width: 47px;
      background-position: center;
      background-size: contain;
    }
  }
</style>
