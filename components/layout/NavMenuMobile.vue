<template>
  <v-list nav class="theNavMainMobile__list">
    <v-list-item-group>
      <v-divider :class="bg === 'transparent' ? 'blue-grey darken-2' : 'grey'" />
      <a
        v-for="(n, i) in items"
        :key="i"
        class="theNavMainMobile__listItem"
        @click="goTo(n.slug)"
      >
        <v-list-item class="theNavMainMobile__listItemLink">
          <v-list-item-title>
            <li :class="bg === 'transparent' ? 'white--text' : 'black--text'" class="pb-3">
              {{ n.title }}
            </li>
          </v-list-item-title>
        </v-list-item>
        <v-divider :class="bg === 'transparent' ? 'blue-grey darken-2' : 'grey'" />
      </a>
    </v-list-item-group>
  </v-list>
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
    methods: {
      goTo (link) {
        this.closeDrawer()
        const element = document.getElementById(link.replace('#', ''))
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    closeDrawer () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
