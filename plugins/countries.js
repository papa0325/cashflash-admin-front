import * as countriesPlugin from 'i18n-iso-countries';

// eslint-disable-next-line func-names
export default function (ctx, inject) {
  inject('countries', countriesPlugin);
}
