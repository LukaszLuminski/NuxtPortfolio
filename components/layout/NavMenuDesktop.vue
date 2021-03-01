<template>
  <ul class="d-none d-md-flex align-center theMainMenuDesktop">
    <nuxt-link v-for="(n, i) in items" :key="i" :to="'/' + n.slug">
      <li>
        {{ n.title }}
      </li>
      <!-- <li v-html="n.title" /> -->
      <!-- <li v-if="!item.submenu.length" v-html="item.title" /> -->
      <!-- <v-menu
        v-else
        class="theMainMenuDesktop__dropdownMenu"
        transition="slide-y-transition"
        open-on-hover
        offset-y
      >
        <template #activator="{ on, attrs }">
          <li color="primary" dark v-bind="attrs" v-on="on">
            {{ item.title }} &#11167;
          </li>
        </template>

        <v-list>
          <nuxt-link
            v-for="subitem in item.submenu"
            :key="subitem.id"
            :to="'/' + subitem.slug"
          >
            <v-list-item class="theMainMenuDesktop__dropdownMenuItem">
              <v-list-item-title v-html="subitem.title" />
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-menu> -->
    </nuxt-link>
    <!-- <nuxt-link v-if="isLoggedIn" to="/account">
      <li>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn color="primary" fab x-small v-bind="attrs" v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <span>My Account</span>
        </v-tooltip>
      </li>
    </nuxt-link> -->
    <!-- <nuxt-link v-else to="/login">
      <li>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn color="primary" fab x-small v-bind="attrs" v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <span>Login</span>
        </v-tooltip>
      </li>
    </nuxt-link> -->
    <!-- <nuxt-link to="/book">
      <li>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn color="secondary" fab x-small v-bind="attrs" v-on="on">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Book Now</span>
        </v-tooltip>
      </li>
    </nuxt-link> -->
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
  // computed: {
  //   isLoggedIn () {
  //     return this.$auth.loggedIn
  //   }
  // }
}
</script>

<style lang="scss" scoped>
// .theMainMenuDesktop {
//   // &__dropdownMenu {
//   //   color: red;
//   // }
//   // &__dropdownMenuItem {
//   //   .v-list-item__title {
//   //     color: $color-blue !important;
//   //     text-transform: uppercase !important;
//   //     font-weight: 600 !important;
//   //     transition: color 200ms ease-out !important;
//   //     &:hover {
//   //       color: $color-orange !important;
//   //     }
//   //   }
//   // }
// }
a {
  text-decoration: none !important;
}
</style>
