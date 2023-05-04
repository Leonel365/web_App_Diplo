import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioPrincipal from '../paginas/InicioPrincipal.vue'

import listadodeusuario from '../paginas/usuarios/listadodeusuario.vue'
import informe from '../paginas/informe/informe.vue'
import listadoResultados from '../paginas/Resultados/listadoResultados.vue'
import listadoContacto from '../paginas/contactos/listadoContacto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioPrincipal
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: listadodeusuario
    },
    {
      path: '/informe',
      name: 'informe',
      component: informe
    },
    {
      path: '/Resultados',
      name: 'Resultados',
      component: listadoResultados
    },
    {
      path: '/Contactos',
      name: 'Contactos',
      component: listadoContacto
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
