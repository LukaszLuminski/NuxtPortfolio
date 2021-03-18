<template>
  <v-row
    class="projects__row pb-3"
  >
    <v-col
      v-for="(project, i) in arr"
      :key="i"
      class="col-12 col-sm-6"
    >
      <v-card
        elevation="10"
        :class="touchScreen ? 'disable-hover' : 'enable-hover'"
        class="projects__card"
        :style="!imgsReady ? 'opacity: 0' : 'opacity: 1'"
      >
        <figure class="hover-effect" @click="checkScreen(project)">
          <img :src="`/img/${project.img}`" @load="incrementLoadedImgs">
          <article class="d-flex align-center">
            <div class="card-content mb-12">
              <h3 class="mb-3">
                {{ project.title }}
              </h3>
              <p>{{ project.description }}</p>
            </div>
          </article>
        </figure>
        <div :class="!imgsReady ? 'd-none' : 'd-flex'" class="links align-center mt-auto py-3 px-7">
          <a v-if="project.live" :href="project.live" target="_blank" :class="touchScreen ? 'ml-auto mr-5' : 'mr-5'">Live</a><a v-if="project.code" :href="project.code" target="_blank" :class="touchScreen ? 'mx-auto' : ''">Code</a><a :class="touchScreen ? 'mr-auto' : 'd-none'" class="mx-5" @click="openDialog(project)">More info</a>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    touchScreen: {
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
    checkScreen (val) {
      if (!this.touchScreen) {
        this.openDialog(val)
      }
    },
    incrementLoadedImgs () {
      this.$emit('add-loaded-img')
    }
  }

}
</script>

<style>
</style>
