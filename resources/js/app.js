require('./bootstrap')
// require('./interceptors')

import Vue from "vue"
import App from "./App.vue"
import vuetify from "./vuetify.js"
import router from './router'
import store from './store'

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#root')
