<template>
    <h1 class="text-4xl text-center">Administración de usuarios</h1>

    <div class="container mx-auto p-6 grid grid-cols-4">
        <div>

            <div class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                <a href="#" aria-current="true" class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer ">
                    Administrar
                </a>
                <a href="#" class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                    Registrar
                </a>
                <a href="#" class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                    Buscar
                </a>
                <a href="#" class="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                    Listados
                </a>
            </div>

        </div>
        <div class="col-span-3">
            <h1 class="text-2xl font-semibold">Formulario de registro</h1>

            <form class="mt-2">
                <div class="mb-6">
                    <label for="identificacion" class="block mb-2 text-sm font-medium text-gray-900 ">Identificación</label>
                    <input type="number" id="identificacion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required>
                </div>
                <div class="mb-6">
                    <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                    <input type="text" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                </div>
                <div class="mb-6">
                    <label for="fecha_nac" class="block mb-2 text-sm font-medium text-gray-900 ">Fecha de nacimiento</label>
                    <input type="date" id="fecha_nac" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                </div>
                
                <div class="mb-6">                    
                    <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 ">Genero</label>
                    <select id="genero" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                    </select>
                </div>
                
                <div class="mb-6">                                        
                    <label for="observaciones" class="block mb-2 text-sm font-medium text-gray-900 ">Observaciones</label>
                    <textarea id="observaciones" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
                </div>
               
                <button type="button" id="btn-enviar" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
  

        </div>
    </div>
</template>