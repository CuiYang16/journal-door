import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', false, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const mutations = {
  SET_LOGIN_MODAL: (state, loginModal) => {
    state.loginModal = loginModal;
  },
  SET_REGISTER_MODAL: (state, registerModal) => {
    state.registerModal = registerModal;
  },
  SET_RESET_MODAL: (state, resetPwdModal) => {
    state.resetPwdModal = resetPwdModal;
  },
}

const store = ()=>{ return new Vuex.Store({
  modules,
  getters,
  mutations
})
}
export default store
