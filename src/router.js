import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'

Vue.use(Router)
var routes = new Router({
  mode: 'history',
  history: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    }
  ]
})

routes.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    let token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({
        name: 'signin'
      })
    }
  } else {
    next()
  }
})

export default routes
