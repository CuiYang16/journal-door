<template>
  <div class="journal-list">
    <Row>
      <Col span="22" offset="1">
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
                    <span class @click="typeAll">不限</span>
                  </td>
                  <td width="85%">
                    <div class="type-div">
                      <ul class="type-ul">
                        <li
                          v-for="item in typeList"
                          :key="item.value"
                          class="type-li"
                          @click="opentype(item.children,'f')"
                        >
                          {{item.label}}
                          <Icon
                            type="ios-arrow-down"
                            @click="opentype(item.children,'f')"
                            v-if="(typeof item.children)!='undefined'&&item.children.length>0"
                          />
                        </li>
                      </ul>
                      <hr class="type-hr" v-if="openTypeShow">
                      <ul class="type-ul" v-if="openTypeShow">
                        <li
                          v-for="item in typeSList"
                          :key="item.value"
                          class="type-li"
                          @click="opentype(item.children,'s')"
                        >
                          {{item.label}}
                          <Icon
                            type="ios-arrow-down"
                            @click="opentype(item.children,'s')"
                            v-if="(typeof item.children)!='undefined'&&item.children.length>0"
                          />
                        </li>
                      </ul>
                      <hr class="type-hr" v-if="openTypeShowT">
                      <ul class="type-ul" v-if="openTypeShowT">
                        <li
                          v-for="item in typeTList"
                          :key="item.value"
                          class="type-li"
                        >{{item.label}}</li>
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
                    <span>不限</span>
                  </td>
                  <td width="85%" valign="top">
                    <div class="type-div">
                      <ul class="type-ul">
                        <li
                          v-for="item in levelList"
                          :key="item.value"
                          class="type-li"
                        >{{item.label}}</li>
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
                    <span>不限</span>
                  </td>
                  <td width="85%" valign="top">
                    <div class="type-div">
                      <ul class="type-ul">
                        <li
                          v-for="item in cycleList"
                          :key="item.value"
                          class="type-li"
                        >{{item.label}}</li>
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
                    <span>不限</span>
                  </td>
                  <td width="85%" valign="top">
                    <div class="type-div">
                      <ul class="type-ul">
                        <li
                          v-for="item in areaList"
                          :key="item.value"
                          class="type-li"
                        >{{item.label}}</li>
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
                    <span>不限</span>
                  </td>
                  <td width="85%" valign="top">
                    <div class="type-div">
                      <ul class="type-ul">
                        <li
                          v-for="item in pubTimeList"
                          :key="item.value"
                          class="type-li"
                        >{{item.label}}</li>
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
            <span
              class="tab-sort"
              :class="{'tab-active':tabActive==false}"
              @click="tabShow(2)"
            >出版日期排序</span>
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
                                    <span class="detail-title">杂志名称</span><br/>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>杂志级别：</b>黑龙江省教育科学研究院</span></td>
                                <td><span class="detail-list"><b>出版地区：</b>黑龙江</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
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
                                    <span class="detail-title">杂志名称</span><br/>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>杂志级别：</b>黑龙江省教育科学研究院</span></td>
                                <td><span class="detail-list"><b>出版地区：</b>黑龙江</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
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
                                    <span class="detail-title">杂志名称</span><br/>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>杂志级别：</b>黑龙江省教育科学研究院</span></td>
                                <td><span class="detail-list"><b>出版地区：</b>黑龙江</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
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
                                    <span class="detail-title">杂志名称</span><br/>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>杂志级别：</b>黑龙江省教育科学研究院</span></td>
                                <td><span class="detail-list"><b>出版地区：</b>黑龙江</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                            <tr>
                                <td><span class="detail-list"><b>发行周期：</b>半月刊</span></td>
                                <td><span class="detail-list"><b>国内刊号：</b>CN11-1111/A</span></td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col span="1"></Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeSelectValue: "",
      typeList: [
        {
          value: "bdfsdsfing",
          label: "北京"
        },
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫",
              children: [
                {
                  value: "gugong",
                  label: "故宫"
                },
                {
                  value: "tiantan",
                  label: "天坛"
                },
                {
                  value: "wangfujing",
                  label: "王府井"
                }
              ]
            },

            {
              value: "tiantan",
              label: "天坛"
            },
            {
              value: "wangfujing",
              label: "王府井",
              children: [
                {
                  value: "gugong",
                  label: "故宫"
                },
                {
                  value: "tiantan",
                  label: "天坛"
                },
                {
                  value: "wangfujing",
                  label: "王府井"
                }
              ]
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙",
                  children: [
                    {
                      value: "gugong",
                      label: "故宫"
                    },
                    {
                      value: "tiantan",
                      label: "天坛"
                    },
                    {
                      value: "wangfujing",
                      label: "王府井"
                    }
                  ]
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ],
      levelList: [
        { value: 1, label: "国家级期刊" },
        { value: 2, label: "省级级期刊" },
        { value: 3, label: "核心期刊" }
      ],
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
      areaList: [
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
      pubTimeList: [
        { value: 1, label: "1个月内" },
        { value: 2, label: "1-3个月" },
        { value: 3, label: "3-6个月" },
        { value: 4, label: "6-9个月" },
        { value: 5, label: "1年以上" }
      ],
      typeSList: [],
      typeTList: [],
      openTypeShow: false,
      openTypeShowT: false,
      tabActive: true
    };
  },
  methods: {
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
    }
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
.journal-list .search-result .result-info{
    padding: 15px;
}
.journal-list .search-result .result-info .info-ul{
    list-style: none;
}
.journal-list .search-result .result-info .info-ul .info-li{
    display: inline-block;
    width: 50%;
padding: 15px 0;
}
.journal-list .search-result .result-info .info-ul .info-li .info-li-img{
    width: 20%;
     float: left;
}
.journal-list .search-result .result-info .info-ul .info-li .info-li-detail{
    
}

.journal-list .search-result .result-info .info-ul .info-li .info-li-detail .detail-title{
    font-size: 16px;
    color: #17233d;
    font-weight: 800;
}

.journal-list .search-result .result-info .info-ul .info-li .info-li-detail .detail-list{
    display: inline-block;
    padding-top: 8px;
    padding-right: 30px;
}
</style>
