import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'geracao1',
      component: () => import('../views/Geracao1View.vue')
    },
    {
      path: '/geracao2',
      name: 'geracao2',
      component: () => import('../views/Geracao2View.vue')
    },
    {
      path: '/pokemon/:id',
      name: 'pokemonDethales',
      component: () => import('../views/DetalhesPokemonView.vue'),
      
    },
    {
      path: '/geracao3',
      name: 'geracao3',
      component: () => import('../views/Geracao3View.vue')
    }
  ]
})

export default router
