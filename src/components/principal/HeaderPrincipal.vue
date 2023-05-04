<script setup>
    import { RouterLink } from 'vue-router'
</script>
<template>

<nav class="bg-indigo-500">
    <div class="container py-2 mx-auto px-10 flex flex-wrap items-center justify-between">
        
        <!-- BEGIN logo -->
        <div  class="flex items-center">
            <img src="@/assets/img/logo1.png" class="h-14">
            <h2 class="text-white">Universidad de Córdoba</h2>
        </div>
        <!-- END logo -->

        <!-- BEGIN items adicionales -->
        <div class="hidden md:block md:w-auto w-full " id="mobile-menu">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <RouterLink to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">Inicio</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/usuarios" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                            Usuarios
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/informe" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                            Informes
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Resultados" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                          Resultado
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Contactos" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                            Contacto
                        </RouterLink>
                    </li>
                </ul>
              </div>
            <!-- END items adicionales -->

    </div>
</nav>

</template>