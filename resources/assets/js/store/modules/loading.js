const state = { 
  loading: false
};

const namespaced = true;

const mutations = {
  loaidng: (state, payload) => {
    state.loading = payload;
  }
};

const getters = {
  loadingState: state => {
    return state.loading;
  },
};

const actions = {
  EmitLoading: (context, payload) => {
    context.commit('loaidng', payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced
};