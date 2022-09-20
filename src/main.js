import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NotFound from './components/NotFound.vue'
import Main from './components/Main.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/home',
        component: Main
    },
    {
        path: '/:notFound(.*)',
        component: NotFound
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');

//installations

//npm i vue-router --save
//npm install bootstrap
//npm i --save @fortawesome/fontawesome-svg-core