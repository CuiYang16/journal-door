import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: "yourkey",
      paths: [],
      storage: window.sessionStorage
    })(store);
  });
};
