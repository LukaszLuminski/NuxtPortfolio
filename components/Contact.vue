<template>
  <div class="contact pt-15">
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
        <v-divider class="mb-12 contact__divider" />
      </div>
      <v-row class="contact__row mb-8">
        <v-col class="pr-md-10 col-12 col-md-6">
          <v-form ref="form" lazy-validation @submit.prevent="validate">
            <recaptcha />
            <v-row>
              <v-col class="col-12 col-sm-6 pr-sm-5 pb-0">
                <v-text-field
                  v-model="name"
                  placeholder="Your Name"
                  class="contact__text-field"
                  :rules="basicRules"
                  type="text"
                  required
                  filled
                  rounded
                  dense
                />
              </v-col><v-col class="col-12 col-sm-6 pl-sm-0 pt-0 pt-sm-3 pb-0">
                <v-text-field
                  v-model="email"
                  placeholder="Your Email"
                  class="contact__text-field"
                  :rules="emailRules"
                  type="text"
                  required
                  filled
                  rounded
                  dense
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col block class="pt-0">
                <v-text-field
                  v-model="subject"
                  placeholder="Subject"
                  class="contact__text-field"
                  :rules="basicRules"
                  type="text"
                  required
                  filled
                  rounded
                  dense
                />
                <v-textarea
                  v-model="message"
                  placeholder="Enter Your Message"
                  auto-grow
                  class="contact__text-field"
                  filled
                  rounded
                  :rules="basicRules"
                />
                <v-btn dark x-large class="contact__btn" @click="validate">
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col><v-divider vertical class="contact__divider__vertical" /><v-col class="pl-md-10 col-12 col-md-5">
          <h2>Details</h2>
        </v-col>
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
  -webkit-clip-path: polygon(0 4%, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 4%, 100% 0, 100% 100%, 0% 100%);
  &__divider {
    &__vertical {
      background-color: rgba(255, 255, 255, 0.4) !important;
    }
    background-color: rgba(255, 255, 255, 0.7) !important;
  }
  &__text-field {
    .v-input__slot {
      background-color: white !important;
      border: none !important;
    }
  }
  &__btn {
    background-color: #666666 !important;
  }
}
.v-application  .contact__text-field .error--text {
  color: #ffc966 !important;
    caret-color: #ffc966 !important;
}
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
    border-radius: 3px !important;
}
// .v-text-field--outlined.v-input--is-focused fieldset, .v-text-field--outlined.v-input--has-state fieldset {
//       border: 2px solid orange !important;
// }
</style>
