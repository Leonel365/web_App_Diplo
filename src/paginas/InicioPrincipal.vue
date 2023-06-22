<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
        <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-3">
                        <img src="@/assets/img/videojuegos.png" class="h-50" />
                        <h2 class="text-white">Universidad de Córdoba</h2>
                </div>
                <div class="col-end-6 col-span-3">
                        <h1 class="text-3xl font-bold text-gray-600 text-center">¿Qué es la adicción a los videojuegos?</h1>
                        <p class="text-justify"><br>La definición de Adicción a los videojuegos o el Trastorno de juego por internet consiste en un patrón de juego persistente y recurrente que provoca un deterioro o malestar clínicamente significativo durante un periodo mínimo de un año. Esta adicción no se define por el número de horas que se juega a los videojuegos al día o a la semana, como muchos padres nos preguntan. Se define por las consecuencias y repercusión que tiene en las distintas áreas de funcionamiento de la persona.</p>
                </div>
                <div class="col-end-6 col-span-4">
                        <div>
                                <h1 class="text-3xl font-bold text-gray-600 text-center">Top 5 videojuagos más adictivos</h1>
                        </div>
                        <br>
                </div>
        </div>
        <div class="container mx-auto">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">

                  <div class="w-64 h-full"><img src="@/assets/img/v1.jpg" class="h-40 w-60 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" /></div>
                  <div class="w-64 h-full"><img src="@/assets/img/v2.jpg" class="h-40 w-60 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" /></div>
                  <div class="w-64 h-full"><img src="@/assets/img/v3.jpg" class="h-40 w-60 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" /></div>
                  <div class="w-64 h-full"><img src="@/assets/img/v4.jpeg" class="h-40 w-60 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" /></div>
                  <div class="w-64 h-full"><img src="@/assets/img/v5.png" class="h-40 w-60 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" /></div>
          </div>
        </div>
        <div class="mt-9">
                <div
                        class="rounded-lg border-2 relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                        <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                                aria-hidden="true">
                                <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#0A3A40] to-[#042326] opacity-20"
                                        style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
                        </div>
                        <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                                aria-hidden="true">
                                <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#0A3A40] to-[#042326] opacity-20"
                                        style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
                        </div>
                        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                                <p class="text-sm leading-6 text-gray-900">
                                        <strong class="font-semibold">Universidad de Cordoba</strong><svg viewBox="0 0 2 2"
                                                class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                                                <circle cx="1" cy="1" r="1" />
                                </svg>Realiza un text para conocer tu nivel de adicción a los videojuegos hoy mismo
                        </p>
                        <RouterLink to="/registrar">
                                <a href="#"
                                        class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Registrarse<span
                                                aria-hidden="true">&rarr;</span></a>
                        </RouterLink>
                </div>
                <div class="flex flex-1 justify-end">
                        <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                                <span class="sr-only">Rechazar</span>
                                <XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
                        </button>
                </div>
        </div>
</div>
</template>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

</script>
<style>
  .swiper-slide img {
    width: 100%;
    height: auto;
  }

</style>

