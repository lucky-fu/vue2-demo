import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/reset.css";
import axios from "axios";
import router from '@/router'

// createApp(App).use(Antd).use(router).mount("#app");
const app = createApp(App); 
app.use(router)
app.use(Antd);
app.mount("#app");
