import { createStore } from "vuex";

export default createStore({
  state: {
    available: [], //varibali qe do te mbaje objektet
  },
  mutations: {
    generateMore: (state) => {
      let array = []; //array qe do mbaje objektet e reja 
      let items = state.available.length || 0; /* dukeqene se heren e pare gjatesia e array do jet undefined i
       japim vleren 0 variablit qe do percaktoje se ku do filloje iterimi*/
      for (let i = items; i < items + 20; i++) {
        //shtojme objektet e reja 
        array.push({
          name: `Emri ${i + 1}`,
          price: i * 10 + 5,
          qty: i * 2 + 1,
          articleId: i,
        });
      }
      //Bashkojme  objektet e reja me ato ekzistentet  
      state.available = state.available.concat(array);

    },
  },
  getters: {
    getAddedArtificals: (state) => {
      return state.available;
    },
  },
});
