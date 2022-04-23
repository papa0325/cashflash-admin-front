<template>
  <div class="container mt-5">
    <b-overlay
      :show="busyRegStepOne"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="d-inline-block step-one-busy"
    >
      <card>
        <div class="row">
          <h4>
            Registration
          </h4>
        </div>
        <validation-observer
          v-slot="{handleSubmit}"
          ref="formValidator"
        >
          <form
            role="form"
            @submit.prevent="handleSubmit(registrationBase)"
          >
            <div class="row">
              <div
                v-show="basic"
                class="col-12"
              >
                <base-input
                  v-model.trim="regModel.email"
                  disabled
                  class="disabled-input"
                  :autocomp="'username'"
                />
                <base-input
                  v-model="regModel.firstName"
                  name="firstName"
                  :autocomp="'off'"
                  placeholder="First name"
                  :rules="{required: true, alpha_dash: true, max: 40}"
                />
                <base-input
                  v-model.trim="regModel.lastName"
                  name="lastName"
                  :autocomp="'off'"
                  placeholder="Last name"
                  :rules="{required: true, alpha_dash: true, max: 40}"
                />
                <base-input
                  ref="password"
                  v-model.trim="regModel.password"
                  name="password"
                  type="password"
                  :autocomp="'off'"
                  placeholder="Password"
                  :rules="{required: true, min: 7, max: 40}"
                />
                <base-input
                  v-model.trim="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="Password confirm"
                  :autocomp="'off'"
                  type="password"
                  :rules="{required: true, min: 7, max: 40}"
                />
              </div>
              <div
                v-show="final"
                class="col-12"
              >
                <h3>
                  OTP
                </h3>
                <img
                  class="QR"
                  :src="QRCode"
                  alt=""
                >
                <base-input
                  v-model.trim="token2FA"
                  v-mask="'######'"
                  name="token2FA"
                  maxlength="6"
                  placeholder="Token"
                />
              </div>
            </div>
            <div class="row">
              <div
                v-show="basic"
                class="col-12"
              >
                <button
                  type="submit"
                  style="width: 100%;"
                  class="btn btn-primary mt-3"
                >
                  Sign in
                </button>
              </div>
              <div
                v-show="final"
                class="col-12"
              >
                <b-overlay
                  :show="busy"
                  rounded
                  opacity="0.6"
                  spinner-small
                  spinner-variant="primary"
                  class="d-inline-block"
                >
                  <base-button
                    type="primary"
                    native-type="button"
                    class="mb-3"
                    size="lg"
                    block
                    @click="registrationFinal()"
                  >
                    Complete
                  </base-button>
                </b-overlay>
              </div>
            </div>
          </form>
        </validation-observer>
      </card>
    </b-overlay>
  </div>
</template>

<script>

export default {
  name: 'Registration',
  middleware: 'guest',
  layout: 'auth',
  data() {
    return {
      busyRegStepOne: true,
      regModel: {
        firstName: '',
        lastName: '',
        password: '',
        email: '',
      },
      passwordConfirm: '',
      final: false,
      basic: true,
      token2FA: '',
      QRCode: null,
      busy: false,
    };
  },
  //  Динамический путь, токен
  async mounted() {
    const verifyToken = this.$route.params.registration;
    await this.registrationVerify(verifyToken);
  },
  methods: {
    async registrationVerify(verifyToken) {
      try {
        const response = await this.$api.registrationVerify(verifyToken);
        this.regModel.email = response.result.email;
        this.busyRegStepOne = false;
      } catch (e) {
        this.$router.push('/sign-in');
        this.$notify({
          type: 'danger',
          message: e.response.data.msg,
        });
      }
    },
    async registrationFinal() {
      if (this.token2FA.length === 6) {
        try {
          this.busy = true;
          const finalModel = {
            token2FA: this.token2FA,
            email: this.regModel.email,
          };
          const response = await this.$api.registrationFinal(finalModel);
          this.$store.commit('user/setNewTokens', response);
          this.$router.push('/');
        } catch (e) {
          this.busy = false;
          this.$notify({
            type: 'danger',
            message: e.response.data.msg,
          });
        }
      }
      this.busy = false;
    },
    async registrationBase() {
      if (this.regModel.password === this.passwordConfirm) {
        try {
          this.busy = true;
          const response = await this.$api.registrationBasic(this.regModel);
          this.QRCode = response.result.QRCode.toString();
          this.final = true;
          this.basic = false;
        } catch (e) {
          this.busy = false;
          this.$notify({
            type: 'danger',
            message: e.response.data.msg,
          });
        }
      } else {
        this.$notify({
          type: 'danger',
          message: 'Passwords don\'t match',
        });
      }
      this.busy = false;
    },
  },
};
</script>
<style lang="scss">
  .step-one-busy {
    width: 100%;
    .card {
      margin-bottom: 0;
    }
    .bg-light {
      background-color: transparentize($color: #31334B, $amount: 0.2) !important;
    }
  }
</style>
<style scoped lang="scss">
  .d-inline-block {
    width: 100%;
    button {
      margin: 0;
    }
  }
  .container {
    max-width: 360px;
    .card {
      height: auto;
    }
  }
  .col-6 {
    .form-group {
      margin-bottom: 20px;
    }
  }
  .row {
    button {
      margin-bottom: 0 !important;
    }
    h4 {
      margin-left: 15px;
    }
    h3 {
      margin-bottom: 0;
    }
    img {
      margin: 15px auto;
      display: flex;
      justify-content: center;
    }
  }
  .disabled-input {
    color: #00bbff;
  }

  @media (max-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
</style>
