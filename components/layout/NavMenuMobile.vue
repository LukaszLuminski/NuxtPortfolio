<template>
  <v-list nav class="theNavMainMobile__list">
    <v-list-item-group>
      <nuxt-link
        v-for="(n, i) in items"
        :key="i"
        :to="'/' + n.slug"
        class="theNavMainMobile__listItem"
      >
        <v-list-item class="theNavMainMobile__listItemLink">
          <v-list-item-title>
            <li class="pb-3">
              {{ n.title }}
            </li>
            <v-divider class="mr-9" />
            <!-- <li v-html="item.title" /> -->
          </v-list-item-title>
        </v-list-item>
      </nuxt-link>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
