import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import Forum from '../views/Forum.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/forum/:id',
    name: 'forum',
    component: Forum
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
