<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex flex-nowrap place-content-center mb-20 mt-20">
        <div>
            <RouterLink to="/logine">
                <button type="button"
                    class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">

                    Soy estudiante
                </button>
            </RouterLink>
        </div>
        <div>
            <RouterLink to="/loginp">
                <button type="button"
                    class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Soy
                    psicologo</button>
            </RouterLink>
        </div>

    </div>
</template>