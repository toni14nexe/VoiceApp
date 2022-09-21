import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NotFound from './components/NotFound.vue'
import Main from './components/Main.vue'
import CookieRegistrationSuceed from './components/HeaderLogOut/CookieRegistrationSuceed.vue'
import CookieError from './components/HeaderLogOut/CookieError.vue'
import CookieUserExist from './components/HeaderLogOut/CookieUserExist.vue'
import CookieVerified from './components/HeaderLogOut/CookieVerified.vue'
import CookieResetSuceed from './components/HeaderLogOut/CookieResetSuceed.vue'
import CookieWrongEmail from './components/HeaderLogOut/CookieWrongEmail.vue'

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
        path: '/cookieRegistrationSuceed',
        component: CookieRegistrationSuceed
    },
    {
        path: '/cookieError',
        component: CookieError
    },
    {
        path: '/cookieUserExist',
        component: CookieUserExist
    },
    {
        path: '/cookieVerified',
        component: CookieVerified
    },
    {
        path: '/cookieResetSuceed',
        component: CookieResetSuceed
    },
    {
        path: '/cookieWrongEmail',
        component: CookieWrongEmail
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
//npm install vue-cookies