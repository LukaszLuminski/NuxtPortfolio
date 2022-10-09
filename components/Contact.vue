<template>
  <div id="contact" class="contact pt-7">
    <v-container class="contact__container">
      <div
        class="title-wrapper"
      >
        <h2 class="section-title pt-4 white--text">
          Contact
        </h2>
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
            <div>
              <v-row>
                <v-col class="col-12 col-sm-6 pr-sm-5 pb-0">
                  <v-text-field
                    ref="textFieldName"
                    v-model="name"
                    placeholder="Your Name"
                    class="contact__text-field"
                    :rules="basicRules"
                    type="text"
                    required
                    filled
                    rounded
                    dense
                    @focusin="addBorder('textFieldName')"
                    @focusout="removeBorder('textFieldName')"
                  />
                  <input type="text" :value="name" name="name" class="d-none">
                </v-col><v-col class="col-12 col-sm-6 pl-sm-0 pt-0 pt-sm-3 pb-0">
                  <v-text-field
                    ref="textFieldEmail"
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
                    @focusin="addBorder('textFieldEmail')"
                    @focusout="removeBorder('textFieldEmail')"
                  />
                  <input type="text" :value="email" name="email" class="d-none">
                </v-col>
              </v-row>
              <v-row>
                <v-col block class="pt-0">
                  <v-text-field
                    ref="textFieldSubject"
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
                    @focusin="addBorder('textFieldSubject')"
                    @focusout="removeBorder('textFieldSubject')"
                  />
                  <input
                    type="text"
                    :value="subject"
                    name="subject"
                    class="d-none"
                  >
                  <v-textarea
                    ref="textArea"
                    v-model="message"
                    placeholder="Enter Your Message"
                    auto-grow
                    class="contact__text-field"
                    filled
                    rounded
                    :rules="basicRules"
                    @focusin="addBorder('textArea')"
                    @focusout="removeBorder('textArea')"
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
        /><v-col
          class="mt-8 mt-md-15 pl-5 pb-0 pl-md-3 pl-md-10 col-12 col-md-5"
        >
          <div class="contact__single-logo">
            <v-btn
              class="d-flex align-center icon-btn"
              href="https://linkedin.com/in/lukasz-luminski/"
              target="_blank"
              plain
              color="white"
            >
              <v-icon dark class="contact__logo">
                mdi-linkedin
              </v-icon><span
                class="hover hover-1"
              >linkedin.com/in/lukasz-luminski/</span>
            </v-btn>
          </div>
          <div class="contact__single-logo">
            <v-btn
              class="d-flex align-center icon-btn"
              href="https://github.com/LukaszLuminski"
              target="_blank"
              plain
              color="white"
            >
              <v-icon dark class="contact__logo">
                mdi-github
              </v-icon>
              <span class="hover hover-1">github.com/LukaszLuminski</span>
            </v-btn>
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
    },

    addBorder (ref) {
      this.$refs[ref].$el.classList.add('focused')
    },

    removeBorder (ref) {
      this.$refs[ref].$el.classList.remove('focused')
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

  .v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1;

    .v-icon {
      opacity: 0.62;
    }
  }

  .v-btn:not(.v-btn--round).v-size--default {
    height: unset;
    padding: 0;
  }

  a {
    text-decoration: none !important;
    color: white !important;
  }

  .icon-btn {
    text-transform: none !important;
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

    &.focused {
      .v-input__slot {
        box-shadow: #d6ab62 0 0 0 3px, rgb(255 255 255) 0 0 0 5px;
      }
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

.v-text-field.v-input--dense:not(.v-text-field--outlined) input {
  padding: 2px 0 2px !important;
}
</style>
