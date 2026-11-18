
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';
  import path from 'path';

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function rootRedirect() {
  return {
    name: 'root-redirect',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url === '/' || req.url === '') {
          res.writeHead(302, { Location: '/react/' });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

  export default defineConfig({
    base: '/react/',
    plugins: [react(), tailwindcss(), figmaAssetResolver(), rootRedirect()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: '../web/react',
      emptyOutDir: true,
    },
    server: {
      port: 3000,
      host: true,
      open: false,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
        },
      },
    },
  });
