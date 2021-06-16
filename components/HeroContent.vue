<template>
  <v-container
    :class="
      $vuetify.breakpoint.xs ? 'mt-15 mobile-width' : 'mt-9 desktop-width'
    "
    class="text-center heroSection__container white--text"
  >
    <h1
      ref="heroSection__heading"
      :class="$vuetify.breakpoint.xs ? 'display-1' : 'display-2'"
    >
      {{ heading }}
    </h1>
    <p
      :class="$vuetify.breakpoint.xs ? 'font-size-mobile' : 'font-size-desktop'"
      class="mt-2 heroSection__subheading mx-auto pl-1"
    >
      {{ subheading
      }}<span
        :class="cursor ? '' : 'hidden'"
        class="cursor"
      ><input type="text" class="rq-form-element"><i /></span>
    </p>
    <div class="heroSection__flip" :class="readyToAnimate ? 'flip-up' : ''">
      <!-- <div
        data-aos="flip-up"
      > -->
      <v-btn
        x-large
        icon
        color="white"
        class="mx-8 my-10"
        href="https://github.com/LukaszLuminski"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        x-large
        icon
        color="white"
        class="mx-8 my-10"
        href="https://www.linkedin.com/in/lukasz-luminski"
        target="_blank"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </div>
    <div v-if="revealCta" class="heroSection__cta-btns mx-auto animated animatedFadeInUp fadeInUp">
      <!-- <div
        class="heroSection__cta-btns mx-auto"
        data-aos="fade-up"
        data-aos-delay="800"
      > -->
      <v-btn
        block
        x-large
        color="rgba(255, 255, 255, .7)"
        class="heroSection__cta-btn mt-9 black--text"
        @click="goTo('projects')"
      >
        See my projects
      </v-btn>
      <v-btn
        block
        x-large
        color="rgba(205, 205, 205, .6)"
        class="heroSection__cta-btn mt-5 black--text"
        @click="goTo('about')"
      >
        Read more about me
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: true
    },
    cursor: {
      type: Boolean,
      required: true
    },
    animateSocials: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      readyToAnimate: false,
      revealCta: false
    }
  },
  watch: {
    animateSocials (val) {
      if (val) {
        setTimeout(() => {
          this.readyToAnimate = true
        }, 500)
        setTimeout(() => {
          this.revealCta = true
        }, 1000)
      }
    }
  },
  methods: {
    goTo (link) {
      const element = document.getElementById(link)
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
.heroSection {
  &__first {
    height: 100vh;
  }
  &__container {
    vertical-align: top;
    height: 430px;
    min-height: 430px;
  }
  &__subheading {
    position: relative;
    min-height: 32px;
  }
  .v-btn--icon.v-size--x-large .v-icon,
  .v-btn--fab.v-size--x-large .v-icon {
    font-size: 70px;
  }
  &__cta-btns {
    max-width: 382px;
  }
  &__flip {
    transition: transform 0.4s;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
}
.cursor {
  position: relative;
}
.cursor i {
  position: absolute;
  width: 2px;
  height: 80%;
  background-color: white;
  left: 2px;
  top: 10%;
  animation-name: blink;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  opacity: 1;
}

.cursor input:focus + i {
  display: none;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.animated {
  animation-duration: .4s;
  animation-fill-mode: both;
  -webkit-animation-duration: .4s;
  -webkit-animation-fill-mode: both;
}

.animatedFadeInUp {
  opacity: 0;
}

.fadeInUp {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}
.rq-form-element {
  width: 1px;
}
.hidden {
  opacity: 0;
}
.font-size-desktop {
  font-size: 24.8px;
}
.font-size-mobile {
  font-size: 17.7px;
}
.desktop-width {
  max-width: 400px;
}
.mobile-width {
  max-width: 295px;
}
.flip-up {
  transform: rotateX(0);
}
</style>
