const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  loginModal: state => typeof(state.loginModal)=="undefined"?false:state.loginModal,
  registerModal: state => typeof(state.registerModal)=="undefined"?false:state.registerModal,
  resetPwdModal: state => typeof(state.resetPwdModal)=="undefined"?false:state.resetPwdModal,
}
export default getters
