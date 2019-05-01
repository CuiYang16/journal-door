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
                        {{(journalInfo.cn).toUpperCase()}}
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

                    <Button type="primary" long class="borrow-btn">借阅</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span="6">
            <div class="borrow-list">
              <Card :bordered="false" class="borrow-card" title="借阅排行榜" icon="ios-options" dis-hover>
                <CellGroup>
                  <Cell title="Only show titles"/>
                  <Cell title="Display label content" label="label content"/>
                  <Cell title="Display right content" extra="details"/>
                  <Cell title="Link" extra="details" to="/components/button"/>
                  <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                  <Cell title="Disabled" disabled/>
                  <Cell title="Selected" selected/>
                  <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra"/>
                  </Cell>
                  <Cell title="Only show titles"/>
                  <Cell title="Display label content" label="label content"/>
                  <Cell title="Display right content" extra="details"/>

                </CellGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  </div>
</template>

<script>

import { dateFormat,formatFormat,cycleFormat,languageFormat,areaFormat } from "~/plugins/common.js";


export default {
  data() {
    return {
      journalInfo: {},
      showImgName: "",

    };
  },
  methods: {
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
    }
  },
  created() {
    this.journalInfo = JSON.parse(this.$route.query.journal);
  },
  beforeRouteEnter(to, from, next) {
    next();
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
.journal-info .journal-show .borrow-list{
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
  color: #c0c4cc;
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
