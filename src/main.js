import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/main.css';
import { createRouter, createWebHistory } from 'vue-router';
import BoardChecker from './components/BoardChecker.vue';
import SplashScreen from './components/SplashScreen.vue';
import PlayVsAI from './components/PlayVsAI.vue';

const routes = [
    { path: '/', component: SplashScreen },
    { path: '/board-checker', component: BoardChecker },
    { path: '/play-vs-ai', component: PlayVsAI },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');