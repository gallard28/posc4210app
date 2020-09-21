import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'
import Scenario from '../views/Scenario.vue'
import Prioritize from '../views/Prioritize.vue'
import Choose_tools from '../views/Choose_tools.vue'
import Analyses from '../views/Analyses.vue'
import Workplan1 from '../views/Workplan1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/scenario',
    name: 'Scenario',
    component: Scenario
  },
  {
    path: '/prioritize',
    name: 'Prioritize',
    component: Prioritize
  },
  {
    path: '/choose_tools',
    name: 'Choose_tools',
    component: Choose_tools
  },
  {
    path: '/analyses',
    name: 'Analyses',
    component: Analyses
  },
  {
    path: '/workplan1',
    name: 'Workplan1',
    component: Workplan1
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
