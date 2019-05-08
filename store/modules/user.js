import { getToken, setToken, removeToken } from "~/middleware/auth";
import { getData } from "~/plugins/axios.js";

const state = {
  token: getToken()==null||getToken()==""?"":getToken(),
  name: "",
  avatar: "",
  introduction: "",
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  // user login
  userLogin({ commit }, userInfo) {
    const { userName, userPwd } = userInfo;
    return new Promise((resolve, reject) => {
      getData("/jm-user/user/door-login", "post", {
        userName: userName,
        userPwd: userPwd
      })
        .then(res => {
          if (res.data.code == 20000) {
            setToken(res.data.token);
            commit("SET_TOKEN", res.data.token);
            commit("SET_AVATAR", "/avatar-img/" + res.data.avatar);
            commit("SET_NAME", userName);
          }
          if (res.data.code == 50008||res.data.code == 50001||res.data.code == 50014) {
            this.$Message.error(res.data.message+"!");
          }

          resolve();
        })
        .catch(error => {
          console.log(error);
          
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit("SET_TOKEN", "");
      commit("SET_ROLES", []);
      commit("SET_AVATAR", "");
      commit("SET_NAME", "");
      removeToken();
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
