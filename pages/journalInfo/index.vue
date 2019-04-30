<template>
  <div class="journal-info" id="journal-info">
    <Row>
      <Col span="22" offset="1">
        <div class="bread-crumb">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/journalList">杂志期刊</BreadcrumbItem>
            <BreadcrumbItem>杂志期刊详情</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="journal-show">
          <Row>
            <Col span="18">
              <div class="info">
                <Card>
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
                    <Col span="15"></Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col span="6">
              <div>
                <Card></Card>
              </div>
            </Col>
          </Row>
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
      journalInfo: {},
      showImgName: ""
    };
  },
  methods: {
    imgClick(imgName) {
      console.log(imgName);
      this.showImgName = imgName;
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
  border-bottom: 1px solid #e8eaec;
  height: 107px;
  text-align: center;
  vertical-align: middle;
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
</style>
