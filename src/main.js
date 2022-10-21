import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Tooltip from 'primevue/tooltip';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          

const app = createApp(App);
app.use(PrimeVue);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.directive('tooltip', Tooltip);

app.mount('#app');
