<template>
  <v-dialog
    :value="show"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    class="project-description"
  >
    <v-card v-if="project" class="project-description__card">
      <v-toolbar dark color="#706d70">
        <v-toolbar-title>
          {{ project.title }}
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn icon dark text @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-row class="mt-15 d-flex justify-center">
        <v-col class="my-auto" cols="5">
          <v-card elevation="3">
            <v-img :src="`/img/${project.img}`" />
          </v-card>
        </v-col><v-col class="my-auto" cols="5">
          <ListItem title="Front-end" :content="project.front_end" />
          <ListItem v-if="project.back_end" title="Back-end" :content="project.back_end" />
          <ListItem v-if="project.db" title="Database" :content="project.db" />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  components: { ListItem },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    project: {
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
.v-card.project-description__card
  > .v-card__progress
  + *:not(.v-btn):not(.v-chip) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.dimgray--text {
  color: #706d70;
}
</style>
