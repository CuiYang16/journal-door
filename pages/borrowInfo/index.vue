<template>
  <div class="journal-borrow">
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>杂志借阅列表</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div>
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px">View</Button>
          <Button type="error" size="small">Delete</Button>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import { getData } from "~/plugins/axios.js";
export default {
  data() {
    return {
      columns12: [
        {
          title: "Name",
          slot: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    async getBorrows(userId) {
      var { data } = await getData(
        "/jm-journal/journal-borrow/get-borrow",
        "get",
        { userId: userId }
      );
      console.log(data);
    }
  },
  created() {
    this.getBorrows(1);
  }
};
</script>

<style scoped>
.journal-borrow .bread-crumb {
  padding: 10px 25px;
  background-color: #f5f7f9;
}
</style>
