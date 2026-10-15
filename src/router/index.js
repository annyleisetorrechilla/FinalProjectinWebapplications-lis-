import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue'
import ComputerScience from '../views/ComputerScience.vue'
import InformationTechnology from '../views/InformationTechnology.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/computer-science',
      name: 'computer-science',
      component: ComputerScience,
    },
    {
      path: '/information-technology',
      name: 'information-technology',
      component: InformationTechnology,
    },
  ],
})

export default router
