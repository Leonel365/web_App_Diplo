<template>
    <div class="bg-gray-100">
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
                        <td class="py-2 px-4 border-b"><button data-modal-target="extralarge-modal"
                                data-modal-toggle="extralarge-modal"
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
                        <td class="py-2 px-4 border-b"><button data-modal-target="extralarge-modal"
                                data-modal-toggle="extralarge-modal"
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
                        <td class="py-2 px-4 border-b"><button data-modal-target="extralarge-modal"
                                data-modal-toggle="extralarge-modal"
                                class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button">
                                Ver resultado
                            </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>



    <div id="extralarge-modal" tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-7xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        Resultado del test TDV
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="extralarge-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Cerrar</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
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
                                            <td class="py-2 px-4 border-b">A veces tengo problemas en la escuela o en el
                                                trabajo por
                                                jugar</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He dejado de lado actividades sociales,
                                                familiares o
                                                laborales importantes por jugar</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">A veces me siento deprimido(a) o irritable cuando
                                                no puedo
                                                jugar</td>
                                            <td class="py-2 px-4 border-b">Con frecuencia</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">A veces me siento culpable o avergonzado(a) por
                                                la cantidad
                                                de tiempo que paso jugando</td>
                                            <td class="py-2 px-4 border-b">A veces</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He tenido dificultades para dormir porque juego
                                                hasta tarde
                                            </td>
                                            <td class="py-2 px-4 border-b">Siempre</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Cuando no puedo jugar siento irritabilidad o mal
                                                humor</td>
                                            <td class="py-2 px-4 border-b">Casi nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He descuidado mis responsabilidades (trabajo,
                                                estudios,
                                                tareas del hogar, etc.) debido a los videojuegos</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Me gustaría poder pasar menos tiempo jugando</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He sentido la necesidad de jugar durante períodos
                                                de tiempo
                                                cada vez más largos para sentirme satisfecho(a)</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">A veces juego más tiempo del que tenía planeado
                                            </td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He necesitado aumentar la cantidad de tiempo que
                                                paso jugando
                                                para lograr la misma satisfacción</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He perdido interés en actividades que solía
                                                disfrutar antes
                                                de comenzar a jugar</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Me siento inquieto(a) o irritable cuando no puedo
                                                jugar</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He perdido relaciones importantes (amigos,
                                                pareja, familia)
                                                debido a los videojuegos</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Me cuesta trabajo dejar de jugar</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He dejado de hacer actividades que solía
                                                disfrutar para jugar
                                                más tiempo</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Si no me funciona la videoconsola o el PC le pido
                                                prestada
                                                una a parientes o amigos</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Cuando no puedo jugar, siento ansiedad o
                                                inquietud</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He mentido acerca del tiempo que paso jugando
                                            </td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Me cuesta trabajo concentrarme en otras
                                                actividades porque
                                                pienso en los videojuegos</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Juego mucho más tiempo con los videojuegos que
                                                cuando comencé
                                            </td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Siento ansiedad o inquietud cuando no puedo jugar
                                            </td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">A veces juego para escapar de problemas o
                                                situaciones
                                                difíciles</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Siento que mi vida está centrada en los
                                                videojuegos</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He intentado reducir el tiempo que paso jugando
                                                pero no he
                                                podido</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">A veces he tenido problemas con amigos o
                                                familiares por jugar
                                                demasiado</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He ocultado la cantidad de tiempo que paso
                                                jugando a amigos,
                                                familiares o pareja</td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">He tenido dificultades para controlar la cantidad
                                                de tiempo
                                                que paso jugando</td>
                                            <td class="py-2 px-4 border-b">Siempre</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Siento que necesito jugar cada vez más para
                                                obtener la misma
                                                emoción</td>
                                            <td class="py-2 px-4 border-b">Con frecuencia</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Cuando no estoy jugando, pienso en volver a jugar
                                            </td>
                                            <td class="py-2 px-4 border-b">A veces</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Me gusta pasar más tiempo jugando que
                                                interactuando con otras
                                                personas</td>
                                            <td class="py-2 px-4 border-b">Casi nunca</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b">Siento que tengo un problema con mi uso de los
                                                videojuegos
                                            </td>
                                            <td class="py-2 px-4 border-b">Nunca</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="extralarge-modal" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                        accept</button>
                    <button data-modal-hide="extralarge-modal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
   
        mounted() {
            const modalButtons = Array.from(document.querySelectorAll('[data-modal-toggle]'));
            const closeModalButtons = Array.from(document.querySelectorAll('[data-modal-hide]'));
            const modalContainers = Array.from(document.querySelectorAll('[data-modal-target]'));

            function closeModal(modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }

            function showModal(modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }

            modalButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetModal = document.getElementById(button.dataset.modalTarget);
                    showModal(targetModal);
                });
            });

            closeModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetModal = document.getElementById(button.dataset.modalHide);
                    closeModal(targetModal);
                });
            });

            modalContainers.forEach(container => {
                container.addEventListener('click', event => {
                    if (event.target === container) {
                        closeModal(container);
                    }
                });
            });
        }
    }


</script>