<template>
  <div class="projects">
    <v-container>
      <h2 class="display-1 projects__title pt-10">
        My projects
      </h2>
      <v-divider class="mt-2 mb-6" />
      <v-row class="projects__row">
        <v-col v-for="(project, i) in arrOfProjects" :key="i" class="col-12 col-sm-6">
          <figure>
            <v-img
              :src="require(`~/assets/img/${project.img}`)"
            />
          </figure>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import projects from '../utils/projects'
export default {
  data () {
    return {
      arrOfProjects: projects
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 1264px) {
  .container {
    max-width: 960px;
  }
}
.projects {
  background: #f2f2f2;
}
</style>
