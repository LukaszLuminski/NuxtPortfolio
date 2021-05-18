<template>
  <div class="text-center">
    <v-dialog
      :value="dialog"
      :error="error"
      width="500"
      @input="closeDialog"
    >
      <v-card>
        <v-card-title v-if="!error" class="headline green white--text pb-3">
          Thank you
        </v-card-title>

        <v-card-title v-else class="headline red lighten-1 white--text pb-3">
          An error has occured
        </v-card-title>

        <v-card-text class="pt-5">
          {{ message }}
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="closeDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    error: {
      type: Boolean,
      required: true
    },
    message: {
      default: null,
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

<style>

</style>
