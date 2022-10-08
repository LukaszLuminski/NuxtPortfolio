<template>
  <v-row class="projects__row pb-3">
    <v-col
      v-for="(project, i) in arr"
      :key="i"
      class="col-12 col-sm-6"
    >
      <v-card
        elevation="10"
        :class="isIos ? 'disable-hover' : 'enable-hover'"
        class="projects__card"
        :style="!imgsReady ? 'opacity: 0' : 'opacity: 1'"
      >
        <figure
          :ref="`hover-effect-${ i }`"
          class="hover-effect"
        >
          <div
            class="background-img"
            :style="{ backgroundImage: `url('/img/${ project.img }')` }"
          >
            <img
              :src="`/img/${project.img}`"
              class="hidden-img"
              @load="incrementLoadedImgs"
            >
          </div>
          <article class="d-flex align-center">
            <component
              :is="hasTouch ? 'div' : 'button'"
              class="card-content
              mb-12"
              @click="!hasTouch && openDialog(project)"
              @focusin="showContent(i)"
              @focusout="hideContent(i)"
            >
              <h3 class="mb-3">
                {{ project.title }}
              </h3>
              <p>{{ project.description }}</p>
            </component>
          </article>
        </figure>
        <div
          :class="!imgsReady ? 'd-none' : 'd-flex'"
          class="links align-center mt-auto py-3 px-7"
          :style="isIos
            ? 'border-bottom-left-radius: 5px; border-bottom-right-radius: 5px'
            : ''"
        >
          <a
            v-if="project.live"
            :href="project.live"
            target="_blank"
          >
            Live
          </a>
          <a
            v-if="project.code"
            :href="project.code"
            target="_blank"
          >Code
          </a>
          <a
            v-if="hasTouch"
            @click="openDialog(project)"
          >
            More info
          </a>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    isIos: {
      type: Boolean,
      required: true
    },

    hasTouch: {
      type: Boolean,
      required: true
    },

    arr: {
      type: Array,
      required: true
    },

    imgsReady: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    openDialog (val) {
      this.$root.$emit('open-dialog', val)
    },

    incrementLoadedImgs () {
      this.$emit('add-loaded-img')
    },

    showContent (i) {
      this.$refs[`hover-effect-${i}`][0].classList.add('hovered')
    },

    hideContent (i) {
      this.$refs[`hover-effect-${i}`][0].classList.remove('hovered')
    }
  }
}
</script>
