<template>
  <div class="heroSection">
    <div
      class="heroSection__first jarallax d-flex align-center justify-center"
    >
      <img src="./../assets/img/hero-bg.jpg" class="jarallax-img">
      <v-container
        :class="
          $vuetify.breakpoint.xs ? 'mt-15 mobile-width' : 'desktop-width'
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
          :class="
            $vuetify.breakpoint.xs ? 'font-size-mobile' : 'font-size-desktop'
          "
          class="mt-2 heroSection__subheading mx-auto pl-1"
        >
          {{ subheading
          }}<span
            :class="cursor ? '' : 'hidden'"
            class="cursor"
          ><input type="text" class="rq-form-element"><i /></span>
        </p>
        <v-btn
          v-if="animateSocials"
          data-aos="flip-up"
          data-aos-duration="4000"
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
          v-if="animateSocials"
          data-aos="flip-up"
          data-aos-duration="4000"
          x-large
          icon
          color="white"
          class="mx-8 my-10"
          href="https://www.linkedin.com/in/lukasz-luminski"
          target="_blank"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <div>
          <v-btn
            v-if="animateSocials"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="4000"
            block
            x-large
            color="rgba(255, 255, 255, .7)"
            class="heroSection__cta-btn mt-9 black--text"
          >
            See my projects
          </v-btn>
          <v-btn
            v-if="animateSocials"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="4000"
            block
            x-large
            color="rgba(205, 205, 205, .6)"
            class="heroSection__cta-btn mt-5 black--text"
          >
            Read more about me
          </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heading: '',
      subheading: '',
      cursor: false,
      animateSocials: false,
      textColor: null,
      i: 0,
      j: 0
    }
  },
  mounted () {
    this.typeWriter()
  },
  methods: {
    typeWriter () {
      const heading = "Hello, I'm Lukasz"
      const subheading = 'Vue.js Web & Mobile Developer'
      if (this.i < heading.length) {
        this.heading += heading.charAt(this.i)
        this.i++
      } else if (this.j < subheading.length) {
        setTimeout(() => {
          this.subheading += subheading.charAt(this.j)
          this.j++
        }, 400)
      } else if (this.j === subheading.length) {
        setTimeout(() => {
          this.cursor = true
        }, 200)
        setTimeout(() => {
          this.cursor = false
          this.animateSocials = true
        }, 500)
      }
      setTimeout(this.typeWriter, 60)
    },
    changeColor () {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        this.textColor = 'black'
      } else {
        this.textColor = 'white'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.heroSection {
  &__first {
    height: 100vh;
  }
  &__container {
    vertical-align: top;
    min-height: 428px;
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
.rq-form-element {
  width: 1px;
}
.hidden {
  opacity: 0;
}
.font-size-desktop {
  font-size: 25.5px;
}
.font-size-mobile {
  font-size: 18.5px;
}
.desktop-width {
  max-width: 382px;
}
.mobile-width {
  max-width: 284px;
}
</style>
