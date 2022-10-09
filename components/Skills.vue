<template>
  <div id="skills" class="skills">
    <v-container class="skills__container">
      <div
        class="title-wrapper"
      >
        <h2 class="section-title pt-2 pt-md-5">
          My skills
        </h2>
        <v-divider class="mb-12" />
      </div>
      <v-row
        class="skills__row mb-8"
      >
        <v-col
          v-for="(skill, i) in skills"
          :key="i"
          class="col-4 col-sm-2 text-center"
        >
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <button
                :ref="skill.title"
                class="skills__single-skill pa-2"
                v-bind="attrs"
                v-on="on"
              >
                <div
                  class="skills__img mx-auto"
                  :style="`background-image: url('${skill.img}')`"
                />
                <p class="skills__title pt-3 mb-0">
                  {{ skill.title }}
                </p>
              </button>
            </template>
            <v-card class="skills__info" elevation="4">
              <v-toolbar
                dark
                dense
                flat
                color="#948c84"
                class="d-flex align-center"
              >
                <p class="title mb-0">
                  {{ skill.title }}
                </p>
              </v-toolbar>
              <div
                v-if="skill.description"
                class="pa-2 skills__description"
                v-html="skill.description"
              />
              <p v-else class="py-2 px-4">
                Work in progress. Description is coming soon...
              </p>
            </v-card>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
    <div id="about" class="anchor" />
  </div>
</template>

<script>
export default {
  props: {
    hasTouch: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      skills: null
      // hovering: false,
      // currentTitle: ''
    }
  },
  created () {
    this.skills = this.$store.state.skills.items
  }
}
</script>

<style lang="scss">
@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
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
    margin-top: -28px;
  }
  &__single-skill {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    &.open,
    &.has-touch-open {
      .skills__title {
        color: #9f9993;
      }
    }
    &.has-touch-open {
      .skills__img {
        transform: scale(1.2);
      }
      .skills__title::before {
        visibility: visible;
        transform: scaleX(1);
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
    transition: 0.5s;
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
    transition: 0.5s;
    @media (min-width: $breakpoint-sm) {
      height: 50px;
      width: 50px;
    }
    height: 47px;
    width: 47px;
    background-position: center;
    background-size: contain;
  }
  &__description {
    ul {
      list-style: none !important;
      li::before {
        content: "\2022";
        color: #948c84;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }
}
.v-tooltip__content {
  background: transparent !important;
  min-height: 50px !important;
  transform: none !important;
  opacity: 0 !important;
  &.menuable__content__active {
    opacity: 1 !important;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    // animation-delay: .3s;
    animation-duration: 0.2s;
  }
  margin: 0 !important;
  padding: 0 !important;
  width: 240px !important;
}
</style>
