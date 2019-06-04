

import { configure } from '@storybook/vue';

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'

function loadStories() {
  const req = require.context('../src/stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);