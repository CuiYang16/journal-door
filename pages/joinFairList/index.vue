<template>
  <div class="join-fair">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>书展参加列表</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <div class="fair-table">
      <Table border :columns="joinFairColumns" :data="fairs">
        <template slot-scope="{ row }" slot="fairName">{{ row.fairName }}</template>
        <template slot-scope="{ row }" slot="fairTheme">{{ row.fairTheme }}</template>
        <template slot-scope="{ row }" slot="fairSite">{{ row.fairSite }}</template>
        <template slot-scope="{ row }" slot="fairStartTime">{{ dateFormat(row.fairStartTime) }}</template>
        <template slot-scope="{ row }" slot="fairEndTime">{{ dateFormat(row.fairEndTime) }}</template>
        <template slot-scope="{ row }" slot="isEnd">
          <Tag :color="row.fairEndTime<=new Date()?'success':'error'">{{ (row.fairEndTime>new Date())?"否":"是"}}</Tag>
        </template>
      </Table>
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
import { getToken } from "~/middleware/auth";
import { getData } from "~/plugins/axios.js";
import {
  dateFormat,
  formatFormat,
  cycleFormat,
  languageFormat,
  areaFormat
} from "~/plugins/common.js";
export default {
  data() {
    return {
      pageInfo: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      fairs: [],
      joinFairColumns: [
        {
          title: "书展名称",
          slot: "fairName",
          key: "fairName",
          align: "center"
        },
        {
          title: "书展主题",
          slot: "fairTheme",
          key: "fairTheme",
          align: "center"
        },
        {
          title: "书展地点",
          slot: "fairSite",
          key: "fairSite",
          align: "center"
        },
        {
          title: "开始时间",
          slot: "fairStartTime",
          key: "fairStartTime",
          align: "center"
        },
        {
          title: "结束时间",
          slot: "fairEndTime",
          key: "fairEndTime",
          align: "center"
        },
        {
          title: "是否结束",
          slot: "isEnd",
          key: "isEnd",
          align: "center"
        }
      ]
    };
  },
  methods: {
    async getJoinFair(pageNum, pageSize) {
      var { data } = await getData(
        "/jm-fair/journal-fair/get/user-fairs",
        "get",
        { token: getToken(), pageNum, pageSize }
      );
      this.fairs = data.list;
      this.pageInfo.currentPage = data.pageNum;
      this.pageInfo.pageSize = data.pageSize;
      this.pageInfo.total = data.total;
    },
    dateFormat(value) {
      return dateFormat(value);
    },
    pageChange(value) {},
    pageSizeChange(value) {}
  },
  created() {
    this.getJoinFair(1, 10);
  }
};
</script>

<style scoped>
.join-fair .fair-table {
  padding-top: 10px;
}
.page-info {
  margin: 15px 0;
  float: right;
}
.join-fair .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}
</style>
