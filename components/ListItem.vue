<template>
  <div class="mb-0 mb-lg-4">
    <v-row>
      <v-col class="pt-1 pt-lg-3">
        <p class="dimgray--text d-flex mb-0 mb-md-1">
          {{ title }}:
        </p>
        {{ content }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
  .dimgray--text {
    font-size: 19px;
  }

</style>
