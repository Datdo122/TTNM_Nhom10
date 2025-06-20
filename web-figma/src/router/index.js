import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import ProductDetailView from '../views/ProductDetail.vue'
import CategoriesView from '../views/CategoriesView.vue'
import AboutView from '../views/AboutView.vue'
import PhoneListView from '../views/PhoneListView.vue'
import CartView from '../views/CartView.vue'
import CompareView from '../views/CompareView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product-detail',
    name: 'product-detail',
    component: ProductDetailView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/phones',
    name: 'phones',
    component: PhoneListView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/compare',
    name: 'compare',
    component: CompareView
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router 