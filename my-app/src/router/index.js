import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import ArticleView from '../views/ArticleView.vue'
import PublishView from '../views/PublishView.vue'

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
    path: '/publish',
    name: 'publish',
    component: PublishView
  },
  {
    path: '/article/:id',
    name: 'article',
    component: ArticleView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
