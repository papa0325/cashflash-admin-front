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
      <!--   v-for   -->
      <div class="team-members__cards">
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
                  @click="editMember()"
                >
                  Edit
                </base-button>
                <base-button
                  type="danger"
                >
                  Delete
                </base-button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h3 class="mb-3">
              Contacts
            </h3>
            <div class="info__items">
              <div class="info__item">
                <h4 class="info__label">
                  Email
                </h4>
                <p>
                  mail@mail.com
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  Email
                </h4>
                <p>
                  mail@mail.com
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  Email
                </h4>
                <p>
                  mail@mail.com
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  Email
                </h4>
                <p>
                  mail@mail.com
                </p>
              </div>
            </div>
            <h3 class="mb-3 mt-3">
              Education
            </h3>
            <div class="info__items">
              <div class="info__item">
                <h4 class="info__label">
                  University
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  University
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  University
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
                </p>
              </div>
            </div>
            <h3 class="mb-3 mt-3">
              Language
            </h3>
            <div class="info__items">
              <div class="info__item">
                <h4 class="info__label">
                  English
                </h4>
                <p>
                  100%
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  English
                </h4>
                <p>
                  100%
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  English
                </h4>
                <p>
                  100%
                </p>
              </div>
            </div>
            <h3 class="mb-3 mt-3">
              Expertise
            </h3>
            <div class="info__items_full">
              <div class="info__item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id congue mi scelerisque posuere lacus. Sit vel a pellentesque neque. Gravida semper consequat dictum lacus, in ac nunc donec sit. Faucibus nunc, tristique imperdiet viverra vel ut semper ut euismod. Nibh non odio sed at. Hendrerit nisi, sit sed placerat turpis nam nisl ut. Fermentum tempus nisi, in eget. Porta ipsum blandit ut phasellus dui hendrerit. Interdum lectus aenean non ornare pulvinar mauris pretium.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                  @click="editMember()"
                >
                  Edit
                </base-button>
                <base-button
                  type="danger"
                >
                  Delete
                </base-button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h3 class="mb-3">
              Contacts
            </h3>
            <div class="info__items">
              <div class="info__item">
                <h4 class="info__label">
                  Email
                </h4>
                <p>
                  mail@mail.com
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  Email
                </h4>
                <p>
                  mail@mail.com
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  Email
                </h4>
                <p>
                  mail@mail.com
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  Email
                </h4>
                <p>
                  mail@mail.com
                </p>
              </div>
            </div>
            <h3 class="mb-3 mt-3">
              Education
            </h3>
            <div class="info__items">
              <div class="info__item">
                <h4 class="info__label">
                  University
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  University
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  University
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
                </p>
              </div>
            </div>
            <h3 class="mb-3 mt-3">
              Language
            </h3>
            <div class="info__items">
              <div class="info__item">
                <h4 class="info__label">
                  English
                </h4>
                <p>
                  100%
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  English
                </h4>
                <p>
                  100%
                </p>
              </div>
              <div class="info__item">
                <h4 class="info__label">
                  English
                </h4>
                <p>
                  100%
                </p>
              </div>
            </div>
            <h3 class="mb-3 mt-3">
              Expertise
            </h3>
            <div class="info__items_full">
              <div class="info__item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id congue mi scelerisque posuere lacus. Sit vel a pellentesque neque. Gravida semper consequat dictum lacus, in ac nunc donec sit. Faucibus nunc, tristique imperdiet viverra vel ut semper ut euismod. Nibh non odio sed at. Hendrerit nisi, sit sed placerat turpis nam nisl ut. Fermentum tempus nisi, in eget. Porta ipsum blandit ut phasellus dui hendrerit. Interdum lectus aenean non ornare pulvinar mauris pretium.
                </p>
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
  data() {
    return {

    };
  },
  methods: {
    editMember() {
      this.$router.push('/settings/team-members/member-page/1');
    },
  },
};
</script>
<style lang="scss" scoped>
.team-members {
  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
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
//.document {
//  &__btn-label {
//    font-size: 14px;
//    line-height: 19px;
//    color: #525F7F;
//  }
//}
</style>
