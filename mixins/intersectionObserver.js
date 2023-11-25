import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('activeSection', [
      'activeSectionName'
    ])
  },

  methods: {
    ...mapMutations('activeSection', [
      'setCurrentlyActiveSection'
    ]),
    onIntersect (entries, observer, isIntersecting) {
      if (!isIntersecting) {
        return
      }

      this.setCurrentlyActiveSection(this.sectionName)
    }
  }
}
