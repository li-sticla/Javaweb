import Vue from 'vue'
import Router from 'vue-router'
import Personal from '@/components/Personal'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: "history"
})
