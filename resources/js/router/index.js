import Vue from 'vue'
import VueRouter from 'vue-router'
const PageNotFound = {
    template: "<div>Page Not Found => " + window.location.pathname.substr(1) + "</div>"
}
// import MainRoutes from './mainroutes.js'
// import AuthRoutes from "./authroutes.js"
// import UserRoutes from "./userroutes.js"
// import BlogRoutes from "./blogroutes.js"
// import CategoryRoutes from "./categoryroutes.js"
// import CommentRoutes from "./commentroutes.js"
// import BeforeEach from './beforeeach.js'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            name: 'index',
            path: '/',
            component: () => import('../views/Index.vue')
        },
        {
            path: '/404',
            name: 'pagenotfound',
            alias: "*",
            component: PageNotFound
        }
        // ...MainRoutes,
        // ...AuthRoutes,
        // ...UserRoutes,
        // ...BlogRoutes,
        // ...CategoryRoutes,
        // ...CommentRoutes
    ]
})

// router.beforeEach(BeforeEach)

export default router
