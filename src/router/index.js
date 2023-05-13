import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioPrincipal from '../paginas/InicioPrincipal.vue'
import listadoTests from '../paginas/tests/listadoTests.vue'
import informe from '../paginas/informe/informe.vue'
import listadoResultados from '../paginas/Resultados/listadoResultados.vue'
import login from '../paginas/login/login.vue'
import testPsico from '../paginas/testPsico/testPsico.vue'
import test1 from '../paginas/tests/test1/test1.vue'
import resutadosGenerales from '../paginas/resutadosGenerales/resutadosGenerales.vue'
import adminPrincipal from '../paginas/admin/adminPrincipal/adminPrincipal.vue'
import registrar from '../paginas/Registrar/registrar.vue'
import destudiante from '../paginas/Destudiante/estudiante.vue'
import dpsicologo from '../paginas/Dpsicologo/psicologo.vue'
import listarUsers from '../paginas/Dpsicologo/users/listarUsers.vue'
import updateUsers from '../paginas/Dpsicologo/users/updateUsers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioPrincipal
    },
    {
      path: '/tests',
      name: 'tests',
      component: listadoTests
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
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/testPsico',
      name: 'testPsico',
      component: testPsico
    },
    {
      path: '/admin/adminPrincipal',
      name: 'adminPrincipal',
      component: adminPrincipal
    },
    {
      path: '/tests/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/resutadosGenerales',
      name: 'resutadosGenerales',
      component: resutadosGenerales
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: registrar
    }, 
    {
      path: '/destudiante',
      name: 'estudiante',
      component: destudiante
    },

    {
      path: '/dpsicologo',
      name: 'psicologo',
      component: dpsicologo
    },
    {
      path: '/listarUsers',
      name: 'listarUsers',
      component: listarUsers
    },
    {
      path: '/updateUsers',
      name: 'updateUsers',
      component: updateUsers
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
