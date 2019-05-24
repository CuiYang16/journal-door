<template>
  <div class="layout" id="layout">
    <Layout>
      <Header>
        <div class="top-menu">
          <Menu mode="horizontal" theme="light" active-name="1">
            <div class="layout-nav">
              <MenuItem name="2" @click.native="userLogin" v-if="!(avatar||name)">登录</MenuItem>
              <MenuItem name="3" @click.native="userRegister" v-if="!(avatar||name)">注册</MenuItem>
              <Submenu name="4" v-if="avatar&&name">
                <template slot="title">
                  <Avatar :src="avatar" size="small"/>
                  &nbsp;{{name}}
                </template>
                <MenuItem name="4-1" @click.native="userInfoCenter">个人中心</MenuItem>
                <MenuItem name="4-2" @click.native="loginOut">退出登录</MenuItem>
              </Submenu>
            </div>
          </Menu>
          <span class="welcome">欢迎光临此网站!</span>
        </div>

        <div class="content-row">
          <Row :gutter="120">
            <Col span="3" offset="2">
              <img :src="'/slide-img/logo.png'" alt="无图片" width="200" height="80">
            </Col>
            <Col span="14" offset="1">
              <div class="search">
                <div class="search-select">
                  <select v-model="searchSelectValue">
                    <option
                      v-for="item in selectValue"
                      :value="item.value"
                      :key="item.value"
                    >{{ item.label }}</option>
                  </select>
                </div>
                <div class="l">
                  <input type="text" class="q" placeholder="请输入关键词" v-model="searchValue">
                </div>
                <div class="r">
                  <button type="submit" class="s" @click="searchJournal">搜索</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div class="nav-menu">
          <template>
            <Menu mode="horizontal" theme="dark" active-name="2">
              <div class="nav-menu-item">
                <MenuItem
                  name="1"
                  style="padding:0 36px;border-left:1px solid #ffffff;border-right:1px solid #ffffff;background-color:#808695"
                >
                  <Icon type="ios-apps" />全部期刊杂志分类
                </MenuItem>
                <MenuItem name="2" style="margin-left:10px">
                  <Icon type="ios-home" />
                  <nuxt-link to="/">首页</nuxt-link>
                </MenuItem>

                <MenuItem name="3">
                 <Icon type="ios-build" />
                  <nuxt-link to="/journalList">杂志期刊分类</nuxt-link>
                </MenuItem>
                
                <MenuItem name="5">
                  <Icon type="md-list-box" />
                  <nuxt-link to="/fairList">书展信息</nuxt-link>
                </MenuItem>
                <MenuItem name="4" v-show="getToken()!=null&&getToken()!=''">
                  <Icon type="ios-cart" />
                  <nuxt-link to="/borrowInfo">已借阅</nuxt-link>
                </MenuItem>
                <MenuItem name="6" v-show="getToken()!=null&&getToken()!=''">
                  <Icon type="ios-book" />
                  <nuxt-link to="/joinFairList">已参加书展</nuxt-link>
                </MenuItem>
              </div>
            </Menu>
          </template>
        </div>
      </Header>
      <Content>
        <Row>
          <Col span="22" offset="1">
            <div class="content-div">
              <nuxt/>
            </div>
          </Col>
          <Col span="1"></Col>
        </Row>
      </Content>

      <Footer class="layout-footer-center">2018-2019 &copy; cuiyang</Footer>
    </Layout>
    <BackTop></BackTop>
    <div class="modals">
      <!-- 登录 -->
      <Modal
        v-model="loginModal"
        title="登录"
        :mask-closable="false"
        width="450px"
        @on-cancel="onCancel"
      >
        <div class="modal-content">
          <Form ref="loginForm" :model="loginForm" :rules="loginRule" :label-width="60">
            <FormItem prop="userName" label="用户名">
              <Input type="text" v-model="loginForm.userName" placeholder="请输入用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="userPwd" label="密码">
              <Input type="password" v-model="loginForm.userPwd" placeholder="请输入密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="ccode" label="验证码">
              <Input type="text" v-model="loginForm.ccode" placeholder="请输入验证码">
                <Icon type="ios-key-outline" slot="prepend"></Icon>
                <span slot="append" style="font-weight:700;letter-spacing:3px;">{{ccode}}</span>
              </Input>
            </FormItem>
          </Form>

          <span
            class="go-register"
            style="cursor: pointer; margin-left:280px;color: #2b85e4;height:15px;line-height:15px;"
            @click="goResetPwd"
          >忘记密码？</span>
          <span
            class="go-register"
            style="cursor: pointer; color: #2b85e4;height:15px;line-height:15px;"
            @click="goRegister"
          >
            去注册
            <Icon type="md-arrow-round-forward"/>
          </span>
        </div>
        <div slot="footer">
          <Button
            type="primary"
            long
            @click="loginSubmit('loginForm')"
            style="background-color: #2b85e4;border-color: #2b85e4;"
          >登录</Button>
        </div>
      </Modal>
      <!-- 注册 -->
      <Modal v-model="registerModal" title="注册" :mask-closable="false" width="470px">
        <div class="modal-content">
          <Form ref="registerForm" :model="registerForm" :rules="registerRule" :label-width="80">
            <FormItem prop="userName" label="用户名">
              <Input type="text" v-model="registerForm.userName" placeholder="请输入用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="userPwd" label="密码">
              <Input type="password" v-model="registerForm.userPwd" placeholder="请输入密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="confirmPwd" label="确认密码">
              <Input type="password" v-model="registerForm.confirmPwd" placeholder="请输入确认密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="userSex" label="性别">
              <RadioGroup v-model="registerForm.userSex">
                <Radio label="1">
                  <Icon type="ios-man-outline"></Icon>
                  <span>男</span>
                </Radio>
                <Radio label="0">
                  <Icon type="ios-woman-outline"/>
                  <span>女</span>
                </Radio>
              </RadioGroup>
            </FormItem>
            <FormItem prop="userPhone" label="联系电话">
              <Input type="text" v-model="registerForm.userPhone" placeholder="请输入联系电话">
                <Icon type="ios-call-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="userEmail" label="邮箱">
              <Input type="text" v-model="registerForm.userEmail" placeholder="请输入邮箱">
                <Icon type="ios-mail-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem label="用户头像" prop="avatarName">
              <Input type="text" v-model="registerForm.avatarName" style="display:none;"></Input>
              <template>
                <div class="demo-upload-list" v-for="item in uploadList" :key="item.url">
                  <template v-if="item.status === 'finished'">
                    <img :src="item.url" width="60" height="60">
                    <div class="demo-upload-list-cover">
                      <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                      <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                    </div>
                  </template>
                  <template v-else v-show="uploadList.length==0">
                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                  </template>
                </div>
                <Upload
                  ref="upload"
                  :show-upload-list="false"
                  :default-file-list="defaultList"
                  :on-success="handleSuccess"
                  :format="['jpg','jpeg','png']"
                  :max-size="512"
                  :on-format-error="handleFormatError"
                  :on-exceeded-size="handleMaxSize"
                  :before-upload="handleBeforeUpload"
                  type="drag"
                  action="http://127.0.0.1:8888/jm-user/user/upload/door-user-img"
                  style="display: inline-block;width:58px;"
                >
                  <div style="width: 58px;height:58px;line-height: 58px;">
                    <Icon type="ios-camera" size="20"></Icon>
                  </div>
                </Upload>
                <Modal title="预览" v-model="visible">
                  <img :src="'/avatar-img/' + imgName" v-if="visible" style="width: 100%">
                </Modal>
              </template>
            </FormItem>
          </Form>
          <span
            class="go-login"
            style="cursor: pointer;color: #2b85e4;height:15px;line-height:15px;"
            @click="goLogin"
          >
            <Icon type="md-arrow-round-back"/>去登录
          </span>
        </div>
        <div slot="footer">
          <Button
            type="primary"
            long
            @click="registerSubmit('registerForm')"
            style="background-color: #2b85e4;border-color: #2b85e4;"
          >注册</Button>
        </div>
      </Modal>

      <!-- 忘记密码 -->
      <Modal v-model="resetPwdModal" title="忘记密码" :mask-closable="false" width="470px">
        <div class="modal-content">
          <Form ref="resetPwdForm" :model="resetPwdForm" :rules="resetPwdRule" :label-width="80">
            <FormItem prop="userName" label="用户名">
              <Input type="text" v-model="resetPwdForm.userName" placeholder="请输入用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="userPwd" label="密码">
              <Input type="password" v-model="resetPwdForm.userPwd" placeholder="请输入密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="confirmPwd" label="确认密码">
              <Input type="password" v-model="resetPwdForm.confirmPwd" placeholder="请输入确认密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
          </Form>
          <span
            class="go-login"
            style="cursor: pointer;color: #2b85e4;height:15px;line-height:15px;"
            @click="goLogin"
          >
            <Icon type="md-arrow-round-back"/>去登录
          </span>
          <span
            class="go-register"
            style="cursor: pointer; margin-left:330px; color: #2b85e4;height:15px;line-height:15px;"
            @click="goRegister"
          >
            去注册
            <Icon type="md-arrow-round-forward"/>
          </span>
        </div>
        <div slot="footer">
          <Button
            type="primary"
            long
            @click="resetPwdSubmit('resetPwdForm')"
            style="background-color: #2b85e4;border-color: #2b85e4;"
          >确认修改</Button>
        </div>
      </Modal>

      <!-- 个人信息 -->
      <Modal v-model="userInfoModal" title="个人中心" :mask-closable="false" width="470px">
        <div class="modal-content">
          <Form ref="userInfoForm" :model="userInfoForm" :rules="userInfoRule" :label-width="80">
            <FormItem prop="userPwd" label="密码">
              <Input type="password" v-model="userInfoForm.userPwd" placeholder="请输入密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="confirmPwd" label="确认密码">
              <Input type="password" v-model="userInfoForm.confirmPwd" placeholder="请输入确认密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="userPhone" label="联系电话">
              <Input type="text" v-model="userInfoForm.userPhone" placeholder="请输入联系电话">
                <Icon type="ios-call-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="userEmail" label="邮箱">
              <Input type="text" v-model="userInfoForm.userEmail" placeholder="请输入邮箱">
                <Icon type="ios-mail-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem label="用户头像" prop="avatarName">
              <Input type="text" v-model="userInfoForm.avatarName" style="display:none;"></Input>
              <template>
                <div class="demo-upload-list" v-for="item in userInfoList" :key="item.url">
                  <template v-if="item.status === 'finished'">
                    <img :src="item.url" width="60" height="60">
                    <div class="demo-upload-list-cover">
                      <Icon type="ios-eye-outline" @click.native="handleUserView(item.name)"></Icon>
                      <Icon type="ios-trash-outline" @click.native="handleUserRemove(item)"></Icon>
                    </div>
                  </template>
                  <template v-else v-show="uploadList.length==0">
                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                  </template>
                </div>
                <Upload
                  ref="upload2"
                  :show-upload-list="false"
                  :default-file-list="userInfoList"
                  :on-success="handleUserSuccess"
                  :format="['jpg','jpeg','png']"
                  :max-size="512"
                  :on-format-error="handleFormatError"
                  :on-exceeded-size="handleMaxSize"
                  :before-upload="handleBeforeUpload"
                  type="drag"
                  action="http://127.0.0.1:8888/jm-user/user/upload/door-user-img"
                  style="display: inline-block;width:58px;"
                >
                  <div style="width: 58px;height:58px;line-height: 58px;">
                    <Icon type="ios-camera" size="20"></Icon>
                  </div>
                </Upload>
                <Modal title="预览" v-model="userVisible">
                  <img :src="'/avatar-img/' + userImgName" v-if="userVisible" style="width: 100%">
                </Modal>
              </template>
            </FormItem>
          </Form>
        </div>
        <div slot="footer">
          <Button
            type="primary"
            long
            @click="userInfoSubmit('userInfoForm')"
            style="background-color: #2b85e4;border-color: #2b85e4;"
          >修改个人信息</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import getters from "~/store/getters";
import { getData } from "~/plugins/axios.js";
import { getToken } from "~/middleware/auth";
export default {
  computed: {
    ...mapGetters(["name", "avatar"])
  },
  data() {
    const validateCCode = (rule, value, callback) => {
      if (value.toUpperCase() === "" || value.toUpperCase() != this.ccode) {
        callback(new Error("请输入正确验证码！"));
      } else {
        callback();
      }
    };
    const validatePwd = (rule, value, callback) => {
      var pPattern = /^.*(?=.{8,12})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*?_]).*$/;
      if (!pPattern.test(value)) {
        callback(new Error("8-12位，必须包括字母，数字，特殊字符！"));
      } else {
        callback();
      }
    };
    const validateConfirmPwd = (rule, value, callback) => {
      var pPattern = /^.*(?=.{8,12})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*?_]).*$/;
      if (!pPattern.test(value) || this.registerForm.userPwd != value) {
        callback(new Error("密码不一致，请重新确认！"));
      } else {
        callback();
      }
    };
    const validateName = async (rule, value, callback) => {
      var nPattern = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]){4,16}$/;
      if (!nPattern.test(value)) {
        callback(new Error("4-16位，可以包括字母，数字，汉字！"));
      } else {
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      var pPattern = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (!pPattern.test(value)) {
        callback(new Error("请正确输入手机号！"));
      } else {
        callback();
      }
    };
    const validateEmail = (rule, value, callback) => {
      var ePattern = /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-z]{2,}$/;
      if (!ePattern.test(value)) {
        callback(new Error("请正确输入邮箱！"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        userName: "",
        userPwd: "",
        ccode: ""
      },
      registerForm: {
        userName: "",
        userPwd: "",
        confirmPwd: "",
        userPhone: "",
        userEmail: "",
        userSex: "",
        avatarName: ""
      },
      resetPwdForm: {
        userName: "",
        userPwd: "",
        confirmPwd: ""
      },
      userInfoForm: {
        userName: "",
        userPwd: "",
        confirmPwd: "",
        userPhone: "",
        userEmail: "",
        userSex: "",
        avatarName: ""
      },
      loginRule: {
        userName: [
          {
            required: true,
            validator: validateName,
            trigger: "blur"
          }
        ],
        userPwd: [
          {
            required: true,
            validator: validatePwd,
            trigger: "blur"
          }
        ],
        ccode: [
          {
            required: true,
            validator: validateCCode,
            trigger: "blur"
          }
        ]
      },
      registerRule: {
        userName: [
          {
            required: true,
            validator: async (rule, value, callback) => {
              var nPattern = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]){4,16}$/;
              let val = "";
              await getData("/jm-user/user/validator-username", "get", {
                userName: value
              })
                .then(res => {
                  val = res.data.val;
                })
                .catch();
              if (val == 1) {
                callback(new Error("用户名已存在！"));
              }
              if (!nPattern.test(value)) {
                callback(new Error("4-16位，可以包括字母，数字，汉字！"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        userPwd: [
          {
            required: true,
            validator: validatePwd,
            trigger: "blur"
          }
        ],
        confirmPwd: [
          {
            required: true,
            validator: validateConfirmPwd,
            trigger: "blur"
          }
        ],
        userPhone: [
          {
            required: true,
            validator: validatePhone,
            trigger: "blur"
          }
        ],
        userEmail: [
          {
            required: true,
            validator: validateEmail,
            trigger: "blur"
          }
        ],
        userSex: [
          {
            required: true,
            message: "请选择性别",
            trigger: "change"
          }
        ],
        avatarName: [
          { required: true, message: "请上传头像", trigger: "change" }
        ]
      },
      userInfoRule: {
        userPwd: [
          {
            required: true,
            validator: validatePwd,
            trigger: "blur"
          }
        ],
        confirmPwd: [
          {
            required: true,
            validator: (rule, value, callback) => {
              var pPattern = /^.*(?=.{8,12})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*?_]).*$/;
              if (!pPattern.test(value) || this.userInfoForm.userPwd != value) {
                callback(new Error("密码不一致，请重新确认！"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        userPhone: [
          {
            required: true,
            validator: validatePhone,
            trigger: "blur"
          }
        ],
        userEmail: [
          {
            required: true,
            validator: validateEmail,
            trigger: "blur"
          }
        ],

        avatarName: [
          { required: true, message: "请上传头像", trigger: "change" }
        ]
      },
      resetPwdRule: {
        userName: [
          {
            required: true,
            validator: async (rule, value, callback) => {
              var nPattern = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]){4,16}$/;
              let val = "";
              await getData("/jm-user/user/validator-username", "get", {
                userName: value
              })
                .then(res => {
                  val = res.data.val;
                })
                .catch();
              if (val == 0) {
                callback(new Error("用户名不存在！"));
              }
              if (!nPattern.test(value)) {
                callback(new Error("4-16位，可以包括字母，数字，汉字！"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        userPwd: [
          {
            required: true,
            validator: validatePwd,
            trigger: "blur"
          }
        ],
        confirmPwd: [
          {
            required: true,
            validator: (rule, value, callback) => {
              var pPattern = /^.*(?=.{8,12})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*?_]).*$/;
              if (!pPattern.test(value) || this.resetPwdForm.userPwd != value) {
                callback(new Error("密码不一致，请重新确认！"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      },
      searchValue: "",
      searchSelectValue: "1",
      selectValue: [
        {
          value: "1",
          label: "名称"
        },
        {
          value: "2",
          label: "国内刊号"
        },
        {
          value: "3",
          label: "主办单位"
        }
      ],
      loginModal: false,
      registerModal: false,
      resetPwdModal: false,
      userInfoModal: false,
      ccode: "",
      defaultList: [],
      userInfoList: [],
      imgName: "",
      visible: false,
      userImgName: "",
      userVisible: false,
      uploadList: [],
      file: ""
    };
  },
  watch: {
    "$store.getters.loginModal": {
      handler(newValue) {
        this.loginModal = newValue;
        this.generatedCode();
      },
      deep: true
    },
    "$store.getters.registerModal": {
      handler(newValue) {
        this.registerModal = newValue;
      },
      deep: true
    },
    "$store.getters.resetPwdModal": {
      handler(newValue) {
        this.resetPwdModal = newValue;
      },
      deep: true
    }
  },
  methods: {
    getToken() {
      return getToken();
    },
    userLogin() {
      // this.loginModal = true;
      this.generatedCode();
      this.$store.commit("SET_LOGIN_MODAL", true);
    },
    onCancel() {
      this.$store.commit("SET_LOGIN_MODAL", false);
    },
    goRegister() {
      //this.loginModal = false;
      this.$store.commit("SET_LOGIN_MODAL", false);
      this.registerModal = true;
      this.resetPwdModal = false;
    },
    userRegister() {
      this.registerModal = true;
    },
    goLogin() {
      // this.loginModal = true;
      this.$store.commit("SET_LOGIN_MODAL", true);
      this.registerModal = false;
      this.resetPwdModal = false;
      this.generatedCode();
    },
    loginSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$store
            .dispatch("user/userLogin", this.loginForm)
            .then(() => {
              //this.loginModal = false;
              this.$store.commit("SET_LOGIN_MODAL", false);
              this.$nextTick(function() {
                this.$refs[name].resetFields();
              });
            })
            .catch(() => {
              this.$Message.error("登录失败，请确认用户信息!!");
              this.generatedCode();
            });
        } else {
          this.$Message.error("请正确填写登录信息!!");
        }
      });
    },
    loginOut() {
      this.$store
        .dispatch("user/logout")
        .then(() => {
          this.$router.push({
            path: "/",
            query: {}
          });
          this.$Message.success("退出登录成功!");
        })
        .catch(() => {
          this.$Message.error("退出登录失败，请刷新重试!!");
        });
    },
    registerSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          getData("/jm-user/user/insert-door-user", "post", {
            user: this.registerForm
          })
            .then(res => {
              if (res.data != 0) {
                this.$Message.success("注册成功!");
                this.registerModal = false;
                this.$nextTick(function() {
                  this.$refs[name].resetFields();
                });
              }
            })
            .catch(error => {
              this.$Message.error("注册失败，请刷新重试!");
            });
        } else {
          this.$Message.error("请正确填写注册信息!");
        }
      });
    },
    goResetPwd() {
      // this.loginModal = false;
      this.$store.commit("SET_LOGIN_MODAL", false);
      this.registerModal = false;
      this.resetPwdModal = true;
    },
    resetPwdSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.resetPwdModal = false;
          getData("/jm-user/user/update-pwd", "put", {
            userName: this.resetPwdForm.userName,
            userPwd: this.resetPwdForm.userPwd
          })
            .then(res => {
              if (res.data == 1) {
                this.$Message.success("修改密码成功!");
              } else {
                this.$Message.success("修改密码失败!");
              }
            })
            .catch(error => {
              console.log(error);

              this.$Message.success("修改密码失败!");
            });
        }
      });
    },
    userInfoCenter() {
      this.userInfoModal = true;
      getData("/jm-user/user/get-user-info", "get", { token: getToken() })
        .then(res => {
          this.userInfoForm = res.data;
          this.userInfoList = [];
          this.userInfoList.push({
            name: res.data.userHeadPortrait,
            url: "/avatar-img/" + res.data.userHeadPortrait,
            status: "finished"
          });
          this.userInfoForm.avatarName = res.data.userHeadPortrait;
        })
        .catch(error => {
          console.log(error);

          this.$Message.success("获取个人信息失败!");
        });
    },
    userInfoSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.userInfoModal = false;
          getData("/jm-user/user/update-door-user", "put", {
            user: this.userInfoForm
          })
            .then(res => {
              if (res.data == 1) {
                this.loginOut();
                this.$Message.success("修改个人信息成功,请重新登录!");
              }
            })
            .catch(error => {
              console.log(error);

              this.$Message.success("修改个人信息失败!");
            });
        }
      });
    },
    generatedCode() {
      const random = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      let code = "";
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      this.ccode = code;
    },
    searchJournal() {
      this.$router.push({
        path: "/searchResultInfo",
        query: {
          searchValue: this.searchSelectValue + "-*-" + this.searchValue.trim()
        }
      });
      this.searchValue = "";
    },
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleUserView(name) {
      this.userImgName = name;
      this.userVisible = true;
    },
    handleRemove(file) {
      getData("/jm-user/user/del-door-user", "delete", { fileName: file.name })
        .then(res => {
          if (res.data == 1) {
            this.uploadList = [];
            this.registerForm.avatarName = "";
          } else {
            this.$Notice.warning({
              title: "删除失败",
              desc: file.name + "删除失败，请刷新重试！"
            });
          }
        })
        .catch(error => {
          this.$Notice.warning({
            title: "删除失败",
            desc: file.name + "删除失败，请刷新重试1！"
          });
        });
    },
    handleUserRemove(file) {
      getData("/jm-user/user/del-door-user-img", "delete", {
        fileName: file.name
      })
        .then(res => {
          if (res.data == 1) {
            this.userInfoList = [];
            this.userInfoForm.avatarName = "";
          } else {
            this.$Notice.warning({
              title: "删除失败",
              desc: file.name + "删除失败，请刷新重试！"
            });
          }
        })
        .catch(error => {
          this.$Notice.warning({
            title: "删除失败",
            desc: file.name + "删除失败，请刷新重试1！"
          });
        });
    },
    handleSuccess(res, file) {
      this.registerForm.avatarName = res.str;
      this.uploadList = [];
      this.uploadList.push({
        url: "/avatar-img/" + res.str,
        name: res.str,
        status: "finished"
      });
    },
    handleUserSuccess(res, file) {
      this.userInfoForm.avatarName = res.str;
      this.userInfoList = [];
      this.userInfoList.push({
        url: "/avatar-img/" + res.str,
        name: res.str,
        status: "finished"
      });
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc: file.name + " 类型不正确，只接受jpg/jpeg/png"
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "文件大小超限",
        desc: file.name + "文件大小超限, 最大500K."
      });
    },
    handleBeforeUpload(file) {
      const check = this.uploadList.length < 2;
      if (!check) {
        this.$Notice.warning({
          title: "只能上传一张头像"
        });
      }
      return check;
    }
  },
  mounted() {}
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.ivu-layout-content {
  clear: both;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.layout .ivu-layout-header {
  background: #f5f7f9;
  padding: 0px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.layout .top-menu {
  position: relative;
  z-index: 1000;
}
.layout .top-menu .welcome {
  position: absolute;
  top: 0px;
  right: 200px;
  z-index: 1000;
}
.layout .top-menu .ivu-menu-light {
  background: #f5f7f9;
}
.layout .top-menu .ivu-menu-horizontal {
  height: 30px;
  line-height: 30px;
}
.layout .top-menu .ivu-menu-item {
  font-size: 11px;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;

  overflow: hidden;
}
.layout .ivu-layout {
  background: #ffffff;
}
.layout .ivu-input-group {
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  position: relative;
  font-size: 12px;
  top: 1px;
}
.ivu-menu {
  display: block;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  color: #515a6e;
  font-size: 14px;
  position: relative;
  z-index: 666;
}
.layout .top-menu .layout-nav {
  width: 180px;
  margin: 0 auto;
  margin-right: 10px;
}
.layout .layout-footer-center {
  text-align: center;
}

.layout .content-row {
  clear: both;
  padding-top: 20px;
  line-height: 60px;
  position: relative;
  z-index: 999;
}

.layout .nav-menu {
  width: 100%;
  clear: both;
}
.layout .nav-menu .ivu-menu-horizontal {
  height: 50px;
  line-height: 50px;
}

.layout .nav-menu a {
  color: #ffffff;
}
.layout .nav-menu a:focus {
  color: #ffffff;
}
.layout .content-div {
  margin-top: 175px;
  margin-bottom: 20px;
  z-index: 999;
}
.layout .nav-menu .nav-menu-item {
  padding: 0 4.16666667%;
}

.layout .search {
  margin-top: 20px;
  line-height: 40px;
  width: 600px;
  height: 40px;
  background-color: #515a6e;
  border-radius: 5px;
  overflow: hidden;
}
.layout .search .l {
  float: left;
  width: 420px;
  height: 40px;
  overflow: hidden;
  background-color: #fff;
  border: 3px solid #515a6e;
}
.layout .search .q {
  border: 0 none;
  outline: 0 none;
  font-size: 14px;
  color: #666;
  width: 95%;
  height: 25px;
  margin: 3px;
}
.layout .search .r {
  float: right;
  width: 80px;
  height: 40px;
  background-color: #515a6e;
}
.layout .search .s {
  border: none;
  background-color: #515a6e;
  font-size: 14px;
  color: #fff;
  text-align: center;
  width: 95%;
  height: 40px;
  line-height: 40px;
  outline: none;
}

.layout .search .s:active {
  background-color: #657088;
}
.layout .search .search-select {
  float: left;
  background-color: #515a6e;
  height: 40px;
  width: 100px;
  line-height: 40px;
}
.layout .search .search-select > select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #515a6e;
  color: #ffffff;
  height: 40px;
  width: 100px;
  line-height: 40px;
  font-size: 14px;
  padding: 0 10px;
  border: 1px solid #515a6e;
  outline: none;
}
.layout .search .search-select > select:active {
  background-color: #657088;
}
.layout .search .search-select > select:after {
  background-color: #657088;
}

.layout .search .search-select > select:visited {
  background-color: #657088;
}

.layout .search .search-select > select > option {
  background-color: #ffffff;
  color: #515a6e;
  font-size: 15px;
  padding: 35px;
  border: 1px solid #515a6e;
}

.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
