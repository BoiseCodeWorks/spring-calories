import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


vue.use(vuex)

var api = axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  timeout: 3000,
  headers: {
    'x-app-key': "8120134b8a361912934e53e415fffd2c",
    "x-app-id": "814a7db9"
  }
})

export default new vuex.Store({
  state: {
    results: [],
    myFood: [],
    totalCals: 0
  },
  mutations: {
    addToMyFood(state, food){
      state.myFood.push(food)
    },
    setResults(state, results){
      state.results = results
    },
    addCals(state, payload){
      state.totalCals+=payload
    }
  },
  actions: {
    search({commit, dispatch}, payload){
      api.post('', {query: payload})
        .then(res=>{
          commit("setResults", res.data.foods)
        })
        .catch(err=>{
          alert(err.response.data.message)
        })
    },
    addToMyFood({commit, dispatch}, payload){
      commit('addToMyFood', payload)
      dispatch('addCals', payload.nf_calories)
    },
    addCals({commit, dispatch}, payload){
      commit('addCals', payload)
    }
  }
})