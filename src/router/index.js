import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

console.log(import.meta.env.BASE_URL)
const router = createRouter({
  base: '/vac/',
  history: createWebHashHistory('/vac/'),
  // history: createWebHistory('/vac/'),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/page/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/page/About.vue')
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: () => import('@/page/Calculate.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/page/Terms.vue')
    },
    {
      path: '/privacy',
      name: 'termprivacys',
      component: () => import('@/page/Privacy.vue')
    },
    {
      path: '/raiting',
      name: 'raiting',
      component: () => import('@/page/Raiting.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/page/Video.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/page/Blog.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog/',
      component: () => import('@/page/One-Blog.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/page/Quiz.vue')
    },
    {
      path: '/quiz/:id',
      name: 'quizId',
      component: () => import('@/page/Quized.vue')
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('@/page/Inventory.vue')
    },
    {
      path: '/carpage/:id',
      name: 'carpage/',
      component: () => import('@/page/CarPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not pages',
      component: () => import("@/page/NotPage.vue")
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }
    else {
        return {
            top: 0,
            behavior: "smooth"
        }
    }
}
})


export default router