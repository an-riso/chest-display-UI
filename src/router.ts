import { createRouter, createWebHistory } from 'vue-router'

import ScreenSever from './components/ScreenSever.vue'
import AIModesPage from './pages/AIModesPage.vue'
import AlarmsPage from './pages/AlarmsPage.vue'
import KeyboardComponent from './pages/KeyboardComponent.vue'
import MainLogin from './pages/MainLogin.vue'
import MainComp from './pages/OLDMainEntry.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ShutdownPage from './pages/ShutdownPage.vue'
import WordText from './pages/WordText.vue'

const routes = [
  {
    path: '/screensaver',
    name: 'ScreenSever',
    component: ScreenSever,
    props: true,
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainComp,
    props: true,
  },
  {
    path: '/mainLogin',
    name: 'MainPage',
    component: MainLogin,
    props: true,
  },
  {
    path: '/aimodes',
    name: 'AIModesPage',
    component: AIModesPage,
    props: true,
  },
  {
    path: '/alarms',
    name: 'AlarmsPage',
    component: AlarmsPage,
    props: true,
  },
  {
    path: '/services',
    name: 'ServicesPage',
    component: ServicesPage,
    props: true,
  },
  {
    path: '/keyboard',
    name: 'KeyboardComponent',
    component: KeyboardComponent,
    props: true,
  },
  {
    path: '/wordText',
    name: 'wordText',
    component: WordText,
    props: true,
  },
  {
    path: '/shutdown',
    name: 'shutdown',
    component: ShutdownPage,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
