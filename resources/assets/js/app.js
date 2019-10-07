
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', require('./App.vue'));

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors';
import router from './router/'
import { store } from './store/';

Vue.use(Vuetify,{
    theme: {
    primary: colors.purple.base, // #E53935
    secondary: colors.purple.lighten4, // #FFCDD2
    accent: colors.purple.base // #3F51B5
  },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {
      },
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
});

window.EventBus = new Vue();

const app = new Vue({
    store,
    router,
    el: '#app'
});
