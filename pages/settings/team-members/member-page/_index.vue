<template>
  <div class="content">
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 d-inline-block mb-0">
            Settings
          </h6>
          <nav
            aria-label="breadcrumb"
            class="d-none d-md-inline-block ml-md-4"
          >
            <route-bread-crumb />
          </nav>
          <span class="sub-router">
            Team members
          </span>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card user__card">
        <div class="card-header">
          <div class="row align-items-center">
            <div class="col-auto">
              <img
                v-if="this.$route.params.id"
                class="avatar cover rounded-circle mr-2"
                :src="'/img/theme/team-1.jpg'"
                alt=""
              >
              <img
                v-else
                src="/img/theme/team-1.jpg"
                alt=""
                class="avatar cover rounded-circle mr-2"
              >
            </div>
            <div class="col ml--2">
              <h4 class="mb-0">
                username
              </h4>
              <div class="status">
                <span>
                  Founder and investor
                </span>
                <p>
                  Founder
                </p>
              </div>
            </div>
            <div class="col-auto">
              <base-button
                type="primary"
              >
                Change photo
              </base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <!-- Card header -->
        <div class="card-header">
          <h3 class="mb-0">
            Information
          </h3>
        </div>
        <!-- Card body -->
        <div class="card-body">
          <!-- Personal info -->
          <h3 class="mb-3">
            Personal info
          </h3>
          <div class="row">
            <div class="col-md-3">
              <base-input
                label="Office name"
                placeholder="Office name"
              />
            </div>
            <div class="col-md-3">
              <base-input
                label="Office name"
                placeholder="Office name"
              />
            </div>
            <div class="col-md-3">
              <base-input
                label="Office name"
                placeholder="Office name"
              />
            </div>
          </div>
          <!-- Contacts -->
          <h3 class="mb-3">
            Contacts
          </h3>
          <div class="row">
            <div class="col-md-3">
              <base-input
                label="Office name"
                placeholder="Office name"
              />
            </div>
            <div class="col-md-3">
              <base-input
                label="Office name"
                placeholder="Office name"
              />
            </div>
            <div class="col-md-3">
              <base-input
                label="Office name"
                placeholder="Office name"
              />
            </div>
            <div class="col-md-3">
              <base-input
                label="Office name"
                placeholder="Office name"
              />
            </div>
          </div>
          <!-- University -->
          <h3 class="mb-3">
            University
          </h3>
          <div class="row">
            <div class="col-md-3">
              <base-input
                label="University"
                placeholder="University"
              />
            </div>
            <div class="col-md-3">
              <base-input
                label="Description"
                placeholder="Description"
              />
            </div>
            <div class="col-md-3">
              <base-button
                type="primary"
                native-type="submit"
                style="height: 46px; margin-top: 31px; width: 100%"
              >
                Add university
              </base-button>
            </div>
          </div>
          <!-- Language -->
          <h3 class="mb-3">
            Language
          </h3>
          <div class="row">
            <div class="col-md-3">
              <base-input
                label="Language"
                placeholder="Language"
              />
            </div>
            <div class="col-md-3">
              <base-input
                label="Description"
                placeholder="Description"
              />
            </div>
            <div class="col-md-3">
              <base-button
                type="primary"
                native-type="submit"
                style="height: 46px; margin-top: 31px; width: 100%"
              >
                Add language
              </base-button>
            </div>
          </div>
          <!-- Expertise -->
          <h3 class="mb-3">
            Expertise
          </h3>
          <div class="row">
            <div class="col-md-6">
              <base-input>
                <textarea
                  id="exampleFormControlTextarea1"
                  class="form-control"
                  rows="4"
                />
              </base-input>
            </div>
          </div>

          <div class="member__btn">
            <div class="col-md-3">
              <base-button
                type="primary"
                native-type="submit"
                style="height: 46px; margin-top: 31px; width: 100%"
              >
                Save
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RouteBreadCrumb from '@/components/argon-core/Breadcrumb/RouteBreadcrumb';
import DoughnutChart from '~/components/argon-core/Charts/DoughnutChart';

export default {
  middleware: 'auth',
  layout: 'DashboardLayout',
  components: {
    RouteBreadCrumb,
  },
  data() {
    return {

    };
  },
  methods: {
    editMember() {
      this.$router.push('/team-members/member-page/1');
    },
  },
};
</script>
<style lang="scss" scoped>
.status {
  display: flex;
  align-items: center;
  margin-top: 10px;
  p {
    margin: 0;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
  }
  span {
    font-size: 13px;
    line-height: 18px;
    color: #32325D;
    margin-right: 10px;
  }
}
.user {
  &__card {
    max-width: 653px;
  }
}
.info {
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 5px;
    &_full {
      grid-gap: 4px 30px;
      grid-template-columns: repeat(4, 1fr);
    }
  }
  &__label {
    font-weight: normal;
    font-style: normal;
    font-size: 14px;
    color: #32325D;
  }
  @media (max-width: 991px) {
    &__items {
      grid-template-columns: 1fr;
      &_full {
        grid-template-columns: 1fr;
      }
    }
  }
}
.member__btn {
  display: flex;
  justify-content: flex-end;
}
</style>
