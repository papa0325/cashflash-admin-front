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
            Referral system
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-6">
          <stats-card
            title="Referrals"
            type="gradient-red"
            sub-title="350,897"
            icon="ni ni-single-02"
          >
            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up" /> 3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-md-6">
          <stats-card
            title="Referral CFT"
            type="gradient-info"
            sub-title="2,356"
            icon="ni ni-money-coins"
          >
            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up" /> 12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-6">
          <card>
            <!-- Card header -->
            <h3
              slot="header"
              class="mb-0"
            >
              Referral percent
            </h3>
            <validation-observer
              v-slot="{handleSubmit}"
              ref="formValidator"
            >
              <form
                class="needs-validation"
                @submit.prevent="handleSubmit(firstFormSubmit)"
              >
                <base-input
                  v-model="model.percentage"
                  label="Percent"
                  name="Percent"
                  placeholder="Percent"
                  rules="required"
                  :disabled="!isEditing"
                />
                <div class="referral__btns">
                  <base-button
                    v-if="!isEditing"
                    type="primary"
                    @click="isEditing = true"
                  >
                    Edit
                  </base-button>
                  <base-button
                    v-if="isEditing"
                    type="secondary"
                    @click="isEditing = false"
                  >
                    Cancel
                  </base-button>
                  <base-button
                    v-if="isEditing"
                    type="primary"
                    native-type="submit"
                    @click="isEditing = false"
                  >
                    Save
                  </base-button>
                </div>
              </form>
            </validation-observer>
          </card>
        </div>
      </div>
    </base-header>
  </div>
</template>
<script>
import RouteBreadCrumb from '@/components/argon-core/Breadcrumb/RouteBreadcrumb';

export default {
  middleware: 'auth',
  layout: 'DashboardLayout',
  components: {
    RouteBreadCrumb,
  },
  data() {
    return {
      validated: false,
      model: {
        percentage: '10%',
      },
      isEditing: false,
    };
  },
  methods: {
    async firstFormSubmit() {
      // Form submit here
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
.referral__btns {
  display: flex;
  justify-content: flex-end;
  button {
    padding: 10px 40px;
  }
}
</style>
