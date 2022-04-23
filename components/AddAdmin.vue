<template>
  <div class="">
    <base-button
      icon
      type="primary"
      style="height: 46px; margin-left: 15px; padding: 0 40px"
      @click="openAddModal"
    >
      Add admin
    </base-button>
    <modal
      :show.sync="addAdminModal"
      modal-classes="modal-secondary"
    >
      <validation-observer
        v-slot="{handleSubmit}"
        ref="formValidator"
      >
        <form
          role="form"
          @submit.prevent="handleSubmit(addAdmin)"
        >
          <base-input
            v-model="model.email"
            alternative
            class="mb-3"
            prepend-icon="ni ni-email-83"
            placeholder="Email"
            autocomplete="off"
            name="Email"
            :rules="{required: true, email: true}"
          />
          <el-select
            v-model="model.role"
            class="select-primary pagination-select mt-4"
            placeholder="Role"
            style="width: 100%"
          >
            <el-option
              v-for="item in roles"
              :key="item.value"
              class="select-primary"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <button
            type="submit"
            class="btn btn-primary mt-5"
            style="width: 100%"
          >
            Add
          </button>
        </form>
      </validation-observer>
    </modal>
  </div>
</template>

<script>
import { Option, Select } from 'element-ui';
import Modal from '~/components/argon-core/Modal.vue';

export default {
  name: 'AddAdmin',
  components: {
    Modal,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      addAdminModal: false,
      model: {
        email: '',
        role: '',
      },
      roles: [
        { value: '1', label: 'Admin' },
        { value: '2', label: 'Support' },
      ],
    };
  },
  methods: {
    openAddModal() {
      this.addAdminModal = true;
      this.model = {
        email: '',
        role: '',
      };
    },
    async addAdmin() {
      if (this.model.role) {
        try {
          const response = await this.$api.addAdmin(this.model);
          this.$notify({
            type: 'success',
            message: response.result.message,
          });
          this.addAdminModal = false;
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: e.response.data.msg,
          });
        }
      } else {
        this.$notify({
          type: 'danger',
          message: 'Select a role',
        });
      }
    },
  },
};
</script>

<style scoped>

</style>
