export default {
  state() {
    return {
      filterData: [],
    }
  },
  getters: {
    filterDataStore: state => state.filterData,
  },
  actions: {
    filterDataAction({ commit }, payloads) {
      commit('filterDataStore', payloads)
    },
  },
  mutations: {
    filterDataStore: (state, data) => {
      state.filterData = data
    },
  }
}
