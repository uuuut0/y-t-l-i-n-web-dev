import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '@/views/ErrorView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
,
    {
      path: '/projectpost',
      name: 'projectpost',
      component: () => import('../views/ProjectPostView.vue')
    }
,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
      
    }
  ],
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      const headerHeight = document.querySelector('#main-header').offsetHeight
      return new Promise((resolve, reject)=>{
        setTimeout(()=> {
          resolve( {
            el: to.hash,
            top: headerHeight,
            behavior: 'smooth'
          })
        },100)
      })
    }
    return{top: 0}
  }
})

export default router