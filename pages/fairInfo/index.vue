<template>
  <div class="fair-info">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>书展简介</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="fair-card">
      <Card>
        <div>
          <Row>
            <Col span="15">
              <h1>{{fairInfo.fairName}}</h1>
              <div class="fair-item">
                <ul>
                  <li v-show="fairInfo.fairTheme">
                    <span class="item-title">书展主题：</span>
                    {{fairInfo.fairTheme}}
                  </li>
                  <li v-show="fairInfo.fairStartTime">
                    <span class="item-title">开始时间：</span>
                    {{dateFormats(fairInfo.fairStartTime)}}
                  </li>
                  <li v-show="fairInfo.fairEndTime">
                    <span class="item-title">结束时间：</span>
                    {{dateFormats(fairInfo.fairEndTime)}}
                  </li>
                  <li v-show="fairInfo.fairHost">
                    <span class="item-title">主办方：</span>
                    {{fairInfo.fairHost}}
                  </li>
                  <li v-show="fairInfo.sponsor">
                    <span class="item-title">赞助商：</span>
                    {{fairInfo.sponsor}}
                  </li>
                  <li v-show="fairInfo.organizer">
                    <span class="item-title">承办方：</span>
                    {{fairInfo.organizer}}
                  </li>
                  <li v-show="fairInfo.fairSite">
                    <span class="item-title">书展地点：</span>
                    {{fairInfo.fairSite}}
                  </li>
                </ul>
              </div>
            </Col>
            <Col span="9">
              <div class="fair-img">
                <img :src="'/journal-img/'+fairInfo.fairImg" alt="asdasd" width="350" height="220">
              </div>
            </Col>
          </Row>
          <div class="fair-desc">
            <span class="item-desc">书展简介：</span>
            <div v-html="fairInfo.fairDescribe" class="desc-info"></div>
            <Button type="primary" long class="fair-btn" size="large" @click="joinFair">参加书展</Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "~/plugins/common.js";
import { getData } from "~/plugins/axios.js";
export default {
  data() {
    return {
      fairInfo: {}
    };
  },
  methods: {
    async joinFair() {
      var { data } = await getData(
        "/jm-fair/journal-fair/insert/fair-user",
        "post",
        { fairInformationId: this.fairInfo.fairInformationId, userId: 1 }
      );
      if (data == 50001) {
        this.$Notice.error({
          title: "失败",
          desc: "您已经参加本书展！"
        });
        this.$router.push({ path: "/journalList", query: {} });
      }
      if (data == 1) {
        this.$Notice.success({
          title: "成功",
          desc: "参加" + this.fairInfo.fairName + "书展成功！"
        });
        this.$router.push({ path: "/journalList", query: {} });
      } else {
        this.$Notice.error({
          title: "失败",
          desc: "参加本书展失败，请刷新重试！"
        });
      }
    },
    dateFormats(value) {
      return dateFormat(value);
    }
  },
  created() {
    this.fairInfo = JSON.parse(this.$route.query.fair);
  },
  beforeRouteUpdate(to, from, next) {
    this.fairInfo = JSON.parse(this.$route.query.fair);
    next();
  }
};
</script>

<style scoped>
.fair-info .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}

.fair-info .fair-card {
  padding-top: 10px;
}

.fair-info .fair-card .fair-btn {
  margin-top: 15px;
}
.fair-info .fair-card .fair-desc {
  border-top: 1px solid #e8eaec;
  padding: 10px;
}
.fair-info .fair-card .fair-desc .item-desc {
  width: 80px;
  text-align: right;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
}
.fair-info .fair-card .fair-desc .desc-info {
  float: right;
  width: 1100px;
  max-height: 300px;
  background-color: #f8f8f9;
  border-radius: 5px;
}
.fair-info .fair-card .fair-img {
  width: 450px;
  padding: 0 50px 10px 50px;
  border-left: 1px solid #e8eaec;
}

.fair-info .fair-card .fair-item {
  padding: 20px 0;
}
.fair-info .fair-card .fair-item .item-title {
  width: 80px;
  text-align: right;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
}
.fair-info .fair-card .fair-item ul {
  list-style: none;
}
.fair-info .fair-card .fair-item ul li {
  display: inline-block;
  line-height: 30px;
  width: 360px;
}
</style>
