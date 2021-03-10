<template>
  <v-dialog
    :value="show"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    class="project-description"
  >
    <v-card class="project-description__card">
      <v-toolbar dark color="#706d70">
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn icon dark text @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: undefined,
      required: true
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.project-description {
    &__card {
        background: #f2f2f2;
    }
}
.v-card.project-description__card > *:last-child:not(.v-btn):not(.v-chip) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.v-card.project-description__card > *:first-child:not(.v-btn):not(.v-chip),
.v-card.project-description__card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
