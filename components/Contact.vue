<template>
  <div class="contact">
    <v-container class="contact__container">
      <div
        class="title-wrapper"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-anchor="#contact"
      >
        <p class="section-title pt-8 white--text">
          Contact
        </p>
        <v-divider class="mb-12 white" />
      </div>
      <v-row class="contact__row mb-8">
        <v-col>
          <v-form ref="form" lazy-validation @submit.prevent="validate">
            <recaptcha />
            <v-row>
              <v-col class="col-12 col-sm-6 pr-sm-5 pb-0">
                <v-text-field
                  v-model="name"
                  class="contact__text-field"
                  :rules="basicRules"
                  type="text"
                  placeholder="Name"
                  required
                  outlined
                  dense
                />
              </v-col><v-col class="col-12 col-sm-6 pl-sm-0 pt-0 pt-sm-3 pb-0">
                <v-text-field
                  v-model="email"
                  class="contact__text-field"
                  :rules="emailRules"
                  placeholder="Email"
                  type="text"
                  required
                  outlined
                  dense
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col block class="pt-0">
                <v-text-field
                  v-model="subject"
                  class="contact__text-field"
                  :rules="basicRules"
                  placeholder="Subject"
                  type="text"
                  required
                  outlined
                  dense
                />
                <v-textarea
                  v-model="message"
                  auto-grow
                  class="contact__text-field"
                  outlined
                  :rules="basicRules"
                  placeholder="Enter Your Message"
                />
                <v-btn large @click="validate">
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col><v-divider vertical /><v-col><h2>Details</h2></v-col>
      </v-row>
    </v-container>
    <ErrorDialog
      :dialog="dialog"
      :message="message"
      :error="error"
      @close="closeDialog"
    />
  </div>
</template>

<script>
import ErrorDialog from '~/components/ErrorDialog.vue'
export default {
  components: { ErrorDialog },
  data () {
    return {
      error: false,
      dialog: false,
      name: null,
      email: null,
      emailRules: [
        v => !!v || 'Field is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      subject: null,
      message: null,
      basicRules: [v => !!v || 'Field is required']
    }
  },
  methods: {
    async validate () {
      if (this.$refs.form.validate()) {
        console.log('form successfully validated!')
        try {
          const token = await this.$recaptcha.getResponse()
          if (token) {
            this.message = 'Your form has been successfully submitted!'
            this.dialog = true
          }
          await this.$recaptcha.reset()
        } catch (error) {
          this.error = true
          this.message = error
          this.dialog = true
        }
      }
    },
    closeDialog () {
      if (!this.error) {
        this.$refs.form.reset()
      }
      this.dialog = false
    }
  }
}
</script>

<style lang="scss">
.contact {
    margin-top: -45px;
    @media (min-width: 768px) {
   -webkit-clip-path: polygon(0 7%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 7%, 100% 0, 100% 100%, 0% 100%);
  }
    background: linear-gradient(to bottom, #a59b8d, #522c14);
    -webkit-clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
}
</style>
