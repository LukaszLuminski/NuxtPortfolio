<template>
  <ul class="d-none d-md-flex align-center theMainMenuDesktop">
    <nuxt-link v-for="(n, i) in items" :key="i" :to="'/' + n.slug">
      <li :class="bg === 'transparent' ? 'white--text' : 'black--text'">
        {{ n.title }}
      </li>
    </nuxt-link>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    bg: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
}
</style>
