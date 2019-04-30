
<template>
  <div class="home-center" id="home-center">
    <Row>
      <Col span="22" offset="1">
        <Row>
          <Col span="4">
            <Card>
              <div class="content-right">
                <Sider
                  hide-trigger
                  :style="{background: '#fff',width:'100%',maxWidth:'100%',minWidth:'100%'}"
                >
                  <div class="type-menu" v-if="fTypes.length>0">
                    <span class="type-menu-title">杂志类别</span>
                    <ul class="type-menu-ul">
                      <li class="type-menu-li" v-for="ft in fTypes" :key="ft.typeId">
                        <nuxt-link to="/home-center">{{ft.typeName}}</nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <div class="type-menu">
                    <span class="type-menu-title">期刊级别</span>
                    <ul class="type-menu-ul">
                      <li class="type-menu-li">国家级期刊</li>
                      <li class="type-menu-li">省级级期刊</li>
                      <li class="type-menu-li">核心期刊</li>
                    </ul>
                  </div>
                  <div class="type-menu">
                    <span class="type-menu-title">发行周期</span>
                    <ul class="type-menu-ul">
                      <li
                        class="type-menu-li"
                        v-for="cycle in cycleList"
                        :key="cycle.value"
                      >{{cycle.label}}</li>
                    </ul>
                  </div>
                  <div class="type-menu">
                    <span class="type-menu-title">出版地区</span>
                    <ul class="type-menu-ul">
                      <li class="type-menu-li">北京</li>
                      <li class="type-menu-li">天津</li>
                      <li class="type-menu-li">上海</li>
                      <li class="type-menu-li">江苏</li>
                      <li class="type-menu-li">广州</li>
                      <li class="type-menu-li">深圳</li>
                      <li class="type-menu-li">浙江</li>
                      <li class="type-menu-li">福建</li>
                    </ul>
                  </div>
                </Sider>
              </div>
            </Card>
          </Col>

          <Col span="14">
            <div class="content-center">
              <Card>
                <Carousel autoplay loop :height="350">
                  <CarouselItem v-for="s in slides" :key="s.slideId">
                    <img
                      :src="'/journal-img/'+s.name"
                      alt="/journal-img/1555990714772-journal-fair.jpg"
                      height="350"
                      width="100%"
                    >
                  </CarouselItem>
                </Carousel>
                <div class="hot-recommend">
                  <span
                    style="padding:0 20px 2px 20px;font-size:18px;font-weight:900;border-bottom:2px solid #515a6e"
                  >新品推荐</span>
                  <hr>

                  <div class="hot-show">
                    <ul class="hot-show-ul">
                      <li class="hot-show-li" v-for="nj in newJournals" :key="nj.journalId">
                        <div class="hot-show-li-img">
                          <nuxt-link to="/">
                            <img
                              :src="'/journal-img/'+nj.journalImg"
                              alt="/journal-img/1555990714772-journal-fair.jpg"
                              height="140"
                              width="100"
                            >
                          </nuxt-link>
                        </div>
                        <div class="hot-show-li-char">
                          <span class="hot-show-li-char-span">杂志名称:</span>
                          <span class="journal-desc">{{nj.journalName}}</span>
                          <br>
                          <span class="hot-show-li-char-span">出版社：</span>
                          <span class="journal-desc">{{nj.publishingHouse}}</span>
                          <br>
                          <span class="hot-show-li-char-span">杂志级别：</span>
                          <span class="journal-desc">{{levelFormat(nj.journalLevel)}}</span>
                          <br>
                          <span class="hot-show-li-char-span">杂志类别：</span>
                          <span class="journal-desc">{{nj.type.typeName}}</span>
                          <br>
                          <Button type="primary" ghost style="margin:8px 0 0 100px" @click="checkJournal(nj)">查看详情</Button>
                          <br>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </Col>

          <Col span="6">
            <div class="fair-cell">
              <Card title="书展信息" icon="ios-options" :bordered="true">
                <CellGroup v-if="fairInfos.length>0">
                  <Cell
                    :title="fair.fairName"
                    v-for="fair in fairInfos.slice(0, 8)"
                    :key="fair.fairInformationId"
                    :extra="dateFormat(fair.fairStartTime)"
                  ></Cell>
                </CellGroup>
              </Card>
            </div>

            <Card :bordered="true" class="borrow-card" title="借阅排行榜" icon="ios-options">
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
                <Cell title="Link" extra="details" to="/components/button"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Disabled" disabled/>
                <Cell title="Selected" selected/>
                <Cell title="With Badge" to="/components/badge">
                  <Badge :count="10" slot="extra"/>
                </Cell>
              </CellGroup>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span="1"></Col>
    </Row>

    <BackTop></BackTop>
  </div>
</template>
<script>
import { getData } from "~/plugins/axios.js";

export default {
  async asyncData({ app, error }) {
    var { data } = await getData("/jm-fair/journal-fair/get/fairs", "get", {});
    const fairInfos = data;
    var { data } = await getData(
      "/jm-journal/journal-type/get/f-type",
      "get",
      {}
    );
    const fTypes = data;
    var { data } = await getData("/jm-user/slide/get/slides", "get", {});
    const slides = data;
    var { data } = await getData(
      "/jm-journal/journal-detail/get/new-journal",
      "get",
      {}
    );
    const newJournals = data;
    return {
      fairInfos: fairInfos,
      fTypes: fTypes,
      slides: slides,
      newJournals: newJournals
    };
  },
  data() {
    return {
      cycleList: [
        { value: 1, label: "周刊" },
        { value: 2, label: "旬刊" },
        { value: 3, label: "半月刊" },
        { value: 4, label: "月刊" },
        { value: 5, label: "双月刊" },
        { value: 6, label: "季刊" },
        { value: 7, label: "半年刊" },
        { value: 8, label: "年刊" }
      ],
      publishingAreaOptions: [
        { value: 1, label: "北京", short: "京" },
        { value: 2, label: "天津", short: "津" },
        { value: 3, label: "河北", short: "冀" },
        { value: 4, label: "山西", short: "晋" },
        { value: 5, label: "内蒙古", short: "蒙" },
        { value: 6, label: "辽宁", short: "辽" },
        { value: 7, label: "吉林", short: "吉" },
        { value: 8, label: "黑龙江", short: "黑" },
        { value: 9, label: "上海", short: "沪" },
        { value: 10, label: "江苏", short: "苏" },
        { value: 11, label: "浙江省", short: "浙" },
        { value: 12, label: "安徽", short: "皖" },
        { value: 13, label: "福建", short: "闽" },
        { value: 14, label: "江西", short: "赣" },
        { value: 15, label: "山东", short: "鲁" },
        { value: 16, label: "河南", short: "豫" },
        { value: 17, label: "湖北", short: "鄂" },
        { value: 18, label: "湖南", short: "湘" },
        { value: 19, label: "广东", short: "粤" },
        { value: 20, label: "广西", short: "桂" },
        { value: 21, label: "海南", short: "琼" },
        { value: 22, label: "重庆", short: "渝" },
        { value: 23, label: "四川", short: "川" },
        { value: 24, label: "贵州", short: "黔" },
        { value: 25, label: "云南", short: "滇" },
        { value: 26, label: "西藏", short: "藏" },
        { value: 27, label: "陕西", short: "陕" },
        { value: 28, label: "甘肃省", short: "甘" },
        { value: 29, label: "青海", short: "青" },
        { value: 30, label: "宁夏", short: "宁" },
        { value: 31, label: "新疆", short: "新" },
        { value: 32, label: "台湾", short: "台" },
        { value: 33, label: "香港特别行政区", short: "港" },
        { value: 34, label: "澳门" }
      ],
      journalLevelOptions: [
        { value: 1, label: "国家级期刊" },
        { value: 2, label: "省级级期刊" },
        { value: 3, label: "核心期刊" }
      ]
    };
  },
  methods: {
    checkJournal(journaInfo){
      this.$router.push({path:'/journalInfo',query:{journal:JSON.stringify(journaInfo)}});
    },
    levelFormat(value){
      let label;
      for(var l of this.journalLevelOptions){
        if(value==l.value){
          label= l.label;
          break;
        }
      }
      return label;
    },
    dateFormat: function(value) {
      if (value != null) {
        var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + "-";
        var M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        var D = (date.getDate() <10?"0"+date.getDate():date.getDate())+ " ";
        var h = date.getHours() + ":";
        var m = date.getMinutes() + ":";
        var s = date.getSeconds();
        return Y + M + D;
      } else {
        return "--";
      }
    }
  }
};
</script>

<style scoped>
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

.home-center .content-right .type-menu {
  padding-bottom: 15px;
  border-bottom: 1px dotted #515a6e;
  margin-bottom: 10px;
}

.home-center .content-right .type-menu .type-menu-title {
  font-size: 15px;
  font-weight: 700;
  margin: 15px 0;
}
.home-center .content-right .type-menu .type-menu-ul {
  list-style: none;
}
.home-center .content-right .type-menu .type-menu-li {
  font-size: 12px;
  margin-right: 12px;
  display: inline-block;
  margin-top: 5px;
}
.home-center .content-right .ivu-card-body {
  padding: 0;
}
.home-center .content-center {
  width: 100%;
  padding: 0 10px;
}
.home-center .hot-recommend {
  margin-top: 40px;
}
.home-center .hot-recommend .hot-show {
  margin-top: 15px;
}
.home-center .hot-recommend .hot-show-ul {
  list-style: none;
}
.home-center .hot-recommend .hot-show-li {
  display: inline-block;
  width: 50%;
  height: 180px;
  padding: 10px 0px;
}
.home-center .hot-recommend .hot-show-li .hot-show-li-char-span {
  font-size: 14px;
  font-weight: 800;
  margin-right: 10px;
  line-height: 25px;
  color: #17233d;
}
.home-center .hot-recommend .hot-show-li .hot-show-li-char-p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 可以显示的行数，超出部分用...表示*/
  -webkit-box-orient: vertical;
}
.home-center .hot-recommend .hot-show-li .hot-show-li-img {
  position: relative;
  width: 30%;
  float: left;
}
.home-center .hot-recommend .hot-show-li .hot-show-li-char {
  
  padding-left: 10px;
  width: 65%;
  float: left;
}

.home-center .hot-recommend .hot-show-li .hot-show-li-char .journal-desc {
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.home-center .borrow-card {
  margin-top: 30px;
}

.home-center .content-right a:link {
  color: #515a6e;
}
.home-center .content-right a:visited {
  color: #515a6e;
}
.home-center .content-right a:hover {
  color: #2b85e4;
  text-decoration: underline;
}
.home-center .content-right a:active {
  color: #515a6e;
}
#home-center .fair-cell /deep/ .ivu-cell-title {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

