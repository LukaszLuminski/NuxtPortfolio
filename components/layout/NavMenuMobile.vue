<template>
  <v-list nav class="theNavMainMobile__list">
    <v-list-item-group>
      <nuxt-link
        v-for="(n, i) in items"
        :key="i"
        :to="'/' + n.slug"
        class="theNavMainMobile__listItem"
      >
        <v-list-item class="theNavMainMobile__listItemLink">
          <v-list-item-title>
            <li>{{ n.title }}</li>
            <!-- <li v-html="item.title" /> -->
          </v-list-item-title>
        </v-list-item>
      </nuxt-link>
      <!-- <v-btn v-if="isLoggedIn" color="primary" to="/account" x-large link>
        Account
      </v-btn>
      <v-btn v-else color="primary" to="/login" x-large link>
        Login
      </v-btn>
      <v-btn color="secondary" class="mt-5" to="/book" x-large link>
        Book Now
      </v-btn> -->
    </v-list-item-group>
  </v-list>
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
a {
  text-decoration: none;
}
</style>
