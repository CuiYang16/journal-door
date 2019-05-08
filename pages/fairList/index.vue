<template>
  <div class="fair-list">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>书展列表</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <div class="fair-cell">
      <Card title="书展信息" icon="ios-options" :bordered="false">
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
      fairInfos: []
    };
  },
  methods: {
    async getFairList() {
      var { data } = await getData(
        "/jm-fair/journal-fair/get/fairs",
        "get",
        {}
      );
      this.fairInfos = data;
    },
    dateFormat: function(value) {
      return dateFormat(value);
    },
  },
  created() {
    this.getFairList();
  }
};
</script>

<style scoped>
.fair-list .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}
</style>
