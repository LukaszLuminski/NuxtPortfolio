<template>
  <ul class="d-none d-md-flex align-center theMainMenuDesktop">
    <a v-for="(n, i) in items" :key="i" @click="goTo(n.slug)">
      <li :class="bg === 'transparent' ? 'white--text' : 'black--text'">
        {{ n.title }}
      </li>
    </a>
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
  },
  methods: {
    goTo (link) {
      const element = document.getElementById(link.replace('#', ''))
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
}
</style>
