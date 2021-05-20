<template>
  <v-footer
    class="theFooter text-center"
  >
    <!-- <v-footer
    class="theFooter text-center"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  > -->
    <div class="black--text">
      LinkedIn icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>

    <v-container fluid>
      <!-- <v-row>
        <v-col class="col-6 col-md-3">
          <h3 class="mb-4">
            Menu
          </h3>
          <ul class="theFooter__list">
            <nuxt-link v-for="item in mainMenu" :key="item.id" :to="item.url">
              <li class="theFooter__listItemLink" v-html="item.title" />
            </nuxt-link>
          </ul>
        </v-col>
        <v-col class="col-6 col-md-3">
          <h3 class="mb-4">
            Useful Links
          </h3>
          <ul class="theFooter__list">
            <nuxt-link to="/admissions-policy">
              <li class="theFooter__listItemLink">
                Admissions Policy
              </li>
            </nuxt-link>
            <nuxt-link to="/admissions-policy">
              <li class="theFooter__listItemLink">
                Terms & Conditions
              </li>
            </nuxt-link>
            <nuxt-link to="/admissions-policy">
              <li class="theFooter__listItemLink">
                Privacy & Cookie Policy
              </li>
            </nuxt-link>
            <nuxt-link to="/admissions-policy">
              <li class="theFooter__listItemLink">
                Terms of Service
              </li>
            </nuxt-link>
            <nuxt-link to="/admissions-policy">
              <li class="theFooter__listItemLink">
                Job Vacancies
              </li>
            </nuxt-link>
          </ul>
        </v-col>
        <v-col class="col-6 col-md-3">
          <h3 class="mb-4">
            Contact
          </h3>
          <ul class="theFooter__list">
            <nuxt-link
              v-for="item in socialLinks"
              :key="item.id"
              :to="item.url"
            >
              <li class="theFooter__listItemLink">
                {{ item.name }}
              </li>
            </nuxt-link>
            <nuxt-link to="/admissions-policy">
              <li class="theFooter__listItemLink mt-3 font-weight-bold">
                enquiries@calypsocove.co.uk
              </li>
            </nuxt-link>
            <nuxt-link to="/admissions-policy">
              <li class="theFooter__listItemLink font-weight-bold">
                +44 800 123 890
              </li>
            </nuxt-link>
          </ul>
        </v-col>
        <v-col class="col-6 col-md-3 my-auto">
          <img :src="require('~/assets/img/logo.png')" width="100px">
          <p class="theFooter__address mt-3">
            <span class="font-weight-bold">Calypso Cove Waterpark</span>
            <br>
            Metrodome Leisure Complex,
            <br>
            Queens Ground,
            <br>
            Queens Road,
            <br>
            Barnsley,
            <br>
            S71 1AN
          </p>
        </v-col>
      </v-row> -->
      <v-row class="theFooter__copyright mt-5">
        <v-col class="pb-0">
          <!-- <p class="mb-0">
            {{ copyrightInfo }}
          </p> -->
          <!-- <p class="theFooter__madeBy mt-5 mb-0">
            Made with &#9829; by
            <a href="https://www.bigfootdigital.co.uk"> Bigfoot Digital </a>
          </p> -->
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

export default {
  // computed: {
  //   ...mapGetters({
  //     socialLinks: 'businessDetails/getSocialLinks',
  //     copyrightInfo: 'businessDetails/getCopyrightInfo',
  //     mainMenu: 'menus/getMainMenu'
  //   }),
  //   backgroundUrl () {
  //     return require('~/assets/img/footer-bg.png')
  //   }
  // },
  // async mounted () {
  //   // Fetch business details - workaround for lack of nuxtServerInit when page refreshes on auth/protected page
  //   await this.fetchBusinessDetails()
  // },
  // methods: {
  //   ...mapActions({
  //     fetchBusinessDetails: 'businessDetails/fetchBusinessDetails'
  //   })
  // }
}
</script>

<style lang="scss" scoped>
.theFooter {
  color: $color-white !important;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  &__list {
    list-style-type: none;
    padding-left: 0px;
  }
  &__copyright {
    font-size: 10px;
  }
  &__madeBy {
    a {
      color: $color-white;
    }
  }
  &__listItemLink {
    margin-bottom: 3px;
    color: $color-white;
    font-size: 13px;
  }
  &__address {
    font-size: 13px;
  }
}
</style>
