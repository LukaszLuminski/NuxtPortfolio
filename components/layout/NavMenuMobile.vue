<template>
  <div>
    <ul nav class="theNavMainMobile__list">
      <li>
        <v-btn
          v-for="(n, i) in items"
          :key="i"
          class="theNavMainMobile__listItem "
          :class="{
            'white--text': bg === 'transparent',
            'black--text': bg !== 'transparent'
          }"
          elevation="0"
          block
          x-large
          tile
          @click="goTo(n.slug)"
        >
          {{ n.title }}
        </v-btn>
      </li>
    </ul>
  </div>
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
      this.closeDrawer()
      const element = document.getElementById(link.replace('#', ''))
      element.scrollIntoView({ behavior: 'smooth' })
    },

    closeDrawer () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-btn {
    display: block;
    min-width: 100%;
    font-size: 1.2rem;
    border-bottom: 1px solid #455a64;
    background-color: transparent !important;
    padding-right: 80px !important;

    &:first-of-type {
      border-top: 1px solid #455a64;
    }

    &.active {
      background-color: #c7c1bd !important;
    }
  }

  ::v-deep .v-btn__content {
    justify-content: flex-start !important;
  }
</style>
