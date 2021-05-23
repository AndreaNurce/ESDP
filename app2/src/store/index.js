import { createStore } from "vuex";

export default createStore({
  state: {
    jobs: [],
    filteredJobs: [],
  },
  mutations: {
    filterJobs(state, str) {
      if (!str) {
        state.filteredJobs = state.jobs;
      } else {
        state.filteredJobs = state.jobs.filter((job) => {
          for (let key in job) {
            if (job[key].includes(str)) {
              return job;
            }
          }
        });
      }
    },
  },
  actions: {},
  modules: {},
});
