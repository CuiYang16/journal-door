<template>
  <div class="journal-info" id="journal-info">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem to="/journalList">杂志期刊</BreadcrumbItem>
        <BreadcrumbItem>杂志期刊详情</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="journal-show">
      <Card>
        <Row>
          <Col span="18">
            <div class="info">
              <Row>
                <Col span="9">
                  <div class="show-img">
                    <div class="show-img-top">
                      <img
                        :src="'/journal-img/'+(showImgName==''?journalInfo.journalImg:showImgName)"
                        alt="asdas"
                      >
                    </div>
                    <div class="show-img-bottom">
                      <img
                        :src="'/journal-img/'+journalInfo.journalImg"
                        alt="asdas"
                        @click="imgClick(journalInfo.journalImg)"
                      >

                      <img
                        :src="'/journal-img/'+img.name"
                        alt="asdas"
                        v-for="img in journalInfo.journalImages"
                        :key="img.imagesId"
                        @click="imgClick(img.name)"
                      >
                    </div>
                  </div>
                </Col>
                <Col span="15">
                  <div class="info-right">
                    <h1>{{journalInfo.journalName}}</h1>
                    <ul>
                      <li v-show="journalInfo.journalHost">
                        <span class="info-name-span">主办单位：</span>
                        {{journalInfo.journalHost}}
                      </li>
                      <li v-show="journalInfo.publishingHouse">
                        <span class="info-name-span">出版社：</span>
                        {{journalInfo.publishingHouse}}
                      </li>

                      <li v-show="journalInfo.issue">
                        <span class="info-name-span">期号：</span>
                        {{journalInfo.issue}}
                      </li>
                      <li v-show="journalInfo.totalIssue">
                        <span class="info-name-span">总期号：</span>
                        {{journalInfo.totalIssue}}
                      </li>
                      <li v-show="journalInfo.cn">
                        <span class="info-name-span">国内刊号：</span>
                        {{journalInfo.cn!=null?(journalInfo.cn).toUpperCase():''}}
                      </li>
                      <li v-show="journalInfo.issn">
                        <span class="info-name-span">国际刊号：</span>
                        {{journalInfo.issn}}
                      </li>
                      <li v-show="journalInfo.journalLevel">
                        <span class="info-name-span">杂志级别：</span>
                        {{journalInfo.journalLevel}}
                      </li>
                      <li v-show="journalInfo.type.typeName">
                        <span class="info-name-span">杂志类别：</span>
                        {{journalInfo.type.typeName}}
                      </li>
                      <li v-show="journalInfo.publishTime">
                        <span class="info-name-span">出版时间：</span>
                        {{dateFormat(journalInfo.publishTime)}}
                      </li>
                      <li v-show="journalInfo.publicationCycle">
                        <span class="info-name-span">出版周期：</span>
                        {{cycleFormat(journalInfo.publicationCycle)}}
                      </li>
                      <li v-show="journalInfo.publishingArea">
                        <span class="info-name-span">出版地区：</span>
                        {{areaFormat(journalInfo.publishingArea)}}
                      </li>
                      <li v-show="journalInfo.domesticCode">
                        <span class="info-name-span">国内代号：</span>
                        {{journalInfo.domesticCode}}
                      </li>
                      <li v-show="journalInfo.foreignCodes">
                        <span class="info-name-span">国外代号：</span>
                        {{journalInfo.foreignCodes}}
                      </li>
                      <li v-show="journalInfo.format">
                        <span class="info-name-span">杂志开本：</span>
                        {{formatFormat(journalInfo.format)}}
                      </li>
                      <li v-show="journalInfo.pageNumber">
                        <span class="info-name-span">杂志页数：</span>
                        {{journalInfo.pageNumber}}
                      </li>
                      <li v-show="journalInfo.jounalLanguage">
                        <span class="info-name-span">语言：</span>
                        {{languageFormat(journalInfo.jounalLanguage)}}
                      </li>
                      <li v-show="journalInfo.isbn">
                        <span class="info-name-span">国际书号：</span>
                        {{journalInfo.isbn}}
                      </li>
                      <li v-show="journalInfo.isForeign">
                        <span class="info-name-span">国外杂志：</span>
                        {{journalInfo.isForeign==true?'是':'否'}}
                      </li>
                      <li v-show="journalInfo.author">
                        <span class="info-name-span">杂志作者：</span>
                        {{journalInfo.author}}
                      </li>
                    </ul>
                    <div>
                      <span class="info-name-span">杂志描述：</span>
                      <div v-html="journalInfo.description" class="info-desc"></div>
                    </div>

                    <Button type="primary" long class="borrow-btn" @click="borrowConfirm" :disabled="journalInfo.inventory<=0">借阅</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span="6">
            <div class="borrow-list">
              <Card
                :bordered="false"
                class="borrow-card"
                title="借阅排行榜"
                icon="ios-options"
                dis-hover
              >
                <CellGroup>
                  <Cell
                        :title="jb.journalName"
                        v-for="jb in journalBorrows.slice(0,10)"
                        :key="jb.journalId"
                        :extra="'借阅量：'+String(jb.total)"
                        :to="{path:'/journalInfo', query: { journal: JSON.stringify(jb)}}"
                      />
                </CellGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </Card>
    </div>

    <div>
      <Modal
        v-model="borrowModal"
        title="确认借阅"
        :loading="loading"
        @on-ok="borrwOK"
        :mask-closable="false"
      >
        <p>
          请确认您要借阅的杂志期刊是：
          <span style="font-size:14px;font-weight:600;">{{journalInfo.journalName}}</span>
        </p>
        <br>
        <p>请在{{twoMonthAfter()}}前归还，否则将按逾期一天0.5元缴纳罚金！！！</p>
      </Modal>
    </div>
  </div>
</template>

<script>
import {
  dateFormat,
  formatFormat,
  cycleFormat,
  languageFormat,
  areaFormat
} from "~/plugins/common.js";
import { getData } from "~/plugins/axios.js";
export default {
  data() {
    return {
      journalInfo: {},
      showImgName: "",
      borrowModal: false,
      loading: true,
      journalBorrows:[]
    };
  },
  methods: {
    borrowConfirm() {
      this.borrowModal = true;
    },
    async borrwOK() {
      var { data } = await getData(
        "/jm-journal/journal-borrow/borrow-journal",
        "post",
        {
          journalId: this.journalInfo.journalId,
          userId: 1
        }
      );
      if (data == 1) {
        this.$Notice.success({
          title: "借阅成功",
          desc: "借阅成功，返回杂志期刊列表页！"
        });
      } else {
        this.$Notice.error({
          title: "借阅失败",
          desc: "借阅失败，请刷新重试！"
        });
      }
      this.$router.push({path:"/journalList",query:{}});
      this.borrowModal = false;
    },
    async getBorrowList(){
      var { data } = await getData(
      "/jm-journal/journal-detail/get/journal-borrow",
      "get",
      {}
    );
    this.journalBorrows = data;
    },
    imgClick(imgName) {
      console.log(imgName);
      this.showImgName = imgName;
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
    twoMonthAfter() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 3;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    }
  },
  created() {
    this.journalInfo = JSON.parse(this.$route.query.journal);
    this.getBorrowList();
  },

  beforeRouteUpdate(to, from, next) {
    this.journalInfo = JSON.parse(to.query.journal);
    next();
  }
};
</script>

<style scoped>
.journal-info .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}

.journal-info .journal-show {
  padding-top: 10px;
}

.journal-info .journal-show .info {
  padding-right: 10px;
}
.journal-info .journal-show .borrow-list {
  min-height: 560px;
  border: 1px solid #e8eaec;
}
.journal-info .journal-show .info .show-img {
  width: 100%;
  border-right: 1px solid #e8eaec;
}
.journal-info .journal-show .info .show-img .show-img-top {
  padding: 15px 15px 10px 0;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  width: 330px;
  height: 420px;
  border-bottom: 1px solid #e8eaec;
  border-top: 1px solid #e8eaec;
}
.journal-info .journal-show .info .show-img .show-img-bottom {
  padding: 10px 0;
  border: 2px solid #e8eaec;
  height: 107px;
}
.journal-info .journal-show .info .show-img .show-img-bottom img {
  width: 45px;
  height: 70px;
  margin: 5px 10px;
  border: 2px solid #808695;
}
.journal-info .journal-show .info .show-img .show-img-top img {
  width: 100%;
  max-height: 420px;
}

.journal-info .journal-show .info .info-right {
  height: 560px;
  padding: 10px 20px;
  position: relative;
}

.journal-info .journal-show .info .info-right .info-name-span {
  width: 80px;
  text-align: right;
  display: inline-block;
  font-weight: 600;
}
.journal-info .journal-show .info .info-right ul {
  margin-top: 10px;
  list-style: none;
}
.journal-info .journal-show .info .info-right ul li {
  width: 250px;
  line-height: 30px;
  display: inline-block;
}

.journal-info .journal-show .info .info-right .info-desc {
  min-height: 185px;
  float: right;
  width: 430px;
  background-color: #f8f8f9;
  border-radius: 5px;
}

.journal-info .journal-show .info .info-right .borrow-btn {
  width: 535px;
  position: absolute;
  bottom: 0;
}
</style>
