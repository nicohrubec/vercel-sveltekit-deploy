import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  envPrefix: ['VITE_', 'SENTRY_'],
  plugins: [
    sentrySvelteKit({
      autoUploadSourceMaps: false,
    }),
    sveltekit(),
  ],
});
