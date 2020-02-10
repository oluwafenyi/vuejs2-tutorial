import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
        funds: 10.00,
        prices: [
            { name: 'BMW', price: .11 },
            { name: 'Google', price: .2 },
            { name: 'Apple', price: .25 },
            { name: 'Twitter', price: .008 },
        ],
        boughtStocks: [],
    },
    getters,
    mutations,
    actions,
})

