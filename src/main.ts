import { createApp } from 'vue'
import store from "@/stores";
import Antd from 'ant-design-vue';
// 暗黑模式
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@/api/axios';

const app = createApp(App)
app.use(Antd).use(router).use(store).mount('#app')
