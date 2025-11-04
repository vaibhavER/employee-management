import { firebase, collection, getDocs, query, orderBy } from '@/utils/index.js'
export default {
  state() {
    return {
      getAllEmp: '',
      loading: false
    }
  },
  getters: {
    getAllEmpStore: state => state.getAllEmp,
  },
  actions: {
    async getAllEmpAction({ commit }, payloads) {
      this.loading = true
      let users = [];
      commit('getAllEmpStore', { users, loading: this.loading })
      try {
        const q = query(collection(firebase, 'users'), orderBy('createdAt', 'desc')) //randomly [ick if not used orderby]
        const snapshot = await getDocs(q)
        users = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        console.log(users)
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
        commit('getAllEmpStore', { users, loading: this.loading })
      }
    },


  },
  mutations: {
    getAllEmpStore: (state, data) => {
      state.getAllEmp = data
    },
  }
}
