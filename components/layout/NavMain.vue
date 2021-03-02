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
        </nuxt-link>
        <v-spacer />
        <NavMenuDesktop :items="navItems" />
        <v-app-bar-nav-icon
          color="white"
          x-large
          class="d-md-none pl-5"
          :class="drawerIsOpen ? 'd-none' : ''"
          @click="drawerIsOpen = true"
        />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawerIsOpen"
      class="theNavMainMobile"
      fixed
      temporary
      right
    >
      <div class="d-flex justify-end">
        <v-btn
          icon
          color="white"
          x-large
          class="theNavMainMobile__btn mr-5 mt-2"
          @click="drawerIsOpen = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
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
        this.bg = 'rgb(20, 20, 20)'
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
  z-index: 100;
  &__bar {
    transition: 0.4s;
  }
  &__btn {
   position: absolute;
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
    padding-top: 2px;
    background: rgb(30, 30, 30);
    &__list {
      list-style-type: none;
      padding-left: 0;
      padding-right: 0;
    }
    &__listItemLink {
      padding-left: 30px;
      padding-top: 18px;
      padding-bottom: 3px;
      color: $color-brown;
      li {
        text-decoration: none !important;
        font-size: 24px;
      }
    }
  }
}
</style>
