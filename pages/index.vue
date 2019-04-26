
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
                        <div class="type-menu">
                          <span class="type-menu-title">titlew</span>
                          <ul class="type-menu-ul">
                            <li class="type-menu-li"><nuxt-link to="/home-center">1111?</nuxt-link></li>
                            <li class="type-menu-li"><nuxt-link to="/home-center">1111?</nuxt-link></li>
                            <li class="type-menu-li"><nuxt-link to="/home-center">1111?</nuxt-link></li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                          </ul>
                        </div>
                        <div class="type-menu">
                          <span class="type-menu-title">titlew</span>
                          <ul class="type-menu-ul">
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">11sdfsdfsdfsdfsd11</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                          </ul>
                        </div>
                        <div class="type-menu">
                          <span class="type-menu-title">titlew</span>
                          <ul class="type-menu-ul">
                            <li class="type-menu-li">11dfsdfsdf11</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">11dfsdfss11</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1dfsd111</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">11fsdfsdfsdfsdf11</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">1111</li>
                          </ul>
                        </div>
                        <div class="type-menu">
                          <span class="type-menu-title">titlew</span>
                          <ul class="type-menu-ul">
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">11sdfsdfsdfewfrw11</li>
                            <li class="type-menu-li">1111</li>
                            <li class="type-menu-li">11efsdfsdfsdfs11</li>
                            <li class="type-menu-li">1111</li>
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
                        <CarouselItem>
                          <img
                            :src="require('E:/img/e1cf12c07bf6458992569e67927d767e.png')"
                            alt="require('E:/img/1555990714772-journal-fair.jpg')"
                            height="350"
                            width="100%"
                          >
                        </CarouselItem>
                        <CarouselItem>
                          <img
                            :src="require('E:/img/1555990714772-journal-fair.jpg')"
                            alt="require('E:/img/1555990714772-journal-fair.jpg')"
                            height="350"
                            width="100%"
                          >
                        </CarouselItem>
                        <CarouselItem>
                          <img
                            :src="require('E:/img/1555990714772-journal-fair.jpg')"
                            alt="require('E:/img/1555990714772-journal-fair.jpg')"
                            height="350"
                            width="100%"
                          >
                        </CarouselItem>
                        <CarouselItem>
                          <img
                            :src="require('E:/img/1555990714772-journal-fair.jpg')"
                            alt="require('E:/img/1555990714772-journal-fair.jpg')"
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
                            <li class="hot-show-li">
                              <div class="hot-show-li-img">
                                <nuxt-link to="/">
                                  <img
                                  :src="require('E:/journal-img/5c3d4b76_ea6f.jpg')"
                                  alt="require('E:/img/1555990714772-journal-fair.jpg')"
                                  height="140"
                                  width="100"
                                >
                                </nuxt-link>
                                
                              </div>
                              <div class="hot-show-li-char">
                                <span class="hot-show-li-char-span">杂志名称:</span>qqqqq
                                <Poptip placement="right" width="400" trigger="hover" word-wrap>
                                  <div slot="content">
                                    <p>
                                      <strong>sdasdfasd</strong>
                                      <span style="text-decoration: underline; color: #ff6600;">
                                        <em>撒旦法撒大声地</em>
                                      </span>
                                    </p>
                                  </div>
                                  <p class="hot-show-li-char-p">
                                    <span class="hot-show-li-char-span">简介：</span>的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                                  </p>
                                </Poptip>
                              </div>
                            </li>
                            <li class="hot-show-li">
                              <div class="hot-show-li-img">
                                <img
                                  :src="require('E:/journal-img/5c371763_f280.jpg')"
                                  alt="require('E:/img/1555990714772-journal-fair.jpg')"
                                  height="140"
                                  width="100"
                                >
                              </div>
                              <div class="hot-show-li-char">
                                <span class="hot-show-li-char-span">杂志名称:</span>qqqqq
                                <Poptip placement="right" width="260" trigger="hover" word-wrap>
                                  <div
                                    slot="content"
                                  >的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多</div>
                                  <p class="hot-show-li-char-p">
                                    <span class="hot-show-li-char-span">简介：</span>的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                                  </p>
                                </Poptip>
                              </div>
                            </li>
                            <li class="hot-show-li">
                              <div class="hot-show-li-img">
                                <img
                                  :src="require('E:/journal-img/5c934ca1_e1b9.jpg')"
                                  alt="require('E:/img/1555990714772-journal-fair.jpg')"
                                  height="140"
                                  width="100"
                                >
                              </div>
                              <div class="hot-show-li-char">
                                <span class="hot-show-li-char-span">杂志名称:</span>qqqqq
                                <Poptip placement="right" width="400" trigger="hover" word-wrap>
                                  <div
                                    slot="content"
                                  >的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多</div>
                                  <p class="hot-show-li-char-p">
                                    <span class="hot-show-li-char-span">简介：</span>的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                                  </p>
                                </Poptip>
                              </div>
                            </li>
                            <li class="hot-show-li">
                              <div class="hot-show-li-img">
                                <img
                                  :src="require('E:/journal-img/5c877e28_11789.jpg')"
                                  alt="require('E:/img/1555990714772-journal-fair.jpg')"
                                  height="140"
                                  width="100"
                                >
                              </div>
                              <div class="hot-show-li-char">
                                <span class="hot-show-li-char-span">杂志名称:</span>qqqqq
                                <Poptip placement="right" width="400" trigger="hover" word-wrap>
                                  <div
                                    slot="content"
                                  >的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多</div>
                                  <p class="hot-show-li-char-p">
                                    <span class="hot-show-li-char-span">简介：</span>的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                                  </p>
                                </Poptip>
                              </div>
                            </li>
                            <li class="hot-show-li">
                              <div class="hot-show-li-img">
                                <img
                                  :src="require('E:/journal-img/5c90abe7_3ba3.jpg')"
                                  alt="require('E:/img/1555990714772-journal-fair.jpg')"
                                  height="140"
                                  width="100"
                                >
                              </div>
                              <div class="hot-show-li-char">
                                <span class="hot-show-li-char-span">杂志名称:</span>qqqqq
                                <Poptip placement="right" width="400" trigger="hover" word-wrap>
                                  <div
                                    slot="content"
                                  >的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多</div>
                                  <p class="hot-show-li-char-p">
                                    <span class="hot-show-li-char-span">简介：</span>的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                                  </p>
                                </Poptip>
                              </div>
                            </li>
                            <li class="hot-show-li">
                              <div class="hot-show-li-img">
                                <img
                                  :src="require('E:/journal-img/5c73bf65_171bf.jpg')"
                                  alt="require('E:/img/1555990714772-journal-fair.jpg')"
                                  height="140"
                                  width="100"
                                >
                              </div>
                              <div class="hot-show-li-char">
                                <span class="hot-show-li-char-span">杂志名称:</span>qqqqq
                                <Poptip placement="right" width="400" trigger="hover" word-wrap>
                                  <div
                                    slot="content"
                                  >的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多</div>
                                  <p class="hot-show-li-char-p">
                                    <span class="hot-show-li-char-span">简介：</span>的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                                  </p>
                                </Poptip>
                              </div>
                            </li>
                            <li class="hot-show-li">
                              <div class="hot-show-li-img">
                                <img
                                  :src="require('E:/journal-img/5c8afb1e_9c12.jpg')"
                                  alt="require('E:/img/1555990714772-journal-fair.jpg')"
                                  height="140"
                                  width="100"
                                >
                              </div>
                              <div class="hot-show-li-char">
                                <span class="hot-show-li-char-span">杂志名称:</span>qqqqq
                                <Poptip placement="right" width="400" trigger="hover" word-wrap>
                                  <div
                                    slot="content"
                                  >的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多</div>
                                  <p class="hot-show-li-char-p">
                                    <span class="hot-show-li-char-span">简介：</span>的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                                  </p>
                                </Poptip>
                              </div>
                            </li>
                            <li class="hot-show-li">
                              <div class="hot-show-li-img">
                                <img
                                  :src="require('E:/journal-img/5c3d491c_46e2.jpg')"
                                  alt="require('E:/img/1555990714772-journal-fair.jpg')"
                                  height="140"
                                  width="100"
                                >
                              </div>
                              <div class="hot-show-li-char">
                                <span class="hot-show-li-char-span">杂志名称:</span>qqqqq
                                <Poptip placement="right" width="400" trigger="hover" word-wrap>
                                  <div
                                    slot="content"
                                  >的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多</div>
                                  <p class="hot-show-li-char-p">
                                    <span class="hot-show-li-char-span">简介：</span>的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                                  </p>
                                </Poptip>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col span="6">
                  <Card title="书展信息" icon="ios-options" :bordered="true">
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
                    </CellGroup>
                  </Card>
                  <Card :bordered="true" class="borrow-card" title="借阅排行榜" icon="ios-options">
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
export default {
  data() {
    return {
      
    };
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
  border-bottom: 1px solid #515a6e;
}

.home-center .content-right .type-menu .type-menu-title {
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0;
}
.home-center .content-right .type-menu .type-menu-ul {
  list-style: none;
}
.home-center .content-right .type-menu .type-menu-li {
  margin-right: 12px;
  display: inline-block;
  margin-top: 5px;
}
.home-center .content-right .ivu-card-body {
  padding: 0;
}
.home-center .content-center {
  width: 100%;
  padding: 0 20px;
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
  font-size: 15px;
  font-weight: 800;
  margin-right: 15px;
  color: black;
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
  padding: 5px 0;
  padding-left: 10px;
  width: 65%;
  float: left;
}
.home-center .borrow-card {
  margin-top: 30px;
}

.home-center .content-right a:link{
  color: #515A6E;
}
.home-center .content-right a:visited{
  color: #515A6E;
}
.home-center .content-right a:hover{
  color: #000000;
  text-decoration:underline;
}
.home-center .content-right a:active{
  color: #515A6E;
}
</style>