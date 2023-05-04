import { createApp } from 'vue'


// Importa el componente principal
import App from './App.vue'

// Importa el manejo de las rutas
import router from './router'

// Importa los estilos CSS
import './assets/estilos.css'


// Crea una aplicacion VUE
const app = createApp(App)

app.use(router)

app.mount('#app')
