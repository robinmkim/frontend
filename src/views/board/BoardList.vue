<template>
  <!--  <div>
    <b-table striped hover :lsit="list" :fields="fields"></b-table>
  </div>-->

  <div class="board-list">
    <div class="common-buttons">
      <button
        type="button"
        v-on:click="fnWrite"
      >등록</button>
    </div>
    <table class="w3-table-all">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, idx) in list"
          :key="idx"
        >
          <td>{{ row.bno }}</td>
          <td>{{ row.title }}</td>
          <td>{{ row.loginID }}</td>
          <td>{{ $dayjs(row.regdate).format("YYYY-MM-DD")}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BoardList",
  data() {
    return {
      /*fields: [
        {
          key: 'bno',
          label: '글번호'
        },
        {
          key: 'title',
          label: '제목'
        },
        {
          key: 'loginID',
          label: '글쓴이'
        },
        {
          key: 'regdate',
          label: '등록일'
        }

      ],*/

      list: {},
    };
  },
  mounted() {
    this.fnGetList();
  },
  methods: {
    fnGetList() {
      axios
        .get(this.$serverUrl + "/board/list", {})
        .then((res) => {
          this.list = res.data;
          console.log("list" + res.data);
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },
  },
  components: {},
};
</script>

<style scoped>
</style>