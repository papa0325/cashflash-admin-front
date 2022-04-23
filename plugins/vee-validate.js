import Vue from 'vue';

import {
  ValidationProvider,
  ValidationObserver,
  extend, configure,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import {
  required, email, length, numeric, confirmed, max, min_value, max_value,
} from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
  });
});
