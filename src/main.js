import 'core-js/stable';
import 'regenerator-runtime/runtime';
import OrgUsageDashboard from './OrgUsageDashboard.vue';

new Vue({
  el: '#organization-dashboard',
  render: (createElement) => {
    return createElement(OrgUsageDashboard);
  }
});
