<template>
  <div>
    <v-row>
      <v-col class="dimgray--text d-flex">
        {{ title }}</p>
      </v-col>
    </v-row>
    <v-divider class="mt-1 mb-2" />
    <v-row>
      <v-col>
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
