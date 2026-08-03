import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '~@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome'),
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5174,
        strictPort: true,
        origin: 'http://localhost:5174',
        cors: {
            origin: 'http://localhost:8080',
        },
        hmr: {
            host: 'localhost',
        },
    },
});
