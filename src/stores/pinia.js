import { createPinia } from 'pinia'
import { useGlobalStore } from './stores/global'

export const pinia = createPinia()

pinia.use(useGlobalStore)