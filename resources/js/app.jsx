import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Igor Józefowicz';

createInertiaApp({
    title: (title) => {
        const homeTitle = 'Igor Józefowicz - personal website';

        if (!title) return appName;

        // Map the Home page to the exact desired title
        if (String(title).toLowerCase() === 'home') return homeTitle;

        // If a full title is already provided, don't append the app name again
        if (title.includes(appName) || title.includes(homeTitle)) return title;

        return `${title} - ${appName}`;
    },
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
