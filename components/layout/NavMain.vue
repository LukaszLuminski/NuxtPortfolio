<template>
  <nav class="theNavMain">
    <v-app-bar
      class="theNavMain__bar"
      :height="bg === 'transparent' ? '90px' : '70px'"
      style="transition: 0.5s"
      fixed
      flat
      :class="bg === 'transparent' ? '' : 'elevation-4'"
      :color="bg"
    >
      <v-container class="d-flex pr-0 pl-0 pl-md-2">
        <button
          :class="{
            transition: showLogo
          }"
          class="theNavMain__brand d-flex align-center"
          @click="goToTop"
        >
          <p
            :class="bg === 'transparent' ? 'white--text' : 'black--text'"
            class="headline mb-0"
          >
            Lukasz<span
              :class="bg === 'transparent' ? 'light-grey' : 'dark-grey'"
            >Luminski</span>
          </p>
        </button>
        <v-spacer />
        <NavMenuDesktop :bg="bg" :items="navItems" />
        <v-app-bar-nav-icon
          :color="bg === 'transparent' ? 'white' : 'black'"
          x-large
          class="d-md-none"
          aria-label="Navigation toggle button"
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
      <div ref="mobileMenu">
        <div class="d-flex justify-end close-btn-wrapper">
          <v-btn
            icon
            :color="bg === 'transparent' ? 'white' : 'black'"
            x-large
            class="theNavMainMobile__btn mr-3 mt-2"
            @click="drawerIsOpen = false"
          >
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </div>
        <NavMenuMobile
          :bg="bg"
          :items="navItems"
          @close="drawerIsOpen = false"
        />
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
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
      bg: 'transparent',
      navItems: null,
      showLogo: false
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
  created () {
    this.navItems = this.$store.state.menu.items
  },
  mounted () {
    window.onscroll = () => {
      this.changeColor()
    }

    const mobileMenu = this.$refs.mobileMenu
    const focusableElements = ['button', 'button', 'button', 'button', 'button']

    const firstFocusableElement = mobileMenu.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
    const focusableContent = mobileMenu.querySelectorAll(focusableElements)
    const lastFocusableElement = focusableContent[focusableContent.length - 1]

    document.addEventListener('keydown', (e) => {
      const isTabPressed = e.key === 'Tab' || e.code === 'Tab'

      if (!isTabPressed) {
        return
      }

      if (e.shiftKey) { // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus() // add focus for the last focusable element
          e.preventDefault()
        }
      } else if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus() // add focus for the first focusable element
        e.preventDefault()
      }
    })

    firstFocusableElement.focus()
  },
  methods: {
    changeColor () {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        this.bg = 'white'
      } else {
        this.bg = 'transparent'
      }
    },
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

<style lang="scss">
.theNavMain {
  z-index: 100;
  .light-grey {
    color: #cccccc;
  }
  .dark-grey {
    color: grey;
  }
  .headline {
    @media (min-width: $breakpoint-lg) {
        margin-left: -13px;
      }
  }
  .headline,
   &__bar {
     transition: 0.5s;
   }

  &__bar {
    max-width: 100vw;
    transition: 0.5s;
    .v-toolbar__content {
      transition: 0.4s;
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
    &:hover {
      cursor: pointer;
    }
  }
  ul {
    .nuxt-link--active {
      li {
        color: $color-brown !important;
      }
    }
    a {
      text-decoration: none;
    }
    li {
      text-transform: uppercase;
      // font-weight: 600;
      display: inline;
      // margin-right: 20px;
      -webkit-transition: color 200ms ease-out;
      -moz-transition: color 200ms ease-out;
      -o-transition: color 200ms ease-out;
      transition: color 200ms ease-out;
      &:hover {
        color: $color-brown !important;
        cursor: pointer;
      }
    }
  }
  .theNavMainMobile {
    width: unset !important;
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
      color: $color-brown;
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
.theme--dark.v-list-item--active::before,
.theme--light.v-list-item--active:hover::before,
.theme--light.v-list-item--active::before {
  opacity: 0;
  border-radius: 0;
}

.close-btn-wrapper {
  margin-bottom: 8px;
}
</style>
