<template>
  <div class="content">
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 d-inline-block mb-0">
            Admins
          </h6>
          <nav
            aria-label="breadcrumb"
            class="d-none d-md-inline-block ml-md-4"
          >
            <route-bread-crumb />
          </nav>
          <span class="sub-router">
            username
          </span>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="profile__main">
        <div>
          <!--    Main card      -->
          <div class="card">
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
                    <div
                      class="status__circle"
                      :class="{'status__circle_danger': !activeUser}"
                    />
                    <p v-if="activeUser">
                      Active
                    </p>
                    <p v-if="!activeUser">
                      Inactive
                    </p>
                  </div>
                </div>
                <div class="col-auto">
                  <base-button
                    v-if="!isBlocked"
                    type="danger"
                    @click="blockUser()"
                  >
                    Block
                  </base-button>
                  <base-button
                    v-if="isBlocked"
                    type="danger"
                    @click="unblockUser()"
                  >
                    Unblock
                  </base-button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="info__items">
                <div class="info__item">
                  <h4 class="info__label">
                    Status
                  </h4>
                  <p>
                    Status
                  </p>
                </div>
                <div class="info__item">
                  <h4 class="info__label">
                    Last seen
                  </h4>
                  <p>
                    Last seen
                  </p>
                </div>
                <div class="info__item">
                  <h4 class="info__label">
                    Signed up
                  </h4>
                  <p>
                    Signed up
                  </p>
                </div>
                <div class="info__item">
                  <h4 class="info__label">
                    Email
                  </h4>
                  <p>
                    Email
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--    Communication card   -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">
                Communication
              </h3>
            </div>
            <!-- Card body -->
            <div class="card-body">
              <!-- Form groups used in grid -->
              <div class="row">
                <div class="col-md-6">
                  <base-input
                    label="Email"
                    placeholder="Email"
                  />
                </div>
                <div class="col-md-6">
                  <base-input
                    label="Mobile"
                    placeholder="Mobile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <!--    Personal  card   -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">
                Personal
              </h3>
            </div>
            <!-- Card body -->
            <div class="card-body">
              <!-- Form groups used in grid -->
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    label="First name"
                    placeholder="First name"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="Last name"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="Middle name"
                    placeholder="Middle name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    label="Nickname"
                    placeholder="Nickname"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="Date of birth"
                    placeholder="Date of birth"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--    Documents  card   -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">
                Document
              </h3>
            </div>
            <!-- Card body -->
            <div class="card-body">
              <!-- Form groups used in grid -->
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    label="Identity document"
                    placeholder="Identity document"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="Document number"
                    placeholder="Document number"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="Issue date"
                    placeholder="Issue date"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    label="Expiration date"
                    placeholder="Expiration date"
                  />
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-control-label">
                      Document copy
                    </label>
                    <base-button
                      class="btn btn-default"
                      style="height: 46px"
                    >
                      doc1_copy.png
                    </base-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--    Location  card   -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">
                Location
              </h3>
            </div>
            <!-- Card body -->
            <div class="card-body">
              <!-- Form groups used in grid -->
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    label="State"
                    placeholder="State"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="City"
                    placeholder="City"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="Street name"
                    placeholder="Street name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    label="Street number"
                    placeholder="Street number"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="Unit number"
                    placeholder="Unit number"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    label="ZIP code"
                    placeholder="ZIP code"
                  />
                </div>
              </div>
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
  async fetch() {
    const currentId = this.$route.params.index;
  },
  data() {
    return {
      activeUser: true,
      isBlocked: false,
    };
  },
  methods: {
    blockUser() {
      this.isBlocked = !this.isBlocked;
    },
    unblockUser() {
      this.isBlocked = !this.isBlocked;
    },
  },
};
</script>
<style lang="scss" scoped>
.profile {
  &__main {
    display: grid;
    grid-template-columns: 520px 1fr;
    column-gap: 30px;
  }
  @media (max-width: 991px) {
    &__main {
      grid-template-columns: 1fr;
    }
  }
}
.info {
  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
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
  @media (max-width: 1199px) {
    &__items {
      grid-template-columns: 1fr;
      &_full {
        grid-template-columns: 1fr;
      }
    }
  }
}
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
  &__circle {
    border-radius: 50%;
    height: 5px;
    width: 5px;
    background-color: #2DCE89;
    margin-right: 10px;
    &_danger {
      background-color: #f5365c;
    }
  }
}
//.document {
//  &__btn-label {
//    font-size: 14px;
//    line-height: 19px;
//    color: #525F7F;
//  }
//}
</style>
