<template>
  <div class="skills">
    <v-container class="skills__container">
      <div class="title-wrapper">
        <h2 class="display-1 section-title pt-8">
          My skills
        </h2>
        <v-divider class="mt-2 mb-6" />
      </div>
      <p class="headline">
        Work in progress...
      </p>
      <p>
        Check my previous portfolio website at <a href="https://lukaszluminski.github.io/Portfolio/">https://lukaszluminski.github.io/Portfolio/</a>.
      </p>
      <v-row
        class="skills__row mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-anchor="#projects"
      >
        <v-col
          v-for="(item, i) in arrOfProjects"
          :key="i"
          class="col-12 col-sm-6"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
