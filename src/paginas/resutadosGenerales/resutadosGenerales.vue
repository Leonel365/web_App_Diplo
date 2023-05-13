<!-- <script setup>
import test1 from '../tests/test1/test1.vue'
</script> -->

<template>
    <div class="bg-gray-100">
        <div class="container mx-auto p-8">
            <h1 class="text-2xl font-bold mb-4">Resultados del Examen</h1>

            <table class="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th class="py-2 px-4 border-b">Nombre</th>
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
                        <td class="py-2 px-4 border-b">Usuario 1</td>
                        <td class="py-2 px-4 border-b">80</td>
                        <td class="py-2 px-4 border-b">80</td>
                        <td class="py-2 px-4 border-b">80</td>
                        <td class="py-2 px-4 border-b">80</td>
                        <td class="py-2 px-4 border-b">80</td>
                        <td class="py-2 px-4 border-b"><button id=testuser1 @click="toggleModal"
                                class="text-blue-700 hover:underline focus:outline-none">Ver test</button></td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-b">Usuario 2</td>
                        <td class="py-2 px-4 border-b">75</td>
                        <td class="py-2 px-4 border-b">75</td>
                        <td class="py-2 px-4 border-b">75</td>
                        <td class="py-2 px-4 border-b">75</td>
                        <td class="py-2 px-4 border-b">75</td>
                        <td class="py-2 px-4 border-b"><button id=testuser2 @click="toggleModal"
                                class="text-blue-700 hover:underline focus:outline-none">Ver test</button></td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-b">Usuario 3</td>
                        <td class="py-2 px-4 border-b">60</td>
                        <td class="py-2 px-4 border-b">60</td>
                        <td class="py-2 px-4 border-b">60</td>
                        <td class="py-2 px-4 border-b">60</td>
                        <td class="py-2 px-4 border-b">60</td>
                        <td class="py-2 px-4 border-b"><button id=testuser3 @click="toggleModal"
                                class="text-blue-700 hover:underline focus:outline-none">Ver test</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modals-->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <!-- Aquí va el contenido del modal -->
        <div class="bg-white p-4 rounded-lg shadow">
            <h2 class="text-lg font-medium mb-2">Test</h2>
            <div class="max-h-60 overflow-y-scroll">
                <div class="container mx-auto p-8">
                    <h1 class="text-2xl font-bold mb-4">Tabla de preguntas y opciones del test</h1>

                    <table class="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b">Pregunta</th>
                                <th class="py-2 px-4 border-b">Opción Elegida</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b">A veces tengo problemas en la escuela o en el trabajo por
                                    jugar</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He dejado de lado actividades sociales, familiares o
                                    laborales importantes por jugar</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">A veces me siento deprimido(a) o irritable cuando no puedo
                                    jugar</td>
                                <td class="py-2 px-4 border-b">Con frecuencia</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">A veces me siento culpable o avergonzado(a) por la cantidad
                                    de tiempo que paso jugando</td>
                                <td class="py-2 px-4 border-b">A veces</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He tenido dificultades para dormir porque juego hasta tarde
                                </td>
                                <td class="py-2 px-4 border-b">Siempre</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Cuando no puedo jugar siento irritabilidad o mal humor</td>
                                <td class="py-2 px-4 border-b">Casi nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He descuidado mis responsabilidades (trabajo, estudios,
                                    tareas del hogar, etc.) debido a los videojuegos</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Me gustaría poder pasar menos tiempo jugando</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He sentido la necesidad de jugar durante períodos de tiempo
                                    cada vez más largos para sentirme satisfecho(a)</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">A veces juego más tiempo del que tenía planeado</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He necesitado aumentar la cantidad de tiempo que paso jugando
                                    para lograr la misma satisfacción</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He perdido interés en actividades que solía disfrutar antes
                                    de comenzar a jugar</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Me siento inquieto(a) o irritable cuando no puedo jugar</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He perdido relaciones importantes (amigos, pareja, familia)
                                    debido a los videojuegos</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Me cuesta trabajo dejar de jugar</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He dejado de hacer actividades que solía disfrutar para jugar
                                    más tiempo</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Si no me funciona la videoconsola o el PC le pido prestada
                                    una a parientes o amigos</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Cuando no puedo jugar, siento ansiedad o inquietud</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He mentido acerca del tiempo que paso jugando</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Me cuesta trabajo concentrarme en otras actividades porque
                                    pienso en los videojuegos</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Juego mucho más tiempo con los videojuegos que cuando comencé
                                </td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Siento ansiedad o inquietud cuando no puedo jugar</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">A veces juego para escapar de problemas o situaciones
                                    difíciles</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Siento que mi vida está centrada en los videojuegos</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He intentado reducir el tiempo que paso jugando pero no he
                                    podido</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">A veces he tenido problemas con amigos o familiares por jugar
                                    demasiado</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He ocultado la cantidad de tiempo que paso jugando a amigos,
                                    familiares o pareja</td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">He tenido dificultades para controlar la cantidad de tiempo
                                    que paso jugando</td>
                                <td class="py-2 px-4 border-b">Siempre</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Siento que necesito jugar cada vez más para obtener la misma
                                    emoción</td>
                                <td class="py-2 px-4 border-b">Con frecuencia</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Cuando no estoy jugando, pienso en volver a jugar</td>
                                <td class="py-2 px-4 border-b">A veces</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Me gusta pasar más tiempo jugando que interactuando con otras
                                    personas</td>
                                <td class="py-2 px-4 border-b">Casi nunca</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b">Siento que tengo un problema con mi uso de los videojuegos
                                </td>
                                <td class="py-2 px-4 border-b">Nunca</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button @click="closeModal" class="text-blue-700 hover:underline mt-4">Close</button>
    </div>
</div>

<div class="flex flex-col items-center space-y-2">
  <h1 class="text-xl font-bold text-center">Sede</h1>
  <div class="w-[80%] h-[80%]">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</div>

</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar },
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