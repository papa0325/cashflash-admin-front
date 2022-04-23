<template>
  <div class="wrapper">
    <notifications />
    <side-bar>
      <template
        slot="links"
        slot-scope="props"
      >
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-chart-bar-32 text-primary',
            path: '/',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Users',
            icon: 'ni ni-single-02 text-primary',
            path: '/users',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Admins',
            icon: 'ni ni-circle-08 text-primary',
            path: '/admins',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Settings',
            icon: 'ni ni-settings-gear-65 text-primary',
          }"
        >
          <sidebar-item
            :link="{ name: 'Team members', path: '/settings/team-members' }"
          />
          <sidebar-item
            :link="{ name: 'Referral system', path: '/settings/referral-system' }"
          />
        </sidebar-item>
      </template>

      <!--      <template slot="links-after">-->
      <!--        <hr class="my-3">-->
      <!--        <h6 class="navbar-heading p-0 text-muted">-->
      <!--          Documentation-->
      <!--        </h6>-->
      <!--      </template>-->
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.name === 'alternative' ? 'light': 'light'" />

      <div @click="$sidebar.displaySidebar(false)">
        <nuxt />
      </div>
      <!--      <content-footer v-if="!$route.meta.hideFooter" />-->
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import DashboardNavbar from '~/components/layouts/argon/DashboardNavbar.vue';
import ContentFooter from '~/components/layouts/argon/ContentFooter.vue';
import DashboardContent from '~/components/layouts/argon/Content.vue';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
  },
  mounted() {
    this.initScrollbar();
  },
  methods: {
    initScrollbar() {
      const isWindows = navigator.platform.startsWith('Win');
      if (isWindows) {
        initScrollbar('scrollbar-inner');
      }
    },
  },
};
</script>
<style lang="scss">
.el-table .caret-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 34px;
  width: 24px;
  vertical-align: middle;
  cursor: pointer;
  overflow: visible;
  overflow: initial;
  position: relative;
}
.el-table .sort-caret.ascending {
  border-bottom-color: #c0c4cc;
  top: 5px;
}
.el-table .sort-caret.descending {
  border-top-color: #c0c4cc;
}
.el-table table .descending .sort-caret.descending {
  border-top-color: #e14eca;
}
.el-table .sort-caret {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  position: absolute;
  left: 7px;
}
.el-table th.is-sortable {
  cursor: pointer;
}
.select-primary.el-select .el-input .el-input__suffix {
  transition: .3s;
  align-items: center;
  justify-items: center;
  display: flex;
}
.el-input__suffix-inner {
  pointer-events: all;
  height: 100%;
  width: 100%;
}
.select-primary.el-select .el-input .el-input__icon {
  color: #e14eca;
}
.el-select .el-input .el-select__caret {
  color: #c0c4cc;
  font-size: 14px;
  transition: transform .3s;
  transform: rotate(0deg);
  cursor: pointer;
  background: url('~assets/img/arrow__table.svg') no-repeat center center;
}
.el-input__icon:after {
  content: "";
  height: 100%;
  width: 0;
  transform: rotate(-180deg);
  display: inline-block;
  vertical-align: middle;
}
.el-select .el-input .el-select__caret.is-reverse {
  transform: rotate(-180deg);
}
.el-icon-arrow-up:before {
  border: none !important;
}
select::-ms-expand {
  display: none;
}
</style>
