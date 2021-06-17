<template>
  <div id="skills" class="skills">
    <v-container class="skills__container">
      <div
        class="title-wrapper"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-anchor="#skills"
        :data-aos-offset="aosPosition"
        data-aos-anchor-placement="center-bottom"
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
        :data-aos-offset="aosPosition"
        data-aos-anchor-placement="center-bottom"
      >
        <v-col
          v-for="(skill, i) in skills"
          :key="i"
          class="col-4 col-sm-2 text-center"
        >
          <div class="skills__single-skill" @click="openDialog(skill)">
            <div
              class="skills__img mx-auto"
              :style="`background-image: url('${skill.img}')`"
            />
            <p class="skills__title pt-3">
              {{ skill.title }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div id="about" class="anchor" />
  </div>
</template>

<script>
export default {
  props: {
    aosPosition: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      skills: null
    }
  },
  created () {
    this.skills = this.$store.state.skills.items
  },
  methods: {
    openDialog (val) {
      setTimeout(() => {
        this.$root.$emit('open-skill-dialog', val)
      }, 300)
    }
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
  &__single-skill {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      .skills__title::before {
  visibility: visible;
  transform: scaleX(1);
}
.skills__img {
  transform: scale(1.2);
}
.skills__title {
  color: #9f9993;
}
.skills__title::before {
  background-color: #9f9993 !important;
}
    }
  }
  &__title,
  &__img {
    cursor: pointer;
  }
  &__title {
    transition: .5s;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -7px;
      left: 0;
      background-color: #000;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
  }
  &__img {
    transition: .5s;
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
