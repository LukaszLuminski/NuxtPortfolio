<template>
  <ul class="d-none d-md-flex align-center theMainMenuDesktop">
    <li v-for="(n, i) in items" :key="i" @click="goTo(n.slug)">
      <button :class="bg === 'transparent' ? 'white--text' : 'black--text'">
        {{ n.title }}
      </button>
    </li>
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
button {
  outline-offset: 3px;
}
.theMainMenuDesktop {
  @media (min-width: $breakpoint-lg) {
    margin-right: -21px;
  }
}
</style>
