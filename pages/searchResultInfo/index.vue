<template>
  <div class="search-info">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>搜索结果列表</BreadcrumbItem>
      </Breadcrumb>
    </div>
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
                  <b>主办单位：</b>
                  {{jd.journalHost}}
                </span>
              </li>
              <li>
                <span class="detail-list">
                  <b>国内刊号：</b>
                  {{jd.cn}}
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
</template>

<script>
import { getData } from "~/plugins/axios.js";
import {
  dateFormat,
  formatFormat,
  cycleFormat,
  languageFormat,
  areaFormat,
  levelFormat
} from "~/plugins/common.js";
export default {
  data() {
    return {
      journalData: [],
      searchValue: "",
      pageInfo: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      dateSort: 0,
      tabActive: true
    };
  },
  methods: {
    async getJournal(currentPage, pageSize, dateSort, searchValue) {
      var { data } = await getData(
        "/jm-journal/journal-detail/get/search-journal",
        "get",
        {
          currentPage: currentPage,
          pageSize: pageSize,
          dateSort: dateSort,
          searchValue: searchValue
        }
      );

      this.journalData = data.list;
      this.pageInfo.currentPage = data.pageNum;
      this.pageInfo.pageSize = data.pageSize;
      this.pageInfo.total = data.total;
    },
    checkJournal(journaInfo) {
      this.$router.push({
        path: "/journalInfo",
        query: { journal: JSON.stringify(journaInfo) }
      });
    },
    tabShow(val) {
      this.tabActive = val == 1 ? true : false;
      this.dateSort = val == 1 ? 0 : 1;
      this.getJournal(
        this.pageInfo.currentPage,
        this.pageInfo.pageSize,
        this.dateSort,
        this.searchValue
      );
    },
    pageChange(value) {
      this.getJournal(
        value,
        this.pageInfo.pageSize,
        this.dateSort,
        this.searchValue
      );
    },
    pageSizeChange(value) {
      this.getJournal(
        this.pageInfo.currentPage,
        value,
        this.dateSort,
        this.searchValue
      );
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
    }
  },
  created() {
    this.searchValue = this.$route.query.searchValue;
    this.getJournal(1, 10, 0, this.$route.query.searchValue);
  },
  beforeRouteUpdate(to, from, next) {
    this.searchValue = to.query.searchValue;
    this.getJournal(1, 10, 0, to.query.searchValue);
    next();
  }
};
</script>

<style scoped>
.search-info .result-tabs {
  margin-top: 10px;
}
.search-info .tab-active {
  border-bottom: 2px solid #17233d;
  color: #17233d;
}
.search-info .tab-sort {
  cursor: pointer;
  margin: 0px 20px;
  padding: 2px;
  color: #515a6e;
  font-size: 15px;
  font-weight: 500;
}
.search-info .noneTip {
  font-size: 16px;
  padding: 20px 0 0 10px;

  display: block;
}
.search-info .result-info {
  padding: 15px;
  border-bottom: 1px solid #e8eaec;
}
.search-info .result-info .info-ul {
  list-style: none;
}
.search-info .result-info .info-ul .info-li {
  display: inline-block;
  width: 50%;
  padding: 15px 0;
}
.search-info .result-info .info-ul .info-li .info-li-img {
  width: 20%;
  float: left;
}
.search-info .result-info .info-ul .info-li .info-li-detail {
}
.search-info .result-info .info-ul .info-li .info-li-detail .detail-title {
  font-size: 16px;
  color: #17233d;
  font-weight: 800;
}

.search-info .result-info .info-ul .info-li .info-li-detail .detail-list {
  display: inline-block;
  padding-top: 8px;
  padding-right: 30px;
}
.search-info .result-info .info-li-detail ul {
  list-style: none;
  margin-top: 5px;
}
.search-info .result-info .info-li-detail ul li {
  display: inline-block;
  width: 220px;
  line-height: 20px;
}
.search-info .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}
.page-info {
  float: right;
  margin-bottom: 20px;
}
</style>
