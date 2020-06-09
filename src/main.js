import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_ANALYTICS,
  router
});


new Vue({ el: '#app', router, render: h => h(App) })
