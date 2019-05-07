<template>
  <div class="journal-borrow">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>杂志借阅列表</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <div class="borrow-table">
      <Table border :columns="boorowColumns" :data="borrows">
        <template slot-scope="{ row }" slot="borrowTime">{{ dateFormat(row.borrowTime) }}</template>
        <template slot-scope="{ row }" slot="returnTime">{{ dateFormat(row.returnTime) }}</template>
        <template slot-scope="{ row }" slot="realityReturn">{{ dateFormat(row.realityReturn) }}</template>
        <template slot-scope="{ row }" slot="realityDays">{{ realityDay(row.borrowTime) }}</template>
        <template slot-scope="{ row }" slot="isOverdue">
          <Tag
            :color="row.returnTime>new Date()?'success':'error'"
          >{{row.isOverdue==false?(row.returnTime>new Date()?'否':'是'):row.isOverdue==true?'是':'否' }}</Tag>
        </template>
        <template slot-scope="{ row }" slot="overdueDays">{{ overDay(row.returnTime) }}</template>
        <template slot-scope="{ row }" slot="penalty">{{ row.penalty }}</template>
        <template slot-scope="{ row }" slot="isPayment">
          <Tag
            :color="row.isPayment==false?'success':'error'"
          >{{row.penalty>0? (row.isPayment==false?'否':'是'):'--' }}</Tag>
        </template>

        <template slot-scope="{ row }" slot="journal">{{ row.journalDetails.journalName }}</template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="error" size="small" @click="delBorrow(row)">删除</Button>
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
    <div>
      <Modal
        v-model="delBorrowModal"
        title="确认删除借阅记录"
        @on-ok="delBorrowSubmit"
        :mask-closable="false"
      >
        <p>
          请确认您要删除借阅
          <span style="font-size:14px;font-weight:600;">{{delRow.journalDetails!=null?delRow.journalDetails.journalName:""}}</span>
          得记录吗？
        </p>
      </Modal>
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
      delBorrowModal: false,
      delRow: {},
      boorowColumns: [
        {
          title: "借阅开始时间",
          slot: "borrowTime",
          key: "borrowTime",
          align: "center"
        },
        {
          title: "应归还时间",
          slot: "returnTime",
          key: "returnTime",
          align: "center"
        },
        {
          title: "实际归还时间",
          slot: "realityReturn",
          key: "realityReturn",
          align: "center"
        },
        {
          title: "已借阅天数",
          slot: "realityDays",
          key: "realityDays",
          align: "center"
        },
        {
          title: "是否逾期",
          slot: "isOverdue",
          key: "isOverdue",
          align: "center",
          filters: [
            {
              label: "已逾期",
              value: "1"
            },
            {
              label: "未逾期",
              value: "0"
            }
          ],
          filterMultiple: false,
          filterRemote: function(value, row) {
            this.isOverdue = value;
            if (value == "1") {
              this.getBorrows(
                1,
                1,
                10,
                1,
                this.isPayment == "1" ? 1 : this.isPayment == "0" ? 0 : 2
              );
            }
            if (value == "0") {
              this.getBorrows(
                1,
                1,
                10,
                0,
                this.isPayment == "1" ? 1 : this.isPayment == "0" ? 0 : 2
              );
            }
            if (value == "") {
              this.getBorrows(
                1,
                1,
                10,
                2,
                this.isPayment == "1" ? 1 : this.isPayment == "0" ? 0 : 2
              );
            }
          }
        },

        {
          title: "逾期天数",
          slot: "overdueDays",
          key: "overdueDays",
          align: "center"
        },

        {
          title: "应缴罚金",
          slot: "penalty",
          key: "penalty",
          align: "center"
        },

        {
          title: "是否缴纳",
          slot: "isPayment",
          key: "isPayment",
          align: "center",
          filters: [
            {
              label: "已缴纳",
              value: "1"
            },
            {
              label: "未缴纳",
              value: "0"
            }
          ],
          filterMultiple: false,
          filterRemote: function(value, row) {
            this.isPayment = value;
            if (value == "1") {
              this.getBorrows(
                1,
                1,
                10,
                this.isOverdue == "1" ? 1 : this.isOverdue == "0" ? 0 : 2,
                1
              );
            }
            if (value == "0") {
              this.getBorrows(
                1,
                1,
                10,
                this.isOverdue == "1" ? 1 : this.isOverdue == "0" ? 0 : 2,
                0
              );
            }
            if (value == "") {
              this.getBorrows(
                1,
                1,
                10,
                this.isOverdue == "1" ? 1 : this.isOverdue == "0" ? 0 : 2,
                2
              );
            }
          }
        },

        {
          title: "借阅杂志名称",
          slot: "journal",
          key: "journal",
          align: "center"
        },
        {
          title: "删除记录",
          slot: "action",
          width: 100,
          align: "center"
        }
      ],
      borrows: [],
      isOverdue: "",
      isPayment: ""
    };
  },
  methods: {
    async getBorrows(userId, currentPage, pageSize, isOverdue, isPayment) {
      var { data } = await getData(
        "/jm-journal/journal-borrow/get-borrow",
        "get",
        { userId, currentPage, pageSize, isOverdue, isPayment }
      );
      this.borrows = data.list;
      this.pageInfo.currentPage = data.pageNum;
      this.pageInfo.pageSize = data.pageSize;
      this.pageInfo.total = data.total;
    },
    delBorrow(row) {
      this.delRow = row;
      this.delBorrowModal = true;
    },
    async delBorrowSubmit() {
      this.delBorrowModal = false;
      var { data } = await getData(
        "/jm-journal/journal-borrow/del-borrow-door",
        "put",
        { borrowId: this.delRow.borrowId }
      );
      if (data > 0) {
        this.getBorrows(
          1,
          this.pageInfo.currentPage,
          this.pageInfo.pageSize,
          this.isOverdue == "1" ? 1 : this.isOverdue == "0" ? 0 : 2,
          this.isPayment == "1" ? 1 : this.isPayment == "0" ? 0 : 2
        );
        this.$Notice.success({
          title: "成功",
          desc: "删除成功！"
        });
      } else {
        this.$Notice.error({
          title: "失败",
          desc: "删除失败，请刷新重试！"
        });
      }
    },
    pageChange(value) {
      this.getBorrows(
        1,
        value,
        this.pageInfo.pageSize,
        this.isOverdue == "1" ? 1 : this.isOverdue == "0" ? 0 : 2,
        this.isPayment == "1" ? 1 : this.isPayment == "0" ? 0 : 2
      );
    },
    pageSizeChange(value) {
      this.getBorrows(
        1,
        this.pageInfo.currentPage,
        value,
        this.isOverdue == "1" ? 1 : this.isOverdue == "0" ? 0 : 2,
        this.isPayment == "1" ? 1 : this.isPayment == "0" ? 0 : 2
      );
    },
    dateFormat(value) {
      return dateFormat(value);
    },
    realityDay(value) {
      var cha = new Date().getTime() - new Date(value).getTime();
      return Math.floor(cha / (24 * 3600 * 1000));
    },
    overDay(value) {
      var cha = new Date().getTime() - new Date(value).getTime();
      if (cha <= 0) {
        return 0;
      }
      return Math.floor(cha / (24 * 3600 * 1000));
    }
  },
  created() {
    this.getBorrows(1, 1, 10, 2, 2);
  }
};
</script>

<style scoped>
.journal-borrow .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}
.journal-borrow .borrow-table {
  padding-top: 10px;
}
.page-info {
  margin: 15px 0;
  float: right;
}
</style>
