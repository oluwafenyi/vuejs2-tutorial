import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios-auth.js';
import globalAxios from 'axios';

import router from './router.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
  },
  mutations: {
    authUser(state, userData) {
        state.idToken = userData.token;
        state.userId = userData.userId;
    },
    clearAuthData(state) {
        state.idToken = null;
        state.userId = null;
    },
    storeUser(state, user) {
        state.user = user;
    }
  },
  actions: {
    setLogoutTimer({ dispatch }, expirationTime) {
        setTimeout(() => {
            dispatch('logout');
        }, expirationTime * 1000);
    },
    storeUser({ state }, userData) {
        if (!state.idToken) {
            return;
        }
        globalAxios.post('/user.json' + '?auth=' + state.idToken, userData)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    signup({ commit, dispatch }, authData) {
        axios.post(':signUp?key=AIzaSyAo0GsGb7vq1rHxHD5_m5iuZHS1LumcPDw', {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
            })
            .then((response) => {
                console.log(response);

                commit('authUser', {
                    token: response.data.idToken,
                    userId: response.data.localId,
                });

                const now = new Date();
                const expirationDate = new Date(now.getTime() + (response.data.expiresIn * 1000));
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('expires', expirationDate);

                dispatch('storeUser', authData);
                dispatch('setLogoutTimer', response.data.expiresIn);
            })
            .catch((err) => {
            console.log(err);
            });
    },
    login({ commit, dispatch }, authData) {
        axios.post(':signInWithPassword?key=AIzaSyAo0GsGb7vq1rHxHD5_m5iuZHS1LumcPDw', {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
            })
            .then((response) => {
                console.log(response);

                commit('authUser', {
                    token: response.data.idToken,
                    userId: response.data.localId,
                });

                const now = new Date();
                const expirationDate = new Date(now.getTime() + (response.data.expiresIn * 1000));
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('expires', expirationDate);

                dispatch('setLogoutTimer', response.data.expiresIn);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    tryAutoLogin({ commit }) {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }
        const expirationDate = localStorage.getItem('expires');
        const now = new Date();
        if (now >= expirationDate) {
            return;
        } else {
            const userId = localStorage.getItem('userId');
            commit('authUser', {
                idToken: token,
                userId
            });
        }
    },
    logout({ commit }) {
        commit('clearAuthData');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expires');
        router.replace('/signin');
    },
    fetchUser({ commit, state }) {
        if (!state.idToken) {
            return;
        }
        globalAxios.get('/user.json' + '?auth=' + state.idToken)
            .then((response) => {
                const data = response.data;
                const users = [];

                Object.entries(data).forEach((datum) => {
                    const user = datum[1];
                    user.id = datum[0];
                    users.push(user);
                });

                console.log(users);
                commit('storeUser', users[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }
  },
  getters: {
    user(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.idToken !== null;
    },
  }
});