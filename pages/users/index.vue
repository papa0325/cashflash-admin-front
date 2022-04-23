<template>
  <div class="content">
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 d-inline-block mb-0">
            Users
          </h6>
          <nav
            aria-label="breadcrumb"
            class="d-none d-md-inline-block ml-md-4"
          >
            <route-bread-crumb />
          </nav>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div>
        <card
          class="no-border-card"
          body-classes="px-0 pb-1"
          footer-classes="pb-2"
        >
          <template slot="header">
            <h3 class="mb-0">
              Users
            </h3>
          </template>
          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                v-model="pagination.perPage"
                class="select-primary pagination-select"
                placeholder="Per page"
              >
                <el-option
                  v-for="item in pagination.perPageOptions"
                  :key="item"
                  class="select-primary"
                  :label="item"
                  :value="item"
                />
              </el-select>

              <div class="d-flex">
                <div>
                  <base-input
                    v-model="searchQuery"
                    prepend-icon="fas fa-search"
                    placeholder="Search..."
                  />
                </div>
                <div class="">
                  <FilterModal />
                </div>
              </div>
            </div>
            <el-table
              :data="queriedData"
              row-key="id"
              header-row-class-name="thead-light"
              class="table-responsive table-flush"
              @sort-change="sortChange"
            >
              <el-table-column
                label="Author"
                min-width="310px"
                prop="name"
                sortable
              >
                <div
                  slot-scope="{row}"
                  @click="goToUserPage(row)"
                >
                  <img
                    :src="row.image"
                    class="avatar rounded-circle mr-3"
                    style="height: 25px; width: 25px"
                  >
                  <b>{{ row.name }}</b>
                </div>
              </el-table-column>
              <el-table-column
                v-for="column in tableColumns"
                :key="column.label"
                v-bind="column"
              />
              <el-table-column
                min-width="180px"
                align="right"
                label="Actions"
              >
                <div slot-scope="{row}">
                  <el-dropdown
                    trigger="click"
                    class="dropdown"
                  >
                    <span
                      class="btn btn-sm btn-icon-only text-light"
                      aria-label="Dropdown menu"
                    >
                      <i class="fas fa-ellipsis-v mt-2" />
                    </span>
                    <el-dropdown-menu
                      slot="dropdown"
                      class="dropdown-menu dropdown-menu-arrow show"
                      role="list"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                      >Action</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Another action</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Something else here</a>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </el-table-column>
            </el-table>
          </div>
          <div
            slot="footer"
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
          >
            <div class="">
              <p class="card-category">
                Showing {{ from + 1 }} to {{ to }} of {{ total }} entries

                <span v-if="selectedRows.length">
                  &nbsp; &nbsp; {{ selectedRows.length }} rows selected
                </span>
              </p>
            </div>
            <base-pagination
              v-model="pagination.currentPage"
              class="pagination-no-border"
              :per-page="pagination.perPage"
              :total="total"
            />
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Table, TableColumn, Select, Option, Dropdown, DropdownItem, DropdownMenu,
} from 'element-ui';
import RouteBreadCrumb from '@/components/argon-core/Breadcrumb/RouteBreadcrumb';
import { BasePagination } from '@/components/argon-core';
import clientPaginationMixin from '~/components/tables/PaginatedTables/clientPaginationMixin';
import users from '~/components/tables/users2';
import FilterModal from '~/components/FilterModal';

export default {
  middleware: 'auth',
  components: {
    BasePagination,
    RouteBreadCrumb,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    FilterModal,
  },
  mixins: [clientPaginationMixin],
  layout: 'DashboardLayout',
  data() {
    return {
      propsToSearch: ['name', 'email', 'age'],
      tableColumns: [
        {
          prop: 'name',
          label: 'Name',
          minWidth: 160,
          sortable: true,
        },
        // {
        //   prop: 'position',
        //   label: 'Position',
        //   minWidth: 220,
        //   sortable: true,
        // },
        // {
        //   prop: 'city',
        //   label: 'Office',
        //   minWidth: 135,
        //   sortable: true,
        // },
        // {
        //   prop: 'age',
        //   label: 'Age',
        //   minWidth: 100,
        //   sortable: true,
        // },
        {
          prop: 'createdAt',
          label: 'Start Date',
          minWidth: 150,
          sortable: true,
        },
        // {
        //   prop: 'salary',
        //   label: 'Salary',
        //   minWidth: 120,
        //   sortable: true,
        // },
      ],
      tableData: users,
      selectedRows: [],
    };
  },
  methods: {
    goToUserPage(row) {
      this.$router.push(`/users/user-page/${row.id}`);
    },
  },
};
</script>
<style>
.no-border-card .card-footer{
  border-top: 0;
}
</style>
