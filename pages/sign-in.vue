<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success auth-header">
      <div class="container">
        <div class="header-body text-center mb-5">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">
                Welcome
              </h1>
              <p class="text-lead text-white">
                to CashFlash admin panel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--6 pb-5">
      <!-- Table -->
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-8">
          <div class="card bg-secondary border-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4 logo-img">
                <img
                  src="~/static/Logo.svg"
                  alt=""
                >
              </div>
              <validation-observer
                v-slot="{handleSubmit}"
                ref="formValidator"
              >
                <form
                  role="form"
                  @submit.prevent="handleSubmit(onSubmit)"
                >
                  <base-input
                    v-model="model.email"
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    :autocomp="'off'"
                    name="Email"
                    :rules="{required: true, email: true}"
                  />
                  <base-input
                    v-model="model.password"
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-lock-circle-open"
                    placeholder="password"
                    type="password"
                    name="Password"
                    :autocomp="'password'"
                    :rules="{required: true, min: 6}"
                  />
                  <base-input
                    v-model="model.token2FA"
                    v-mask="'######'"
                    alternative
                    :autocomp="'off'"
                    class="mb-3"
                    prepend-icon="ni ni-lock-circle-open"
                    placeholder="totp"
                    name="totp"
                    :rules="{required: true, min: 6}"
                  />
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-primary mt-8"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  layout: 'AuthLayout',
  name: 'Register',
  middleware: 'guest',
  data() {
    return {
      model: {
        email: '',
        password: '',
        token2FA: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.busy = true;
        const response = await this.$api.signIn(this.model);
        this.$store.commit('user/setNewTokens', response);
        this.$router.push('/');
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.response.data.msg,
        });
      }
      // this will be called only after form is valid. You can do an api call here to register users
    },
  },
};
</script>
<style lang="scss" scoped>
.logo-img {
  img {
    height: 51px;
  }
  padding-bottom: 35px;
  padding-top: 24px;
}
.auth-header {
  padding-top: 100px;
  padding-bottom: 52px;
}
.text {
  &__forgot {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #525F7F;
  }
}
</style>
