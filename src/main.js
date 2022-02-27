import Vue from 'vue';
import App from './App.vue';
import './styles/main.scss';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vSelect from 'vue-select';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

Vue.config.productionTip = false;

Vue.component('v-select', vSelect);

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount('#app');
