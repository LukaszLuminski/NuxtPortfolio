<template>
  <v-dialog v-if="skill" :key="key" :value="show" max-width="500px" @input="closeDialog">
    <v-card>
      <v-toolbar dark color="#7b736b">
        <v-toolbar-title>
          {{ skill.title }}
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn icon dark text @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div v-if="skill.description" class="pa-5" v-html="skill.description" />
      <div v-else class="pa-5 work-in-progress">
        <p class="mb-0">
          Work in progress...
        </p>
        <p class="mb-0">
          Description is coming soon.
        </p>
      </div>
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
    skill: {
      type: undefined,
      required: true
    }
  },
  data () {
    return {
      key: 0
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close')
      setTimeout(() => {
        this.key++
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.work-in-progress {
  p {
    color: grey;
  }
}
</style>
