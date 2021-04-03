<template>
  <v-dialog
    :value="show"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    class="project-description"
  >
    <v-card v-if="project" class="project-description__main-card rounded-0">
      <v-toolbar
        class="project-description__toolbar"
        dark
        color="#948c84"
      >
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
      <v-container>
        <v-card
          :style="imageLoaded ? 'opacity: 1;' : 'opacity: 0;'"
          class="project-description__content-card px-3 px-sm-6 mb-15"
          elevation="4"
        >
          <v-row ref="row" class="mt-10 mt-sm-15 d-flex justify-center pt-0 pt-sm-3">
            <v-card class="d-sm-none image-wrapper" elevation="1">
              <v-img :src="`/img/${project.img}`" @load="imageLoaded = true" />
            </v-card>
            <v-col class="col-6 d-none d-sm-block pb-0 pb-lg-3">
              <v-card elevation="3">
                <v-img
                  :src="`/img/${project.img}`"
                  @load="imageLoaded = true"
                />
              </v-card>
            </v-col>
            <v-col class="col-12 col-sm-6 mt-3 mt-sm-0 pb-0 pb-lg-3">
              <p class="headline dimgray--text mb-0">
                Tech stack
              </p>
              <v-divider class="mt-1 mb-5 mb-lg-11" />
              <ListItem title="Front-end" :content="project.front_end" />
              <ListItem
                title="Back-end"
                :content="project.back_end ? project.back_end : 'n/a'"
              />
              <ListItem
                title="Database"
                :content="project.db ? project.db : 'n/a'"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-4 pt-lg-0 pt-lg-3">
              <p class="headline dimgray--text mb-0">
                Description
              </p>
              <v-divider class="mt-1 mb-4" />
              <p
                class="project-description__long-text"
                v-html="project.long_description"
              />
            </v-col>
          </v-row>
          <v-divider class="mt-0 mb-5" />
          <v-row class="pb-2">
            <v-col class="pb-0">
              <v-btn
                class="white--text"
                color="#aea79e"
                block
                :disabled="project.live ? false : true"
                large
                :href="project.live"
                target="_blank"
              >
                Live version
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                class="white--text"
                color="#948c84"
                block
                :disabled="project.code ? false : true"
                large
                :href="project.code"
                target="_blank"
              >
                Github Code
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
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
  data () {
    return {
      imageLoaded: false
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
.v-dialog {
  border-radius: 0 !important;
}
.project-description__toolbar.v-sheet.theme--dark.v-toolbar {
  position: sticky !important;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
}
.project-description {
  &__main-card {
    background: #f2f2f2 !important;
  }
  &__content-card {
    background: white !important;
    transition: 0.4s;
  }
  &__long-text {
    line-height: 1.7;
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
.v-sheet.image-wrapper.v-card {
  border-radius: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
