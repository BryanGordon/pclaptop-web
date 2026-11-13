// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import { fileURLToPath } from 'node:url';

/**
 * Assets live in the monorepo root `media/` folder (single source of truth),
 * exposed through the `@media` alias instead of being duplicated in `src`.
 */
const mediaDir = fileURLToPath(new URL('../../media', import.meta.url));

// https://astro.build/config
export default defineConfig({
	integrations: [svelte()],
	vite: {
		resolve: {
			alias: {
				'@media': mediaDir,
			},
		},
	},
});
