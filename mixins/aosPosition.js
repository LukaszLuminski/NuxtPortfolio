export default {
  computed: {
    getOffset () {
      let offset
      if (this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl) {
        offset = '1200'
      } else if (this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm) {
        offset = '400'
      } else {
        offset = '120'
      }
      return offset
    }
  }
}
