import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import { dateFilter, dateTimeFilter } from './utils/date';

Vue.config.productionTip = false

Vue.filter('date', dateFilter);
Vue.filter('dateTime', dateTimeFilter);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
