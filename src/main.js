import Vue from 'vue';
import Parallax from './directives/Parallax.js';
import App from './App.vue';

window.$ = require('jquery');

Vue.config.productionTip = false;
Vue.use('parallax', Parallax);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
