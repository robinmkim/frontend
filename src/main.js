import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import dayjs from "dayjs";
import "tailwindcss/tailwind.css";
const app = createApp(App);

app.config.globalProperties.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있게 설정
app.config.globalProperties.$serverUrl = "//localhost:8081"; //api server
app.config.globalProperties.$dayjs = dayjs;
app.use(router).mount("#app");
