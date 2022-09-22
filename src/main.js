import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NotFound from './components/NotFound.vue'
import Main from './components/Main.vue'
import CookieRegistrationSuceed from './components/HeaderLogOut/Cookies/CookieRegistrationSuceed.vue'
import CookieError from './components/HeaderLogOut/Cookies/CookieError.vue'
import CookieUserExist from './components/HeaderLogOut/Cookies/CookieUserExist.vue'
import CookieVerified from './components/HeaderLogOut/Cookies/CookieVerified.vue'
import CookieResetSuceed from './components/HeaderLogOut/Cookies/CookieResetSuceed.vue'
import CookieWrongEmail from './components/HeaderLogOut/Cookies/CookieWrongEmail.vue'
import CookieNewPassword from './components/HeaderLogOut/Cookies/CookieNewPassword.vue'
import CookieNewPasswordSuceed from './components/HeaderLogOut/Cookies/CookieNewPasswordSuceed.vue'

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
        path: '/cookieNewPassword',
        component: CookieNewPassword
    },
    {
        path: '/cookieNewPasswordSuceed',
        component: CookieNewPasswordSuceed
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