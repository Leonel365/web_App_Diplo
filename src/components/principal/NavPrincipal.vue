<template>
    <nav class="md:bg-gray-800 bg-gray-500 p-1">
        <div class="container mx-auto px-10 w-full">
            <ul class="flex flex-col justify-center md:flex-row mt-1 text-xs md:text-sm">
                <RouterLink to="/destudiante">
                    <li> 
                    <a href="#" class="transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 
                                          block py-2
                                        text-gray-100 border-b border-gray-400 
                                          hover:rounded-md text-sm 
                                          hover:bg-gray-700 
                                          hover:text-gray-200
                                          md:border-0 md:mx-2 md:px-3" aria-current="page">Inicio</a>
                   </li>
                </RouterLink>

                <RouterLink to="/tests">
                    <li>
                        <a href="#" class="transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 
                                                block py-2
                                            text-gray-100 border-b border-gray-400 hover:rounded-md text-sm hover:bg-gray-700 hover:text-gray-200
                                              md:border-0 md:mx-2 md:px-3" aria-current="page">Realizar test
                        </a>
                    </li>
                </RouterLink>
                <RouterLink to="/resultados-estudiante">
                    <li>
                        <a href="#" class="transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  
                                            block py-2
                                        text-gray-100 border-b border-gray-400 hover:rounded-md text-sm hover:bg-gray-700 hover:text-gray-200
                                          md:border-0 md:mx-2 md:px-3" aria-current="page">Resultados</a>
                    </li>
                </RouterLink>
            </ul>
        </div>
    </nav>
</template>