// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

function resourceSpaceDecoderPlugin() {
  return {
    name: 'resource-space-decoder',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.includes('/resources/') && req.url.includes('%20')) {
          req.url = decodeURIComponent(req.url);
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.includes('/resources/') && req.url.includes('%20')) {
          req.url = decodeURIComponent(req.url);
        }
        next();
      });
    }
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), resourceSpaceDecoderPlugin()]
  }
});
