import './bootstrap';
import '../sass/index.scss';
import './components/navigation.js';

import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { createApp, h } from 'vue';
import Counter from './components/Counter.vue';

createInertiaApp({
    resolve: name => import(`./Pages/${name}.vue`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});

// document.addEventListener('DOMContentLoaded', () => {
//     const el = document.getElementById('vue-counter');
//     if (el) {
//         const app = createApp(Counter);
//         app.mount('#vue-counter');
//     }
// });
