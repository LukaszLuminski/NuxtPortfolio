<template>
  <div id="contact" class="contact pt-7">
    <v-container class="contact__container">
      <div
        class="title-wrapper"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-anchor="#contact"
        :data-aos-offset="!$vuetify.breakpoint.xs ? '1200' : ''"
        data-aos-anchor-placement="center-bottom"
      >
        <p class="section-title pt-4 white--text">
          Contact
        </p>
        <v-divider class="mb-15 contact__divider" />
      </div>
      <v-row
        class="contact__row mb-2 mb-md-8"
      >
        <v-col class="pr-md-10 col-12 col-md-6">
          <v-form
            ref="form"
            name="contact"
            method="POST"
            netlify
            data-netlify-honeypot="bot-field"
            lazy-validation
            @submit.prevent="validate"
          >
            <recaptcha />
            <input type="hidden" name="form-name" value="contact">
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field">
              </label>
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-anchor="#contact"
              :data-aos-offset="!$vuetify.breakpoint.xs ? '1200' : ''"
              data-aos-anchor-placement="center-bottom"
            >
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
                  <input type="text" :value="name" name="name" class="d-none">
                </v-col><v-col class="col-12 col-sm-6 pl-sm-0 pt-0 pt-sm-3 pb-0">
                  <v-text-field
                    v-model="email"
                    name="email"
                    placeholder="Your Email"
                    class="contact__text-field"
                    :rules="emailRules"
                    type="text"
                    required
                    filled
                    rounded
                    dense
                  />
                  <input type="text" :value="email" name="email" class="d-none">
                </v-col>
              </v-row>
              <v-row>
                <v-col block class="pt-0">
                  <v-text-field
                    v-model="subject"
                    placeholder="Subject"
                    name="subject"
                    class="contact__text-field"
                    :rules="basicRules"
                    type="text"
                    required
                    filled
                    rounded
                    dense
                  />
                  <input type="text" :value="subject" name="subject" class="d-none">
                  <v-textarea
                    v-model="message"
                    placeholder="Enter Your Message"
                    auto-grow
                    class="contact__text-field"
                    filled
                    rounded
                    :rules="basicRules"
                  />
                  <textarea name="message" :value="message" class="d-none" />
                  <v-btn dark x-large class="contact__btn" type="submit">
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-form>
        </v-col><v-divider
          vertical
          class="contact__divider__vertical"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-anchor="#contact"
          :data-aos-offset="!$vuetify.breakpoint.xs ? '1200' : ''"
          data-aos-anchor-placement="center-bottom"
        /><v-col
          class="mt-8 mt-md-15 pl-5 pb-0 pl-md-3 pl-md-10 col-12 col-md-5"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-anchor="#contact"
          :data-aos-offset="!$vuetify.breakpoint.xs ? '1200' : ''"
          data-aos-anchor-placement="center-bottom"
        >
          <div class="contact__single-logo">
            <a
              class="d-flex align-center"
              href="https://linkedin.com/in/lukasz-luminski/"
              target="_blank"
              @mouseover="$refs.linkedinBtn.isActive = true"
              @mouseout="$refs.linkedinBtn.isActive = false"
            ><v-btn
              ref="linkedinBtn"
              class="mr-4 contact__logo-linkedin-btn"
              icon
              dark
            ><v-icon dark class="contact__logo">
              mdi-linkedin
            </v-icon></v-btn><span
              class="hover hover-1"
            >linkedin.com/in/lukasz-luminski/</span></a>
          </div>
          <div class="contact__single-logo">
            <a
              class="d-flex align-center"
              href="https://github.com/LukaszLuminski"
              target="_blank"
              @mouseover="$refs.githubBtn.isActive = true"
              @mouseout="$refs.githubBtn.isActive = false"
            ><v-btn
              ref="githubBtn"
              class="mr-4 contact__logo-github-btn"
              icon
              dark
            ><v-icon dark class="contact__logo"> mdi-github </v-icon></v-btn><span class="hover hover-1">github.com/LukaszLuminski</span></a>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <ErrorDialog
      :dialog="dialog"
      :message="dialogMessage"
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
      dialogMessage: null,
      basicRules: [v => !!v || 'Field is required'],
      formData: {}
    }
  },
  methods: {
    async validate (e) {
      if (this.$refs.form.validate()) {
        try {
          const token = await this.$recaptcha.getResponse()
          if (token) {
            this.formData.name = this.name
            this.formData.email = this.email
            this.formData.subject = this.subject
            this.formData.message = this.message
            this.handleSubmit(e)
            this.dialogMessage = 'Your form has been successfully submitted!'
            this.dialog = true
          }
          await this.$recaptcha.reset()
        } catch (error) {
          this.error = true
          this.dialogMessage = error
          this.dialog = true
        }
      }
    },
    encode (data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    async handleSubmit (e) {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData
        })
      })
        .then(() => {
          this.dialogMessage = 'Your form has been successfully submitted!'
          this.dialog = true
        })
        .catch((error) => {
          this.dialogMessage = error
          this.dialog = true
        })
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
$animate: all 0.2s ease-in-out;
.contact {
  color: white;
  margin-top: -45px;
  background: linear-gradient(to bottom, lighten(#9c9081, 2.2%), #522c14);
  -webkit-clip-path: polygon(0 4%, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 4%, 100% 0, 100% 100%, 0% 100%);
  a {
    text-decoration: none !important;
    color: white !important;
  }
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
  &__logo {
    font-size: 70px !important;
    height: auto;
  }
  &__single-logo {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0 0 33px;
    width: fit-content;
    .hover {
      @media (min-width: $breakpoint-md) {
        font-size: 18px;
      }
      font-size: 16px;
      white-space: nowrap;
      text-align: center;
      margin: 0 auto;
      padding: 0;
      transition: $animate;
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: -7px;
        width: 0px;
        height: 2px;
        margin: 5px 0 0;
        transition: $animate;
        transition-duration: 0.3s;
        opacity: 0;
        background-color: darken(white, 5%);
      }
      &.hover-1 {
        &:before,
        &:after {
          left: 0;
        }
      }
    }
    &:hover {
      cursor: pointer;
      .hover {
        &:before,
        &:after {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
  &__col-title {
    @media (min-width: $breakpoint-md) {
      white-space: nowrap;
      font-size: 19px;
    }
    font-size: 17px;
  }
}

.v-text-field--rounded > .v-input__control > .v-input__slot {
    padding: 0 15px !important;
}
.v-application .contact__text-field .error--text {
  color: #ffc966 !important;
  caret-color: #ffc966 !important;
}
.v-text-field fieldset,
.v-text-field .v-input__control,
.v-text-field .v-input__slot {
  border-radius: 3px !important;
}
.v-btn--icon.contact__logo-linkedin-btn.v-size--default {
  height: 50px !important;
  width: 50px !important;
}
.v-btn--icon.contact__logo-github-btn.v-size--default {
  height: 58px !important;
  width: 58px !important;
  margin-left: -6px;
}
.grecaptcha-badge {
  position: absolute !important;
  z-index: 999;
  @media (min-width: $breakpoint-md) {
    bottom: 55px !important;
  }
  bottom: 247px !important;
}
</style>
