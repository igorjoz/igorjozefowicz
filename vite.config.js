import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '~@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome'),
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
    // server: {
    //     https: true,
    //     host: 'localhost',
    // },
});
