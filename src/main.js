import Vue from 'vue';
import Parallax from './directives/Parallax';
import FadeIn from './directives/FadeIn';
import App from './App.vue';
import ScrollTo from '@/directives/ScrollTo.js';

window.$ = require('jquery');

Vue.config.productionTip = false;
Vue.use('parallax', Parallax);
Vue.use('fade-in', FadeIn);
Vue.use('scroll-to', ScrollTo);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
