import './styles/reset.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


const app = createApp(App)

app.use(createPinia())

app.mount('#app')

import { useWeatherStore } from '@/stores/weatherStore'
const weatherStore = useWeatherStore()
weatherStore.fetchDataWeather()