import vue from 'vue'
import Vuex from 'vuex'
// import VuexPersist from 'vuex-persist'
// const vuexLC = new VuexPersist ({
//     key:'vuex',    
//     storage: window.localStorage
//  });
import createPersistedState from "vuex-persistedstate"
vue.use(Vuex)
export default new Vuex.Store({
	state: { 
	
	},
	mutations: {
	},
	getters: {
		getMenu(state) {
			return state.menu
		}
	},
	plugins: [createPersistedState({
		storage: window.sessionStorage
	})]
})