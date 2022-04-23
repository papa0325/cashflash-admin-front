export default ({ $axios }, inject) => {
  const api = {
    // Pairs and currencies
    async getDiscounts() {
      const response = await $axios.$get('/fee/discount');
      return response.result;
    },
    async signIn(user) {
      return $axios.$post('/admin/login', user);
    },
    async addAdmin(user) {
      return $axios.$post('/admin/add', user);
    },
    // Registration
    async registrationVerify(verifyToken) {
      const model = {
        token: verifyToken,
      };
      return $axios.$post('/admin/verify', model);
    },
    async registrationBasic(user) {
      return $axios.$post('/admin/register/basic', user);
    },
    async registrationFinal(user) {
      return $axios.$post('/admin/register/final', user);
    },
  };
  inject('api', api);
};
