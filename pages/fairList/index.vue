<template>
  <div class="fair-list">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>书展列表</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <div class="fair-cell">
      <Card title="书展信息" icon="ios-options">
        <CellGroup v-if="fairInfos.length>0">
          <Cell
            :title="fair.fairName"
            v-for="fair in fairInfos"
            :key="fair.fairInformationId"
            :extra="dateFormat(fair.fairStartTime)"
            :to="{path:'/fairInfo', query: { fair: JSON.stringify(fair) }}"
          ></Cell>
        </CellGroup>
      </Card>
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
      fairInfos: [],
      pageInfo: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
    };
  },
  methods: {
    async getFairList(pageNum, pageSize) {
      var { data } = await getData(
        "/jm-fair/journal-fair/get/fairs",
        "get",
        {pageNum, pageSize}
      );
      this.fairInfos = data.list;
      this.pageInfo.currentPage = data.pageNum;
      this.pageInfo.pageSize = data.pageSize;
      this.pageInfo.total = data.total;
    },
    pageChange(value) {
      this.getFairList(value,this.pageInfo.pageSize);
    },
    pageSizeChange(value) {
       this.getFairList(this.pageInfo.currentPage,value);
    },
    dateFormat: function(value) {
      return dateFormat(value);
    },
  },
  created() {
    this.getFairList(1,10);
  }
};
</script>

<style scoped>
.fair-list .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}

.fair-list .fair-cell{
    margin-top: 10px;
}
.page-info{
    margin-top: 5px;
    margin-bottom: 10px;
  float: right;
}
</style>
