import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import RecipesByCategoryId from '../views/RecipesByCategoryId.vue'
import Recipe from '../views/Recipe.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  }, {
    path: '/recipes/:categoryId',
    name: 'RecipesByCategoryId',
    component: () => import('../views/RecipesByCategoryId.vue'),
    props: true
  }, {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/Categories.vue'),
    props: true
  }, {
    path: '/recipe/:recipeId',
    name: 'recipe',
    component: () => import('../views/Recipe.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router