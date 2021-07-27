<template>
  <v-footer dark class="theFooter text-center">
    <v-container>
      <v-row
        :class="$vuetify.breakpoint.xs ? 'flex-column-reverse' : ''"
        class="theFooter__copyright"
      >
        <v-col
          :class="
            $vuetify.breakpoint.xs ? 'col-12 justify-center pa-0' : 'col-9'
          "
          class="theFooter__column d-flex align-center"
        >
          <p
            :class="
              $vuetify.breakpoint.xs ? 'mb-4 text-center' : 'mb-0 text-left'
            "
          >
            &#169; {{ new Date().getFullYear() }}. All rights reserved.
            <br class="d-block d-sm-none">Made with
            <span class="theFooter__copyright__icon">&#9829;</span> by Lukasz
            Luminski<span class="d-none d-md-inline mb-1">. Background icons downloaded from
              <a href="http://getdrawings.com/biography-icon">Biography Icon</a>.
            </span><span v-if="bulbIconCredits"><span>.<br>B</span>ulb icon downloaded from
              <a href="https://www.flaticon.com/">Flaticon</a>.</span>
          </p>
        </v-col>
        <v-col
          :class="
            $vuetify.breakpoint.xs
              ? 'col-12 justify-center pa-0'
              : 'col-3 justify-end'
          "
          class="d-flex"
        >
          <div class="theFooter__back-to-top mb-1">
            <v-btn
              class="theFooter__back-to-top__btn mt-1"
              text
              x-large
              @click="goToTop"
            >
              <v-icon large class="theFooter__back-to-top__icon mr-1" dark>
                mdi-arrow-up-bold-circle
              </v-icon>Back to top
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      bulbIconCredits: true
    }
  },
  created () {
    this.$nuxt.$on('hide-icon-credits', () => {
      this.bulbIconCredits = false
    })
  },
  methods: {
    goToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.theFooter {
  p,
  button {
    color: lightgray;
  }
  a {
    color: white !important;
  }
  margin-top: -3px;
  &__copyright {
    font-size: 13px;
    a {
      transition: 0.2s;
      &:hover {
        color: grey;
      }
      text-decoration: none !important;
    }
    &__icon {
      font-size: 14px;
      color: red;
    }
  }
  &__column {
    position: relative;
  }
  &__back-to-top {
    &__btn {
      text-transform: none !important;
    }
  }
}
</style>
