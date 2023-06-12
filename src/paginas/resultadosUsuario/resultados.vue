<script setup>
import { RouterLink } from 'vue-router'
import NavPrincipal from '../../components/principal/NavPrincipal.vue';
import consultaTestUser from '../resultadosUsuario/consultaTestUser/consultaTestUser.vue';

</script>

<template>
  <NavPrincipal />
      <div class="container mx-auto p-8">
          <h1 class="text-2xl font-bold mb-4">Resultados del Examen</h1>

          <table class="min-w-full bg-white border border-gray-300">
              <thead>
                  <tr>
                      <th class="py-2 px-4 border-b">Abstinencia</th>
                      <th class="py-2 px-4 border-b">Abuso and tolerancia</th>
                      <th class="py-2 px-4 border-b">Problemas causados por videojuegos</th>
                      <th class="py-2 px-4 border-b">Dificultad en control</th>
                      <th class="py-2 px-4 border-b">Puntaje Global</th>
                      <th class="py-2 px-4 border-b">Tests</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>

                      <td class="py-2 px-4 border-b">80</td>
                      <td class="py-2 px-4 border-b">80</td>
                      <td class="py-2 px-4 border-b">80</td>
                      <td class="py-2 px-4 border-b">80</td>
                      <td class="py-2 px-4 border-b">80</td>
                      <td class="py-2 px-4 border-b"><button id=testuser3 @click="toggleModal"
                              class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              type="button">
                              Ver resultado
                          </button></td>
                  </tr>
                  <tr>

                      <td class="py-2 px-4 border-b">75</td>
                      <td class="py-2 px-4 border-b">75</td>
                      <td class="py-2 px-4 border-b">75</td>
                      <td class="py-2 px-4 border-b">75</td>
                      <td class="py-2 px-4 border-b">75</td>
                      <td class="py-2 px-4 border-b"><button id=testuser3 @click="toggleModal"
                              class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              type="button">
                              Ver resultado
                          </button></td>
                  </tr>
                  <tr>
                      <td class="py-2 px-4 border-b">60</td>
                      <td class="py-2 px-4 border-b">60</td>
                      <td class="py-2 px-4 border-b">60</td>
                      <td class="py-2 px-4 border-b">60</td>
                      <td class="py-2 px-4 border-b">60</td>
                      <td class="py-2 px-4 border-b"><button id=testuser3 @click="toggleModal"
                              class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              type="button">
                              Ver resultado
                          </button></td>
                  </tr>
              </tbody>
          </table>
      </div>




        <!-- Modals-->
        <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <!-- Aquí va el contenido del modal -->
        <div class="bg-white p-4 rounded-lg shadow">
            <h2 class="text-lg font-medium mb-2">Test</h2>
            <div class="max-h-60 overflow-y-scroll">
                <div class="container mx-auto p-8">
                    <h1 class="text-2xl font-bold mb-4">Tabla de preguntas y opciones del test</h1>
                  <div>
                    <consultaTestUser />
                  </div>
                </div>
            </div>
            <button onclick="window.location.href='/resultados-estudiante'"
                class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Volver
            </button>
    </div>
</div>

</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar, NavPrincipal },
  data() {
    return {
      chartData: {
        labels: ['Abstinencia', 'Abuso and tolerancia', 'Problemas causados por videojuegos', 'Difficultad en control', 'Puntaje Global'],
        datasets: [{ data: [40, 20, 12, 60, 95] }]
      },
      chartOptions: {
        responsive: true
      },
      isModalOpen: false
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};

</script>