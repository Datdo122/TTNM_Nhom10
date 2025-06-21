import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import ProductDetailView from '../views/ProductDetail.vue'
import CategoriesView from '../views/CategoriesView.vue'
import AboutView from '../views/AboutView.vue'
import PhoneListView from '../views/PhoneListView.vue'
import LaptopListView from '../views/LaptopListView.vue'
import TabletListView from '../views/TabletListView.vue'
import HeadphoneListView from '../views/HeadphoneListView.vue'
import GamingListView from '../views/GamingListView.vue'
import CartView from '../views/CartView.vue'
import CompareView from '../views/CompareView.vue'
import CheckoutView from '../views/CheckoutView.vue'

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
    path: '/laptops',
    name: 'laptops',
    component: LaptopListView
  },
  {
    path: '/tablets',
    name: 'tablets',
    component: TabletListView
  },
  {
    path: '/headphones',
    name: 'headphones',
    component: HeadphoneListView
  },
  {
    path: '/gaming',
    name: 'gaming',
    component: GamingListView
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
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router 