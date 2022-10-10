import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import zip from 'rollup-plugin-zip'
import { obfuscator } from 'rollup-obfuscator';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  console.log({command}, {mode})

  if(mode === 'production') {
    // TODO
  }

  const env = loadEnv(mode, process.cwd())
  console.log(env)

  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_URL]: {
          target: 'https://api.github.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_URL}`), '')
        }
      }
    },
    build: {
      rollupOptions: {
        plugins: [
          obfuscator({
            global: false,
            include: ['src/**/*.js', 'src/**/*.vue'],
            exclude: 'node_modules',
          }),
          zip(),
        ]
      },
    }
  }
})
