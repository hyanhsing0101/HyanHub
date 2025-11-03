import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局样式
import '@/assets/styles/variables.css'
import '@/assets/styles/global.css'
import '@/assets/styles/animations.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
