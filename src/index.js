// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'

// resolve charts dependency
Charts(FusionCharts);

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
