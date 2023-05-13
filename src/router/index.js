import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioPrincipal from '../paginas/InicioPrincipal.vue'
import listadoTests from '../paginas/tests/listadoTests.vue'
import informe from '../paginas/informe/informe.vue'
import listadoResultados from '../paginas/Resultados/listadoResultados.vue'
import testPsico from '../paginas/testPsico/testPsico.vue'
import test1 from '../paginas/tests/test1/test1.vue'
import resutadosGenerales from '../paginas/resutadosGenerales/resutadosGenerales.vue'
import adminPrincipal from '../paginas/admin/adminPrincipal/adminPrincipal.vue'
import registrar from '../paginas/Registrar/registrar.vue'
import destudiante from '../paginas/Destudiante/estudiante.vue'
import dpsicologo from '../paginas/Dpsicologo/psicologo.vue'
import dashboard from '../paginas/Dashboard/menu.vue'
import logine from '../paginas/login/logine.vue'
import loginp from '../paginas/login/loginp.vue'
import resultadosestudiante from '../paginas/resultadosUsuario/resultados.vue'

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
      path: '/logine',
      name: 'logine',
      component: logine
    },
    {
      path: '/loginp',
      name: 'loginp',
      component: loginp
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
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/resultados-estudiante',
      name: 'resultadosestudiante',
      component: resultadosestudiante
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
