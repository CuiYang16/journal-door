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
                    <li class="type-li">
                      <span
                        :class="{'checkOn':checkValue.area==666}"
                        @click="clickCheck('area',666)"
                      >国外</span>
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
                      <span
                        :class="{'checkOn':checkValue.time==item.value}"
                        @click="clickCheck('time',item.value)"
                      >{{item.label}}</span>
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
      <div v-show="journalData.length==0">
        <span class="noneTip">抱歉，没有你想要的的结果！</span>
      </div>
      <div class="result-info">
        <ul class="info-ul">
          <li class="info-li" v-for="jd in journalData" :key="jd.journalId">
            <div class="info-li-img">
              <img
                :src="'/journal-img/'+jd.journalImg"
                alt="require('E:/img/1555990714772-journal-fair.jpg')"
                height="140"
                width="100"
              >
            </div>
            <div class="info-li-detail">
              <span class="detail-title">{{jd.journalName}}</span>
              <ul>
                <li>
                  <span class="detail-list">
                    <b>杂志类别：</b>
                    {{jd.type.typeName}}
                  </span>
                </li>
                <li>
                  <span class="detail-list">
                    <b>杂志级别：</b>
                    {{levelFormat(jd.journalLevel)}}
                  </span>
                </li>
                <li>
                  <span class="detail-list">
                    <b>发行周期：</b>
                    {{cycleFormat(jd.publicationCycle)}}
                  </span>
                </li>
                <li>
                  <span class="detail-list">
                    <b>出版地区：</b>
                    {{checkValue.area==666?'国外':areaFormat(jd.publishingArea)}}
                  </span>
                </li>

                <li>
                  <span class="detail-list">
                    <b>出版时间：</b>
                    {{dateFormat(jd.publishTime)}}
                  </span>
                </li>

                <li>
                  <span class="detail-list">
                    <b>期号：</b>
                    {{jd.issue}}
                  </span>
                </li>
              </ul>
              <Button
                type="primary"
                size="small"
                ghost
                style="margin-top:5px;"
                @click="checkJournal(jd)"
              >查看详情</Button>
            </div>
          </li>
        </ul>
      </div>
      <div class="page-info">
        <Page
        :total="pageInfo.total"
        show-elevator
        show-sizer
        show-total
        :current="pageInfo.currentPage"
        :page-size="pageInfo.pageSize"
        @on-change="pageChange"
        @on-page-size-change="pageSizeChange"
      />
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
import {
  dateFormat,
  formatFormat,
  cycleFormat,
  languageFormat,
  areaFormat,
  levelFormat
} from "~/plugins/common.js";
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
      journalData: [],
      pageJournalData: [],
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
      pageInfo: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      checkValue: { type: "", level: "", cycle: "", area: "", time: "" },
      dateSort:0
    };
  },
  methods: {
    checkJournal(journaInfo) {
      this.$router.push({
        path: "/journalInfo",
        query: { journal: JSON.stringify(journaInfo) }
      });
    },
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
      this.getJournal(1, this.pageInfo.pageSize,this.dateSort);
    },
    async getJournal(currentPage, pageSize,dateSort) {
      var { data } = await getData(
        "/jm-journal/journal-detail/get/check-journal",
        "post",
        {
          checkValue: this.checkValue,
          currentPage: currentPage,
          pageSize: pageSize,
          dateSort:dateSort
        }
      );
      this.journalData = data.list;
      this.pageInfo.currentPage = data.pageNum;
      this.pageInfo.pageSize = data.pageSize;
      this.pageInfo.total = data.total;
    },
    pageChange(value) {
      this.getJournal(value, this.pageInfo.pageSize,this.dateSort);
    },
    pageSizeChange(value) {
      this.getJournal(this.pageInfo.currentPage, value,this.dateSort);
    },
    formatFormat(value) {
      return formatFormat(value);
    },
    cycleFormat(value) {
      return cycleFormat(value);
    },
    languageFormat(value) {
      return languageFormat(value);
    },
    areaFormat(value) {
      return areaFormat(value);
    },
    dateFormat: function(value) {
      return dateFormat(value);
    },
    levelFormat(value) {
      return levelFormat(value);
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
      this.dateSort=(val == 1 ? 0 : 1);
      this.getJournal(this.pageInfo.currentPage, this.pageInfo.pageSize,this.dateSort);
    },

  },
  created() {
    if (this.$route.query.checkValue != null) {
      this.checkValue = JSON.parse(this.$route.query.checkValue);
    }
    this.getJournal(this.pageInfo.currentPage, this.pageInfo.pageSize,this.dateSort);
  },
  beforeRouteUpdate(to, from, next) {
    if (!this.$route.query.checkValue) {
      this.checkValue = JSON.parse(this.$route.query.checkValue);
    }
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
.journal-list .search-result .result-info .info-li-detail ul {
  list-style: none;
  margin-top: 5px;
}
.journal-list .search-result .result-info .info-li-detail ul li {
  display: inline-block;
  width: 220px;
  line-height: 20px;
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

.journal-list .search-result .noneTip {
  font-size: 16px;
  padding: 20px 0 0 10px;

  display: block;
}
.journal-list .search-result .tab-sort {
  cursor: pointer;
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
  border-bottom: 1px solid #e8eaec;
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
.page-info{
  float: right;
}
</style>
