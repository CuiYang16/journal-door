
<template>
  <div class="home-center" id="home-center">
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
                  <li
                    class="type-menu-li"
                    v-for="ft in fTypes"
                    :key="ft.typeId"
                    @click="checkMenu('type',ft.typeId)"
                  >{{ft.typeName}}</li>
                </ul>
              </div>
              <div class="type-menu">
                <span class="type-menu-title">期刊级别</span>
                <ul class="type-menu-ul">
                  <li
                    class="type-menu-li"
                    v-for=" l in levelList"
                    :key="l.value"
                    @click="checkMenu('level',l.value)"
                  >{{l.label}}</li>
                </ul>
              </div>
              <div class="type-menu">
                <span class="type-menu-title">发行周期</span>
                <ul class="type-menu-ul">
                  <li
                    class="type-menu-li"
                    v-for="cycle in cycleList"
                    :key="cycle.value"
                    @click="checkMenu('cycle',cycle.value)"
                  >{{cycle.label}}</li>
                </ul>
              </div>
              <div class="type-menu">
                <span class="type-menu-title">出版地区</span>
                <ul class="type-menu-ul">
                  <li class="type-menu-li" @click="checkMenu('area',1)">北京</li>
                  <li class="type-menu-li" @click="checkMenu('area',2)">天津</li>
                  <li class="type-menu-li" @click="checkMenu('area',9)">上海</li>
                  <li class="type-menu-li" @click="checkMenu('area',10)">江苏</li>
                  <li class="type-menu-li" @click="checkMenu('area',19)">广东</li>
                  <li class="type-menu-li" @click="checkMenu('area',5)">内蒙古</li>
                  <li class="type-menu-li" @click="checkMenu('area',11)">浙江</li>
                  <li class="type-menu-li" @click="checkMenu('area',13)">福建</li>
                </ul>
              </div>
            </Sider>
          </div>
        </Card>
      </Col>

      <Col span="20">
        <div class="content-main">
          <Row>
            <Col span="17">
              <div class="content-center">
                <Card :bordered="false" dis-hover>
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
                            <Button
                              type="primary"
                              ghost
                              style="margin:8px 0 0 100px"
                              @click="checkJournal(nj)"
                            >查看详情</Button>
                            <br>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span="7">
              <div class="cell">
                <div class="fair-cell">
                  <Card title="书展信息" icon="ios-options" :bordered="false">
                    <CellGroup v-if="fairInfos.length>0">
                      <Cell
                        :title="fair.fairName"
                        v-for="fair in fairInfos.slice(0, 8)"
                        :key="fair.fairInformationId"
                        :extra="dateFormat(fair.fairStartTime)"
                        :to="{path:'/fairInfo', query: { fair: JSON.stringify(fair) }}"
                      ></Cell>
                    </CellGroup>
                  </Card>
                </div>
                <div class="borrow-cell">
                  <Card :bordered="false" class="borrow-card" title="借阅排行榜" icon="ios-options">
                    <CellGroup>
                      <Cell title="Only show titles"/>
                      <Cell title="Display label content" label="label content"/>
                      <Cell title="Display right content" extra="details"/>
                      <Cell title="Link" extra="details" to="/components/button"/>
                      <Cell
                        title="Open link in new window"
                        to="/components/button"
                        target="_blank"
                      />
                      <Cell title="Disabled" disabled/>
                      <Cell title="Selected" selected/>
                      <Cell title="With Badge" to="/components/badge">
                        <Badge :count="10" slot="extra"/>
                      </Cell>
                      <Cell title="Only show titles"/>
                      <Cell title="Display label content" label="label content"/>
                      <Cell title="Display right content" extra="details"/>
                      <Cell title="Link" extra="details" to="/components/button"/>
                      <Cell
                        title="Open link in new window"
                        to="/components/button"
                        target="_blank"
                      />
                      <Cell title="Disabled" disabled/>
                      <Cell title="Selected" selected/>
                      <Cell title="With Badge" to="/components/badge">
                        <Badge :count="10" slot="extra"/>
                      </Cell>
                      <Cell title="Disabled" disabled/>
                      <Cell title="Selected" selected/>
                      <Cell title="With Badge" to="/components/badge">
                        <Badge :count="10" slot="extra"/>
                      </Cell>
                    </CellGroup>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    <BackTop></BackTop>
  </div>
</template>
<script>
import { getData } from "~/plugins/axios.js";
import { levelList, cycleList } from "~/plugins/common.json";

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
      checkList: {
        type: "",
        level: "",
        cycle: "",
        area: "",
        time:""
      },
      levelList: levelList,
      cycleList: cycleList
    };
  },
  methods: {
    checkMenu(type, value) {
      this.checkList = {
        type: "",
        level: "",
        cycle: "",
        area: "",
        time:""
      };
      if (type == "type") {
        this.checkList.type = value;
      }
      if (type == "cycle") {
        this.checkList.cycle = value;
      }
      if (type == "area") {
        this.checkList.area = value;
      }
      if (type == "level") {
        this.checkList.level = value;
      }
     this.$router.push({path:"/journalList",query:{checkValue:JSON.stringify(this.checkList)}});
    },
    checkJournal(journaInfo) {
      this.$router.push({
        path: "/journalInfo",
        query: { journal: JSON.stringify(journaInfo) }
      });
    },
    levelFormat(value) {
      let label;
      for (var l of this.levelList) {
        if (value == l.value) {
          label = l.label;
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
        var D =
          (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
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
.home-center .content-main {
  max-height: 1230px;
  border: 1px solid #e8eaec;
}

.home-center .content-main .cell {
  border: 1px solid #e8eaec;
  min-height: 1220px;
  max-height: 1220px;
  overflow-y: auto;
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
  cursor: pointer;
}
.home-center .content-right .type-menu .type-menu-li:link {
  color: #515a6e;
}
.home-center .content-right .type-menu .type-menu-li:visited {
  color: #515a6e;
}
.home-center .content-right .type-menu .type-menu-li:hover {
  color: #2b85e4;
  text-decoration: underline;
}
.home-center .content-right .type-menu .type-menu-li:active {
  color: #515a6e;
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

.home-center .borrow-cell {
  overflow: hidden;
}
#home-center .fair-cell /deep/ .ivu-cell-title {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

