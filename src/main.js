// ---------------------------------------------------------------------------
// main.js
// This is the file vite runs first when the site loads.
//
// 1. I import App.vue (my whole portfolio).
// 2. I import style.css once, here, so the styling applies everywhere.
// 3. createApp(App) creates the app and .mount('#app') puts it inside the
//    empty <div id="app"> in index.html.
//
// Without the div in the html there would be nothing for vue to attach to.
// ---------------------------------------------------------------------------

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')