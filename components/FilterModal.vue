<template>
  <div class="">
    <base-button
      icon
      type="primary"
      style="height: 46px; margin-left: 15px; padding: 0 40px"
      @click="showFilterModal = true"
    >
      Filter
    </base-button>
    <modal
      :show.sync="showFilterModal"
      modal-classes="modal-secondary"
    >
      <base-checkbox>
        By status
      </base-checkbox>
      <el-select
        v-model="type"
        class="select-primary pagination-select mt-4"
        placeholder="Per page"
        style="width: 100%"
      >
        <el-option
          v-for="item in types"
          :key="item.value"
          class="select-primary"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <base-checkbox class="mt-4">
        By country
      </base-checkbox>
      <el-select
        v-model="country"
        class="select-primary pagination-select mt-4"
        placeholder="Per page"
        style="width: 100%"
      >
        <el-option
          v-for="item in countries"
          :key="item.value"
          class="select-primary"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <template slot="footer">
        <base-button
          icon
          type="primary"
          style="height: 46px; width: 100%"
          @click="showFilterModal = false"
        >
          Show results
        </base-button>
      </template>
    </modal>
  </div>
</template>

<script>
import { Option, Select } from 'element-ui';
import Modal from '~/components/argon-core/Modal.vue';

export default {
  name: 'FilterModal',
  components: {
    Modal,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      showFilterModal: false,
      country: 'USA',
      countries: [
        { value: 'USA', label: 'USA' },
        { value: 'CHINA', label: 'CHINA' },
      ],
      type: 'Verified',
      types: [
        { value: 'Verified', label: 'Verified' },
        { value: 'Unverified', label: 'Unverified' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
