<template>
  <div class="layout" id="layout">
    <Layout>
      <Header>
        <div class="top-menu">
          <Menu mode="horizontal" theme="light" active-name="1">
            <div class="layout-nav">
             
              <MenuItem name="2" @click.native="userLogin">登录</MenuItem>
              <MenuItem name="3" @click.native="userRegister">注册</MenuItem>
              <Submenu name="4" v-show="false">
                <template slot="title">
                  <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small"/>&nbsp;用户名
                </template>
                <MenuItem name="4-1">个人中心</MenuItem>
                <MenuItem name="4-2">退出</MenuItem>
              </Submenu>
              
            </div>
            
          </Menu>
          <span class="welcome">欢迎光临此网站!</span>
        </div>
        <div class="content-row">
          <Row :gutter="120">
            <Col span="3" offset="2">
              <img
                :src="require('E:/journal-img/2019-04-24_175623.png')"
                alt="require('E:/img/e1cf12c07bf6458992569e67927d767e.png')"
                width="200"
                height="80"
              >
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
                  <button type="submit" class="s">搜索</button>
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
                  style="padding:0 36px;border-left:1px solid #ffffff;border-right:1px solid #ffffff"
                >
                  <Icon type="ios-people"/>全部期刊杂志分类
                </MenuItem>
                <MenuItem name="2" style="margin-left:10px">
                  <Icon type="ios-people"/>
                  <nuxt-link to="/">首页</nuxt-link>
                </MenuItem>

                <MenuItem name="3">
                  <Icon type="ios-construct"/>
                  <nuxt-link to="/journal-list">杂志期刊列表</nuxt-link>
                </MenuItem>
              </div>
            </Menu>
          </template>
        </div>
      </Header>
      <Content>
        <div class="content-div">
          <nuxt/>
        </div>
      </Content>

      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
    <BackTop></BackTop>
    <div class="modals">
      <Modal v-model="loginModal" title="注册" :mask-closable="false" width="450px">
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
            style="cursor: pointer; margin-left:360px;;color: #2b85e4;height:15px;line-height:15px;"
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
    </div>
  </div>
</template>

<script>
export default {
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
    const validateName = (rule, value, callback) => {
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
        userSex: ""
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
          label: "类别"
        },
        {
          value: "3",
          label: "主办单位"
        },
        {
          value: "4",
          label: "级别"
        }
      ],
      loginModal: false,
      registerModal: false,
      ccode: ""
    };
  },
  methods: {
    userLogin() {
      this.loginModal = true;
      this.generatedCode();
    },
    goRegister() {
      this.loginModal = false;
      this.registerModal = true;
    },
    userRegister() {
      this.registerModal = true;
    },
    goLogin() {
      this.loginModal = true;
      this.registerModal = false;
      this.generatedCode();
    },
    loginSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("请正确填写登录信息!!");
        }
      });
    },
    registerSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("请正确填写注册信息!");
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
    }
  }
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
  background: #F5F7F9;
  padding: 0px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.layout .top-menu{
  position: relative;
}
.layout .top-menu .welcome{
  position: absolute;
  top :0px;
  right: 200px;
  z-index: 1000;
}
.layout .top-menu .ivu-menu-light {
  background: #F5F7F9;
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
  padding-top: 25px;
  line-height: 80px;
  z-index: 9999;
}

.layout .nav-menu {
  width: 100%;
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
  margin-top: 200px;
  margin-bottom: 20px;
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
  height: 18px;
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
</style>
