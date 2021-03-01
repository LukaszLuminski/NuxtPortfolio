<template>
  <nav class="theNavMain">
    <v-app-bar
      class="theNavMain__bar"
      height="70px"
      fixed
      flat
      :color="bg"
    >
      <v-container class="d-flex">
        <nuxt-link class="theNavMain__brand d-flex align-center" to="/">
          <p class="headline white--text mb-0">
            Lukasz Luminski
          </p>
          <!-- <img
          :src="require('~/assets/img/logo.png')"
          :width="mobileScreen ? '80px' : '150px'"
          :class="mobileScreen ? 'd-block' : 'd-md-block mt-15 pt-7'"
        > -->
        </nuxt-link>
        <v-spacer />
        <NavMenuDesktop :items="navItems" />
        <v-app-bar-nav-icon
          color="white"
          x-large
          class="d-md-none"
          @click="drawerIsOpen = true"
        />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawerIsOpen"
      class="theNavMainMobile"
      fixed
      temporary
    >
      <NavMenuMobile :items="navItems" />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import menu from '~/utils/menu'
// // import { mapGetters, mapActions } from 'vuex'
import NavMenuDesktop from '~/components/layout/NavMenuDesktop'
import NavMenuMobile from '~/components/layout/NavMenuMobile'

export default {
  components: {
    NavMenuDesktop,
    NavMenuMobile
  },
  data: () => {
    return {
      drawerIsOpen: false,
      navItems: menu,
      bg: 'transparent'
    }
  },
  computed: {
    mobileScreen () {
      let mobileWidth
      this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
        ? (mobileWidth = true)
        : (mobileWidth = false)
      return mobileWidth
    }
    // ...mapGetters({
    //   mainMenu: 'menus/getMainMenu'
    // }),
    // backgroundUrl () {
    //   return require('~/assets/img/mainNavBg.png')
    // }
  },
  mounted () {
    window.onscroll = () => {
      this.changeColor()
    }
  },
  methods: {
    changeColor () {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        this.bg = 'black'
      } else {
        this.bg = 'transparent'
      }
    }
  }
  // ********************************************************************************************************
  // async mounted () {
  //   // Fetch main menu - workaround for lack of nuxtServerInit when page refreshes on auth/protected page
  //   await this.fetchMainMenu()
  // }
  // ********************************************************************************************************
  // methods: {
  //   ...mapActions({
  //     fetchMainMenu: 'menus/fetchMainMenu'
  //   })
  // }
}
</script>

<style lang="scss">
.theNavMain {
  &__bar {
    transition: 0.4s;
  }
  &__brand {
    text-decoration: none;
  }
  &__boatImg {
    animation: swing 2.5s infinite ease-in-out;
  }
  .v-toolbar__content {
    @media (min-width: $breakpoint-lg) {
      padding: 0px 90px;
    }
  }
  ul {
    .nuxt-link-exact-active {
      li {
        color: $color-orange;
      }
    }
    a {
      text-decoration: none;
    }
    li {
      color: white;
      text-transform: uppercase;
      // font-weight: 600;
      display: inline;
      margin-right: 20px;
      -webkit-transition: color 200ms ease-out;
      -moz-transition: color 200ms ease-out;
      -o-transition: color 200ms ease-out;
      transition: color 200ms ease-out;
      &:hover {
        color: $color-orange;
        cursor: pointer;
      }
    }
  }
  .theNavMainMobile {
    // background-image: url('~@/assets/img/mobileNavBg.png');
    // background-position: left;
    // background-size: cover;
    // background-repeat: no-repeat;
    &__list {
      list-style-type: none;
    }
    &__listItemLink {
      margin-top: 15px;
      margin-bottom: 15px;
      color: $color-brown;
      li {
        text-decoration: none !important;
        font-size: 24px;
      }
    }
    .v-navigation-drawer__content {
      background: transparent;
    }
  }
}
// @keyframes swing {
//   0% {
//     transform: rotate(-5deg);
//   }
//   50% {
//     transform: rotate(10deg);
//   }
//   100% {
//     transform: rotate(-5deg);
//   }
// }
</style>
