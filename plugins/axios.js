import axios from "axios";

export function fetch(config) {
  //返回promise对象
  return new Promise((resolve, reject) => {
    if (config.auth.isAunthed) {
      var headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + config.auth.accessToken
      };
    } else {
      var headers = {
        "Content-Type": "application/json"
      };
    }

    const instance = axios.create({
      //定义请求文件类型
      headers: headers,
      // 请求超时
      timeout: 5000,
      //定义请求根目录
      baseURL: "http://127.0.0.1:8888"
    });
    //请求成功后执行的函数
    instance(config)
      .then(res => {
        //console.log(res);
        resolve(res);
        //失败后执行的函数
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
}

export function getData(url, type, data, auth) {
  if (type === "") {
    type = "post";
  }
  if (!auth) {
    var auth = {
      isAunthed: false
    };
  }
  if (type == "get") {
    return fetch({
      auth: auth,
      url: url,
      method: type,
      params: data
    });
  }
  return fetch({
    auth: auth,
    url: url,
    method: type,
    data: data
  });
}
