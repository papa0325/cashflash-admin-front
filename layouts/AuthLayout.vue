<template>
  <div
    :class="layoutClass"
    class="auth-layout"
  >
    <notifications />
    <div class="auth__header">
      <div class="container">
        <img
          src="~/static/Logo.svg"
          alt=""
        >
      </div>
    </div>

    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>
<script>
import BaseNav from '~/components/argon-core/Navbar/BaseNav.vue';

export default {
  components: {
    BaseNav,
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      year: new Date().getFullYear(),
      pageClass: 'login-page',
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    },
    layoutClass() {
      const exceptions = ['index', 'home'];
      if (!exceptions.includes(this.$route.name)) {
        return 'bg-default';
      }
      return '';
    },
  },
  watch: {
    '$route.path': function () {
      if (this.showMenu) {
        this.closeMenu();
      }
    },
  },
  methods: {
    closeMenu() {
      document.body.classList.remove('nav-open');
      this.showMenu = false;
    },
  },
};
</script>
<style lang="scss">
  .auth-layout {
    min-height: 100vh;
  }
  .auth__header {
    height: 61px;
    background: #FEFEFF;
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
  }
</style>
