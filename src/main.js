import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/routes';

const app = createApp(App);

    app.use(routes);

createApp(App).mount('#app')
