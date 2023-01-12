import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  state: {
    mostPopularArticles: [],
    mostRecentArticles: []
  },
  getters: {
  },
  mutations: {
    CHANGE_POPULAR_SECTION(state, dataPopular){
      state.mostPopularArticles = dataPopular;
      //changement de la valeur de mostPopularArticles
    },
    CHANGE_RECENT_SECTION(state, dataRecent){
      state.mostRecentArticles = dataRecent;
      //changement de la valeur de mostRecentrArticles

      //Les console.log:json de mostRecentArticles,json de mostRecentArticles[0] et mostRecentArticles[0].titre
      console.log("dans store/index.js, dans la mutation CHANGE_RECENT_SECTION, JSON.stringify(state.mostRecentArticles) :"+JSON.stringify(state.mostRecentArticles));
      console.log("dans store/index.js, dans la mutation CHANGE_RECENT_SECTION, JSON.stringify(state.mostRecentArticles[0]) :"+JSON.stringify(state.mostRecentArticles[0]));
      console.log("dans store/index.js, dans la mutation CHANGE_RECENT_SECTION, state.mostRecentArticles[0].titre :"+state.mostRecentArticles[0].titre);
    }
  },
  actions: {
    /*async*/ updatePopular(context, dataPopular){
      /*await*/ axios.get("http://localhost:3000/api/use/get/popular")
      .then( res => {
        dataPopular = res.data;
        //récupération de la nouvelle valeur à attribuer à mostPopularArticles, à partir des données de la base de données
        context.commit('CHANGE_POPULAR_SECTION', dataPopular)
      })
      .catch(err => console.log("err: "+err))
    },
    /*async*/ updateRecent(context, dataRecent){
      /*await*/ axios.get("http://localhost:3000/api/use/get/recent")
      .then( res => {
        dataRecent = res.data;
        //récupération de la nouvelle valeur à attribuer à mostRecentArticles, à partir des données de la base de données
        console.log("dans store/index.js, dans l'action updateRecent \ndispatchée dans publishView.vue, JSON.stringify(dataRecent):\n"+JSON.stringify(dataRecent));
        context.commit('CHANGE_RECENT_SECTION', dataRecent)
      })
      .catch(err => console.log("err: "+err))
    }
  },
  modules: {
  }
})
