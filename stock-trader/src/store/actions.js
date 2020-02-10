const buy = ({ commit }, obj) => {
    commit('buy', obj);
}

const sell = ({ commit }, obj) => {
    commit('sell', obj);
}

const endDay = ({ commit }) => {
    commit('endDay');
}

const save = ({ commit }) => {
    commit('save');
}

const load = ({ commit }) => {
    commit('load');
}

export default {
    buy,
    sell,
    endDay,
    save,
    load
}
