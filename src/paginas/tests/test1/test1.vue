<template>
    <div class="container mx-auto p-4">
        <form @submit.prevent="submitForm">
            <div v-for="(question, index) in shuffledQuestions" :key="index" class="mb-4">
                <div class="font-bold">{{ question.text }}</div>
                <div class="flex items-center mt-2">
                    <label v-for="(option, optionIndex) in options" :key="optionIndex"
                        class="inline-flex items-center mr-4">
                        <input type="radio" :name="'question-' + index" :value="option.value" v-model="question.response"
                            class="form-radio h-5 w-5 text-blue-500">
                        <span class="ml-2 text-gray-700">{{ option.text }}</span>
                    </label>
                </div>
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Calcular
            </button>
        </form>

        <div v-if="showResults" class="mt-8">
            <canvas ref="chart" class="w-full"></canvas>
        </div>
    </div>
</template>
  
<script>

import Chart from 'chart.js/auto';

export default {
    data() {
        return {
            questions: [
                { text: 'Juego mucho más tiempo con los videojuegos que cuando comencé', category: 'Abuso y Tolerancia', response: null },
                { text: 'Si no me funciona la videoconsola o el PC le pido prestada una a parientes o amigos', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'Me cuesta trabajo dejar de jugar', category: 'Abstinencia', response: null },
                { text: 'A veces juego más tiempo del que tenía planeado', category: 'Abuso y Tolerancia', response: null },
                { text: 'Cuando no puedo jugar siento irritabilidad o mal humor', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'A veces tengo problemas en la escuela o en el trabajo por jugar', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'He intentado reducir el tiempo que paso jugando pero no he podido', category: 'Abuso y Tolerancia', response: null },
                { text: 'Me gustaría poder pasar menos tiempo jugando', category: 'Abuso y Tolerancia', response: null },
                { text: 'Siento que necesito jugar cada vez más para obtener la misma emoción', category: 'Abuso y Tolerancia', response: null },
                { text: 'Me cuesta trabajo concentrarme en otras actividades porque pienso en los videojuegos', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'Cuando no estoy jugando, pienso en volver a jugar', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'He dejado de hacer actividades que solía disfrutar para jugar más tiempo', category: 'Abuso y Tolerancia', response: null },
                { text: 'A veces me siento culpable o avergonzado(a) por la cantidad de tiempo que paso jugando', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'Cuando no puedo jugar, siento ansiedad o inquietud', category: 'Abstinencia', response: null },
                { text: 'He mentido acerca del tiempo que paso jugando', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'A veces he tenido problemas con amigos o familiares por jugar demasiado', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'Siento que mi vida está centrada en los videojuegos', category: 'Abuso y Tolerancia', response: null },
                { text: 'He tenido dificultades para dormir porque juego hasta tarde', category: 'Abuso y Tolerancia', response: null },
                { text: 'A veces me siento deprimido(a) o irritable cuando no puedo jugar', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'Me gusta pasar más tiempo jugando que interactuando con otras personas', category: 'Abuso y Tolerancia', response: null },
                { text: 'He perdido interés en actividades que solía disfrutar antes de comenzar a jugar', category: 'Abuso y Tolerancia', response: null },
                { text: 'A veces juego para escapar de problemas o situaciones difíciles', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'He descuidado mis responsabilidades (trabajo, estudios, tareas del hogar, etc.) debido a los videojuegos', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'Siento ansiedad o inquietud cuando no puedo jugar', category: 'Abstinencia', response: null },
                { text: 'He ocultado la cantidad de tiempo que paso jugando a amigos, familiares o pareja', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'He sentido la necesidad de jugar durante períodos de tiempo cada vez más largos para sentirme satisfecho(a)', category: 'Abuso y Tolerancia', response: null },
                { text: 'He dejado de lado actividades sociales, familiares o laborales importantes por jugar', category: 'Problemas ocasionados por los videojuegos', response: null },
                { text: 'Siento que tengo un problema con mi uso de los videojuegos', category: 'Abuso y Tolerancia', response: null },
                { text: 'He tenido dificultades para controlar la cantidad de tiempo que paso jugando', category: 'Abuso y Tolerancia', response: null },
                { text: 'He necesitado aumentar la cantidad de tiempo que paso jugando para lograr la misma satisfacción', category: 'Abuso y Tolerancia', response: null },
                { text: 'Me siento inquieto(a) o irritable cuando no puedo jugar', category: 'Abstinencia', response: null },
                { text: 'He perdido relaciones importantes (amigos, pareja, familia) debido a los videojuegos', category: 'Problemas ocasionados por los videojuegos', response: null },
            ],
            options: [
                { text: 'Nunca', value: 1 },
                { text: 'Casi nunca', value: 2 },
                { text: 'A veces', value: 3 },
                { text: 'Con frecuencia', value: 4 },
                { text: 'Siempre', value: 5 }
            ],
            showResults: false,
            dependencyCategories: {
                Abstinencia: {
                    low: { min: 0, max: 12, level: 'Dependencia baja' },
                    moderate: { min: 13, max: 16, level: 'Dependencia moderada' },
                    high: { min: 17, max: 27, level: 'Dependencia alta' }
                },
                'Abuso y Tolerancia': {
                    low: { min: 0, max: 5, level: 'Dependencia baja' },
                    moderate: { min: 6, max: 12, level: 'Dependencia moderada' },
                    high: { min: 13, max: 20, level: 'Dependencia alta' }
                },
                'Problemas ocasionados por los videojuegos': {
                    low: { min: 0, max: 4, level: 'Dependencia baja' },
                    moderate: { min: 5, max: 10, level: 'Dependencia moderada' },
                    high: { min: 11, max: 16, level: 'Dependencia alta' }
                },
                'Dificultad en el control': {
                    low: { min: 0, max: 7, level: 'Dependencia baja' },
                    moderate: { min: 8, max: 15, level: 'Dependencia moderada' },
                    high: { min: 16, max: 24, level: 'Dependencia alta' }
                }
            }
        };
    },

    computed: {
        shuffledQuestions() {
            return this.questions.sort(() => Math.random() - 0.5);
        },
        totalScore() {
            return this.questions.reduce((total, question) => total + (question.response || 0), 0);
        },
        abstentionScore() {
            const abstentionQuestions = this.questions.filter(question => question.category === 'Abstinencia');
            return abstentionQuestions.reduce((total, question) => total + (question.response || 0), 0);
        },
        abstentionLevel() {
            return this.getDependencyLevel(this.abstentionScore, 'Abstinencia');
        },
        abuseToleranceScore() {
            const abuseToleranceQuestions = this.questions.filter(question => question.category === 'Abuso y Tolerancia');
            return abuseToleranceQuestions.reduce((total, question) => total + (question.response || 0), 0);
        },
        abuseToleranceLevel() {
            return this.getDependencyLevel(this.abuseToleranceScore, 'Abuso y Tolerancia');
        },
        problemsScore() {
            const problemsQuestions = this.questions.filter(question => question.category === 'Problemas ocasionados por los videojuegos');
            return problemsQuestions.reduce((total, question) => total + (question.response || 0), 0);
        },
        problemsLevel() {
            return this.getDependencyLevel(this.problemsScore, 'Problemas ocasionados por los videojuegos');
        },
        controlScore() {
            const controlQuestions = this.questions.filter(question => question.category === 'Dificultad en el control');
            return controlQuestions.reduce((total, question) => total + (question.response || 0), 0);
        },
        controlLevel() {
            return this.getDependencyLevel(this.controlScore, 'Dificultad en el control');
        }
    },
    methods: {
        submitForm() {
            this.showResults = true;
            this.generateChart();
        },
        generateChart() {
            const ctx = this.$refs.chart.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'Abstinencia',
                        'Abuso y Tolerancia',
                        'Problemas ocasionados por los videojuegos',
                        'Dificultad en el control'
                    ],
                    datasets: [
                        {
                            label: 'Nivel de dependencia',
                            data: [
                                this.abstentionScore,
                                this.abuseToleranceScore,
                                this.problemsScore,
                                this.controlScore
                            ],
                            backgroundColor: '#4299e1'
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 30
                        }
                    }
                }
            });
        },
        getDependencyLevel(score, category) {
            const levels = this.dependencyCategories[category];
            for (const level of Object.values(levels)) {
                if (score >= level.min && score <= level.max) {
                    return level.level;
                }
            }
            return 'N/A';
        }
    },
    mounted() {
        Vue.nextTick(() => {
            this.generateChart();
        });
    }
};
</script>

<style>
canvas {
    max-width: 100%;
}
</style>