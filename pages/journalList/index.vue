<template>
  <div class="journal-list">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>杂志期刊列表</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="list-con">
      <Card>
        <table width="100%" style="border-collapse:separate; border-spacing:0px 10px;">
          <tbody>
            <tr>
              <td width="10%" valign="top">
                <span>所属类别</span>
              </td>
              <td width="5%" valign="top">
                <span
                  @click="clickCheck('type','')"
                  :class="{'checkOn':checkValue.type==''}"
                  class="unlimited"
                >不限</span>
              </td>
              <td width="85%">
                <div class="type-div">
                  <ul class="type-ul">
                    <li v-for="item in typeList" :key="item.typeId" class="type-li">
                      <span
                        :class="{'checkOn':checkValue.type==item.typeId}"
                        @click="clickCheck('type',item.typeId)"
                      >{{item.typeName}}</span>
                      <Icon
                        type="ios-arrow-down"
                        @click="opentype(item.children,'f')"
                        v-if="(typeof item.children)!='undefined'&&item.children.length>0"
                      />
                    </li>
                  </ul>
                  <hr class="type-hr" v-if="openTypeShow">
                  <ul class="type-ul" v-if="openTypeShow">
                    <li v-for="item in typeSList" :key="item.typeId" class="type-li">
                      <span
                        :class="{'checkOn':checkValue.type==item.typeId}"
                        @click="clickCheck('type',item.typeId)"
                      >{{item.typeName}}</span>
                      <Icon
                        type="ios-arrow-down"
                        @click="opentype(item.children,'s')"
                        v-if="(typeof item.children)!='undefined'&&item.children.length>0"
                      />
                    </li>
                  </ul>
                  <hr class="type-hr" v-if="openTypeShowT">
                  <ul class="type-ul" v-if="openTypeShowT">
                    <li v-for="item in typeTList" :key="item.typeId" class="type-li">
                      <span
                        :class="{'checkOn':checkValue.type==item.typeId}"
                        @click="clickCheck('type',item.typeId)"
                      >{{item.typeName}}</span>
                    </li>
                  </ul>
                  <span class="close-type" @click="typeAll">
                    收起
                    <Icon type="ios-arrow-up"/>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <hr>
              </td>
            </tr>
            <tr>
              <td width="10%" valign="top">
                <span>期刊级别</span>
              </td>
              <td width="5%" valign="top">
                <span
                  :class="{'checkOn':checkValue.level==''}"
                  class="unlimited"
                  @click="clickCheck('level','')"
                >不限</span>
              </td>
              <td width="85%" valign="top">
                <div class="type-div">
                  <ul class="type-ul">
                    <li v-for="item in levelList" :key="item.value" class="type-li">
                      <span
                        :class="{'checkOn':checkValue.level==item.value}"
                        @click="clickCheck('level',item.value)"
                      >{{item.label}}</span>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <hr>
              </td>
            </tr>
            <tr>
              <td width="10%" valign="top">
                <span>发行周期</span>
              </td>
              <td width="5%" valign="top">
                <span
                  :class="{'checkOn':checkValue.cycle==''}"
                  class="unlimited"
                  @click="clickCheck('cycle','')"
                >不限</span>
              </td>
              <td width="85%" valign="top">
                <div class="type-div">
                  <ul class="type-ul">
                    <li v-for="item in cycleList" :key="item.value" class="type-li">
                      <span
                        :class="{'checkOn':checkValue.cycle==item.value}"
                        @click="clickCheck('cycle',item.value)"
                      >{{item.label}}</span>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td colspan="3">
                <hr>
              </td>
            </tr>
            <tr>
              <td width="10%" valign="top">
                <span>出版地区</span>
              </td>
              <td width="5%" valign="top">
                <span
                  :class="{'checkOn':checkValue.area==''}"
                  class="unlimited"
                  @click="clickCheck('area','')"
                >不限</span>
              </td>
              <td width="85%" valign="top">
                <div class="type-div">
                  <ul class="type-ul">
                    <li v-for="item in areaList" :key="item.value" class="type-li">
                      <span
                        :class="{'checkOn':checkValue.area==item.value}"
                        @click="clickCheck('area',item.value)"
                      >{{item.label}}</span>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td colspan="3">
                <hr>
              </td>
            </tr>
            <tr>
              <td width="10%" valign="top">
                <span>出版时间</span>
              </td>
              <td width="5%" valign="top">
                <span
                  :class="{'checkOn':checkValue.time==''}"
                  class="unlimited"
                  @click="clickCheck('time','')"
                >不限</span>
              </td>
              <td width="85%" valign="top">
                <div class="type-div">
                  <ul class="type-ul">
                    <li v-for="item in pubTimeList" :key="item.value" class="type-li">
                      <span :class="{'checkOn':checkValue.time==item.value}" @click="clickCheck('time',item.value)">{{item.label}}</span>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
    <div class="search-result">
      <div class="result-tabs">
        <span class="tab-sort" :class="{'tab-active':tabActive==true}" @click="tabShow(1)">默认排序</span>
        <span class="tab-sort" :class="{'tab-active':tabActive==false}" @click="tabShow(2)">出版日期排序</span>
        <hr>
      </div>
      <div class="result-info">
        <ul class="info-ul">
          <li class="info-li">
            <div class="info-li-img">
              <img
                :src="require('E:/journal-img/5c3d4b76_ea6f.jpg')"
                alt="require('E:/img/1555990714772-journal-fair.jpg')"
                height="140"
                width="100"
              >
            </div>
            <div class="info-li-detail">
              <table>
                <tbody>
                  <tr>
                    <td colspan="2">
                      <span class="detail-title">杂志名称</span>
                      <br>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>杂志级别：</b>黑龙江省教育科学研究院
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>出版地区：</b>黑龙江
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li class="info-li">
            <div class="info-li-img">
              <img
                :src="require('E:/journal-img/5c3d4b76_ea6f.jpg')"
                alt="require('E:/img/1555990714772-journal-fair.jpg')"
                height="140"
                width="100"
              >
            </div>
            <div class="info-li-detail">
              <table>
                <tbody>
                  <tr>
                    <td colspan="2">
                      <span class="detail-title">杂志名称</span>
                      <br>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>杂志级别：</b>黑龙江省教育科学研究院
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>出版地区：</b>黑龙江
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li class="info-li">
            <div class="info-li-img">
              <img
                :src="require('E:/journal-img/5c3d4b76_ea6f.jpg')"
                alt="require('E:/img/1555990714772-journal-fair.jpg')"
                height="140"
                width="100"
              >
            </div>
            <div class="info-li-detail">
              <table>
                <tbody>
                  <tr>
                    <td colspan="2">
                      <span class="detail-title">杂志名称</span>
                      <br>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>杂志级别：</b>黑龙江省教育科学研究院
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>出版地区：</b>黑龙江
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li class="info-li">
            <div class="info-li-img">
              <img
                :src="require('E:/journal-img/5c3d4b76_ea6f.jpg')"
                alt="require('E:/img/1555990714772-journal-fair.jpg')"
                height="140"
                width="100"
              >
            </div>
            <div class="info-li-detail">
              <table>
                <tbody>
                  <tr>
                    <td colspan="2">
                      <span class="detail-title">杂志名称</span>
                      <br>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>杂志级别：</b>黑龙江省教育科学研究院
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>出版地区：</b>黑龙江
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="detail-list">
                        <b>发行周期：</b>半月刊
                      </span>
                    </td>
                    <td>
                      <span class="detail-list">
                        <b>国内刊号：</b>CN11-1111/A
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "~/plugins/axios.js";
import {
  levelList,
  publishingAreaOptions,
  languageOptions,
  cycleList,
  formatOptions,
  pubTimeList
} from "~/plugins/common.json";
export default {
  async asyncData({ app, error }) {
    var { data } = await getData(
      "/jm-journal/journal-type/get-alltype",
      "get",
      {}
    );
    const typeList = data.list;
    return {
      typeList: typeList
    };
  },
  data() {
    return {
      journalData:[],
      typeSelectValue: "",

      levelList: levelList,
      cycleList: cycleList,
      areaList: publishingAreaOptions,
      pubTimeList: pubTimeList,
      typeSList: [],
      typeTList: [],
      openTypeShow: false,
      openTypeShowT: false,
      tabActive: true,
      checkValue: {}
    };
  },
  methods: {
    clickCheck(type, value) {
      if (type == "type") {
        if (value == "") {
          this.typeAll();
        }
        this.checkValue.type = value;
      }
      if (type == "level") {
        this.checkValue.level = value;
      }
      if (type == "cycle") {
        this.checkValue.cycle = value;
      }
      if (type == "area") {
        this.checkValue.area = value;
      }
      if (type == "time") {
        this.checkValue.time = value;
      }
      this.journalData = getData(
      "/jm-journal/journal-detail/get/check-journal",
      "post",
      {checkValue:this.checkValue}
    );
    console.log(this.journalData);
    
    },
    opentype(children, val) {
      if (typeof children != "undefined" && children.length > 0) {
        if (val == "f") {
          this.openTypeShow = true;
          this.typeSList = children;
          this.typeTList = [];
          this.openTypeShowT = false;
        }
        if (val == "s") {
          this.openTypeShowT = true;
          this.typeTList = children;
        }
      }
    },
    typeAll() {
      this.typeSList = [];
      this.typeTList = [];
      this.openTypeShow = false;
      this.openTypeShowT = false;
    },
    tabShow(val) {
      this.tabActive = val == 1 ? true : false;
    },
    pitchOn(checkValue) {}
  },
  created() {
    this.checkValue = JSON.parse(this.$route.query.checkValue);
  },
  beforeRouteUpdate(to, from, next) {
    JSON.parse(this.$route.query.checkValue);
    next();
  }
};
</script>

<style scoped>
.journal-list {
  padding: 0px 0;
}
.journal-list .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}
.journal-list .list-con {
  padding-top: 10px;
  position: relative;
}

.journal-list .list-con table tbody tr {
  padding: 15px 0;
}
.journal-list .list-con .type-div {
  padding-right: 60px;
}
.journal-list .list-con .type-ul {
  list-style: none;
}

.journal-list .list-con .type-ul .type-li {
  display: inline-block;
  margin-right: 15px;
  padding-bottom: 10px;
  cursor: pointer;
}
.journal-list .list-con .type-hr {
  margin: 10px 0;
}

.journal-list .list-con .close-type {
  position: absolute;
  right: 25px;
  top: 25px;
  cursor: pointer;
}
.journal-list .search-result {
  padding: 20px 0;
}
.journal-list .search-result .tab-sort {
  margin: 0px 20px;
  padding: 2px;
  color: #515a6e;
  font-size: 15px;
  font-weight: 500;
}
.journal-list .search-result .tab-active {
  border-bottom: 2px solid #17233d;
  color: #17233d;
}
.journal-list .search-result .result-info {
  padding: 15px;
}
.journal-list .search-result .result-info .info-ul {
  list-style: none;
}
.journal-list .search-result .result-info .info-ul .info-li {
  display: inline-block;
  width: 50%;
  padding: 15px 0;
}
.journal-list .search-result .result-info .info-ul .info-li .info-li-img {
  width: 20%;
  float: left;
}
.journal-list .search-result .result-info .info-ul .info-li .info-li-detail {
}

.journal-list
  .search-result
  .result-info
  .info-ul
  .info-li
  .info-li-detail
  .detail-title {
  font-size: 16px;
  color: #17233d;
  font-weight: 800;
}

.journal-list
  .search-result
  .result-info
  .info-ul
  .info-li
  .info-li-detail
  .detail-list {
  display: inline-block;
  padding-top: 8px;
  padding-right: 30px;
}
.checkOn {
  background-color: #2b85e4;
  color: #fff;
}

.unlimited {
  cursor: pointer;
}
</style>
