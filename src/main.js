import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/style.scss'
import { createPinia } from 'pinia'
import { useGlobalStore } from '@/stores/store'
const app = createApp(App)


app.use(createPinia())
app.provide('globalStore', useGlobalStore())
app.use(router)




// Обработчик события beforeunload для удаления данных из localStorage
window.addEventListener('beforeunload', (event) => {
  event.preventDefault()
  localStorage.removeItem('currentRoute');
})


// Восстановление сохраненного маршрута при запуске приложения
const savedRoute = localStorage.getItem('currentRoute')
if (savedRoute) {
  router.push(savedRoute)
  localStorage.removeItem('currentRoute')
}



app.mount('#app')
