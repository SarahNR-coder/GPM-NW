import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import ForumView from '../views/ForumView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  {
    path: '/forum/:id',
    name: 'forum',
    component: ForumView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
