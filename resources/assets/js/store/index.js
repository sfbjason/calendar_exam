import Vue from 'vue'
import Vuex from 'vuex'

// modules
import loading from './modules/loading';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        loading,
    }
})
