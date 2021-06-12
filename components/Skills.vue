<template>
  <div id="skills" class="skills">
    <v-container class="skills__container">
      <div
        class="title-wrapper"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-anchor="#skills"
        data-aos-offset="800"
      >
        <p class="section-title pt-2 pt-md-5">
          My skills
        </p>
        <v-divider class="mb-12" />
      </div>
      <v-row
        class="skills__row mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-anchor="#skills"
        data-aos-offset="800"
      >
        <v-col
          v-for="(skill, i) in skills"
          :key="i"
          class="col-4 col-sm-2 text-center"
        >
          <div
            class="skills__img mx-auto"
            :style="`background-image: url('${skill.img}')`"
          />
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
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
    background: url("/img/skills.png");
    @media (min-width: $breakpoint-lg) {
      background-size: 22%;
      background-position: 8% 45%;
    }
    background-size: 37%;
    background-position: -29% 45%;
    @media (min-width: $breakpoint-md) {
      display: initial;
    }
    display: none;
    background-repeat: no-repeat;
  }
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
