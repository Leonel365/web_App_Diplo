<template>
  <h1 class="text-4xl text-center text-gray-700 ">Test Psicosocial</h1>
  <br>

  <div>
    <form>
      <label for="Usuario_Usuario_idPersona" title="" hidden>Usuario_Usuario_idPersona:</label><br>
      <input type="text" id="Usuario_Usuario_idPersona" name="Usuario_Usuario_idPersona" title="" hidden><br>

      <label for="TestPsicosocial_idTestPsicosocial" hidden>TestPsicosocial_idTestPsicosocial:</label><br>
      <input type="text" id="TestPsicosocial_idTestPsicosocial" name="TestPsicosocial_idTestPsicosocial" title="" hidden><br>

      <label for="numPersonasVivienda" title="" class="mb-4 font-semibold text-gray-900">Número de personas en la vivienda:</label><br>
      <input type="number" id="numPersonasVivienda" name="numPersonasVivienda" title="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required><br>

      <label for="estrato" title="" class="mb-4 font-semibold text-gray-900">Estrato:</label><br>
      <select id="estrato" name="estrato" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
        <option value="">Seleccionar...</option>
        <option value="estrato 1" title="">Estrato 1 Bajo-bajo</option>
        <option value="estrato 2" title="">Estrato 2 Bajo</option>
        <option value="estrato 3" title="">Estrato 3 Medio-bajo</option>
        <option value="estrato 4" title="">Estrato 4 Medio</option>
        <option value="estrato 5" title="">Estrato 5 Medio - Alto</option>
        <option value="estrato 6" title="">Estrato 6 Alto</option>
      </select><br>

      <label for="estadoCivil" title="" class="mb-4 font-semibold text-gray-900">Estado civil:</label><br>
      <select id="estadoCivil" name="estadoCivil" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
        <option value="">Seleccionar...</option>
        <option value="estadoCivil soltero" title="">Soltero/a</option>
        <option value="estadoCivil casado" title="">Casado/a</option>
        <option value="estadoCivil uniónLibre" title="">Unión libre</option>
        <option value="estadoCivil separado" title="">Separado/a</option>
        <option value="estadoCivil divorciado" title="">Divorciado/a</option>
        <option value="estadoCivil viudo" title="">Viudo/a</option>
      </select><br>

      <label for="personasCargo" title="" class="mb-4 font-semibold text-gray-900">Personas a cargo:</label><br>
      <input type="number" id="personasCargo" name="personasCargo" title="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required><br>

      <label for="situacionEconomica" title="" class="mb-4 font-semibold text-gray-900">Situacion economica:</label><br>
      <fieldset >
          <div>
            <input type="radio" id="alto" name="situacionEconomica" value="alto" title="" required>
            <label for="alto" title="" class="w-full py-3 ml-2">Alto</label>
          </div>
          <div>
            <input type="radio" id="mediano" name="situacionEconomica" value="mediano" title="">
            <label for="mediano" title="" class="w-full py-3 ml-2">Medio</label>
          </div>
          <div>
            <input type="radio" id="bajo" name="situacionEconomica" value="bajo" title="">
            <label for="bajo" title="" class="w-full py-3 ml-2">Bajo</label>
          </div>
      </fieldset><br>

      <label for="actitud" title="" class="mb-4 font-semibold text-gray-900">Actitud:</label><br>
      <select id="actitud" name="actitud" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
        <option value="">Seleccionar... (posiciona el cursor para ver la descripción)</option>
        <option value="actitudManipuladora" title="es aquella que necesita controlar, cambiar y deformar los comportamientos o percepciones de los demás">Actitud manipuladora</option>
        <option value="actitudPesimista" title="se relaciona generalmente con un alto nivel de tolerancia o flexibilidad, siendo benevolente comienza a valorar y permitir transgresiones de las propias valoraciones">Actitud pesimista</option>
        <option value="actitudSumisa" title="En este tipo de actitud las personas se postulan como objetos permitiendo así que los demás sean los sujetos responsables y dueños de sus decisiones">Actitud sumisa</option>
        <option value="actitudPositiva" title="se caracteriza por la percepción o apreciación provechosa de las diferentes situaciones (independientemente si sean de dificultad) y permite que la persona se sienta estimulada para actuar de manera confiada">Actitud positiva</option>
        <option value="actitudNegativa" title="consiste en una percepción o interpretación de desesperanza, derrota, desilusión o de subterfugios de realismo">Actitud negativa</option>
        <option value="actitudAgresiva" title="se suele pasar en cuestión de segundos a la acción y figura un acto impulsivo que persigue la consecución del significado de justicia ignorando el de los demás">Actitud agresiva</option>
        <option value="actitudPasiva" title="Este tipo de actitud se caracteriza por la poca o nula acción">Actitud pasiva</option>
        <option value="actitudColaboradora" title="Tiene como objetivo lograr ayudar que los demás logren sus propósitos">Actitud colaboradora</option>
        <option value="actitudAltruista" title="realizan acciones con objetivos que proporciones beneficios o provecho a otra persona a un incluso cuando pueda generar pérdidas o no tenga ningún beneficio para sí mismo">Actitud altruista</option>
        <option value="actitudEmocional" title="se caracteriza por el valor o la prioridad que se le da al área emocional llevándolos así a vivir con más intensidad cada una de sus emociones">Actitud emocional</option>
        <option value="actitudNeutra" title="se caracteriza por no estar contorneado por afectividad o racionalidades (ni pesimistas y tampoco positivas) suelen ser objetivos con sus decisiones">Actitud neutra</option>
        <option value="actitudRacionalAnalítica" title="este tipo de actitud lleva a que se intenten ocultar o ignorar las emociones bajo justificaciones racionales (cognitivas)">Actitud racional/analítica</option>
        <option value="actitudConfiable" title="permite percibir los estímulos de placer o de dolor como una intención pedagógica">Actitud confiable</option>
        <option value="actitudFlexible" title="manifiestan la aceptación de las cualidades o criterios ajenos sin llegar a deshacerse de los propios">Actitud flexible</option>
        <option value="actitudEmpática" title="se caracteriza por personas que son conscientes de la existencia del otro y por tanto comprenden gracias a su propia autoevaluación o introspección que las conductas de los demás también tienen un origen">Actitud empática</option>
        <option value="actitudSuspicaz" title="se caracteriza por una desconfianza excesiva ante cualquier tipo de estímulos, generalmente estas personas están alerta ante cualquier tipo de agravio o intento de perjurio">Actitud suspicaz</option>
        <option value="actitudSardónica" title="Llenan de sarcasmos o ironías las conversaciones que mantienen con los demás">Actitud sardónica</option>
        <option value="actitudInflexible" title="Se caracteriza por un patrón rígido de conducta y pensamiento en donde se pretende que lo demás esté en sintonía con lo que se busca y se sufre terriblemente cuando no es así">Actitud inflexible</option>
        <option value="actitudMoralistaPrejuiciosa" title="se caracteriza por la preocupación del peso ético de las propias acciones y de los demás">Actitud moralista/prejuiciosa</option>
        <option value="actitudNihilista" title="se rechazan todos los principios morales o estructuras sociales, manteniendo la creencia de que la existencia misma y del todo carece de sentido o propósito intrínseco.">Actitud nihilista</option>
      </select><br>

      <label for="edad" class="mb-4 font-semibold text-gray-900">Edad:</label><br>
      <input type="number" id="edad" name="edad" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required><br>
      
      <label for="identSex" class="mb-4 font-semibold text-gray-900">Genero:</label><br>
      <fieldset>
          <div>
            <input type="radio" id="masculino" name="identSex" value="masculino" title="" required>
            <label for="masculino" title="" class="w-full py-3 ml-2">Masculino</label>
          </div>
          <div>
            <input type="radio" id="femenino" name="identSex" value="femenino" title="">
            <label for="femenino" title="" class="w-full py-3 ml-2">Femenino</label>
          </div>
          <div>
            <input type="radio" id="otro" name="identSex" value="otro" title="">
            <label for="otro" title="" class="w-full py-3 ml-2">Otro</label>
          </div>
      </fieldset><br><br>

      <button type="submit" value="Submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
    </form>
  </div>

</template>