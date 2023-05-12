<script setup>
import test1 from '../tests/test1/test1.vue'
</script>

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
                    <td class="py-2 px-4 border-b"><a href="#" class="text-blue-700 hover:underline" Toggle modal>Ver test</a></td>
                </tr>
                <tr>
                    <td class="py-2 px-4 border-b">Usuario 2</td>
                    <td class="py-2 px-4 border-b">75</td>
                    <td class="py-2 px-4 border-b">75</td>
                    <td class="py-2 px-4 border-b">75</td>
                    <td class="py-2 px-4 border-b">75</td>
                    <td class="py-2 px-4 border-b">75</td>
                    <td class="py-2 px-4 border-b"><a href="#" class="text-blue-700 hover:underline" Toggle modal>Ver test</a></td>
                </tr>
                <tr>
                    <td class="py-2 px-4 border-b">Usuario 3</td>
                    <td class="py-2 px-4 border-b">60</td>
                    <td class="py-2 px-4 border-b">60</td>
                    <td class="py-2 px-4 border-b">60</td>
                    <td class="py-2 px-4 border-b">60</td>
                    <td class="py-2 px-4 border-b">60</td>
                    <td class="py-2 px-4 border-b"><button @click="toggleModal" class="text-blue-700 hover:underline focus:outline-none">Ver test</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>



    

    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <!-- Aquí va el contenido del modal -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-medium mb-2">Test</h2>
        <test1 />
        <button @click="toggleModal" class="text-blue-700 hover:underline mt-4">Close</button>
      </div>
    </div>






</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    }
  }
};
</script>