<template>
  <nav class="theNavMain">
    <v-app-bar
      class="theNavMain__bar"
      :height="bg === 'transparent' ? '70px' : '55px'"
      style="transition: 0.5s"
      fixed
      flat
      :class="bg === 'transparent' ? '' : 'elevation-4'"
      :color="bg"
    >
      <v-container class="d-flex pr-0">
        <nuxt-link class="theNavMain__brand d-flex align-center" to="/">
          <p
            :class="bg === 'transparent' ? 'white--text' : 'black--text'"
            class="headline mb-0"
          >
            lukasz<span :class="bg === 'transparent' ? 'light-grey' : 'dark-grey'">Luminski</span>
          </p>
        </nuxt-link>
        <v-spacer />
        <NavMenuDesktop :bg="bg" :items="navItems" />
        <v-app-bar-nav-icon
          :color="bg === 'transparent' ? 'white' : 'black'"
          x-large
          class="d-md-none"
          :class="drawerIsOpen ? 'd-none' : ''"
          @click="drawerIsOpen = true"
        />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawerIsOpen"
      class="theNavMainMobile"
      :class="bg === 'transparent' ? 'blue-grey darken-4' : 'white'"
      fixed
      temporary
      right
    >
      <div class="d-flex justify-end">
        <v-btn
          icon
          :color="bg === 'transparent' ? 'white' : 'black'"
          x-large
          class="theNavMainMobile__btn mr-3 mt-2"
          @click="drawerIsOpen = false"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
      <NavMenuMobile :bg="bg" :items="navItems" @close="drawerIsOpen = false" />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import menu from '~/utils/menu'
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
  },
  mounted () {
    window.onscroll = () => {
      this.changeColor()
    }
  },
  methods: {
    changeColor () {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'white'
      } else {
        this.bg = 'transparent'
      }
    }
  }
}
</script>

<style lang="scss">
.theNavMain {
  z-index: 100;
  .light-grey {
    color: #cccccc;
  }.dark-grey {
    color: grey;
  }
  .headline, &__bar {
    transition: .5s;
  }
  &__bar {
    .v-toolbar__content {
      transition: .4s;
      margin-left: auto;
      margin-right: auto;
      max-width: 1185px;
      // padding: 5px 0;
      @media (min-width: $breakpoint-lg) {
        padding-right: 16px;
      }
      padding-right: 5px;
    }
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
  ul {
    .nuxt-link--active {
      li {
        color: $color-orange !important;
      }
    }
    a {
      text-decoration: none;
    }
    li {
      text-transform: uppercase;
      // font-weight: 600;
      display: inline;
      margin-right: 20px;
      -webkit-transition: color 200ms ease-out;
      -moz-transition: color 200ms ease-out;
      -o-transition: color 200ms ease-out;
      transition: color 200ms ease-out;
      &:hover {
        color: $color-orange !important;
        cursor: pointer;
      }
    }
  }
  .theNavMainMobile {
    padding-top: 2px;
    &__list {
      list-style-type: none;
      padding-left: 0;
      padding-right: 0;
    }
    // &__listItem.nuxt-link-exact-active.nuxt-link-active {
    //   .theNavMainMobile__listItemLink {
    //     background: grey;
    //   }
    // }
    &__listItemLink {
      padding-left: 30px;
      padding-top: 18px;
      padding-bottom: 3px;
      color: $color-orange;
      li {
        text-decoration: none !important;
        font-size: 24px;
      }
    }
  }
  .v-list--nav .v-list-item:not(:last-child):not(:only-child),
  .v-list--rounded .v-list-item:not(:last-child):not(:only-child) {
    margin-bottom: 0;
  }
}
.theme--dark.theNavMain.v-list-item--active:hover::before,
.theme--dark.v-list-item--active::before {
  opacity: 0.4;
  border-radius: 0;
}
</style>
