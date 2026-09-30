// ---------------------------------------------------------------------------
// vite.config.js
// The settings for vite (the tool that runs and builds my site).
// I only needed two things here, otherwise everything works on the defaults.
// ---------------------------------------------------------------------------

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // this plugin teaches vite about .vue files

export default defineConfig({
  // without the vue plugin vite does not know how to read App.vue
  plugins: [vue()],

  // these are the dev server settings (npm run dev)
  server: {
    port: 5173, // the default anyway, but I wanted to be sure it is this port
    open: true // opens my browser automatically when I start the server
  }
})