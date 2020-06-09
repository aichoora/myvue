import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";

/* page */
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Partner from "../views/Partner.vue";


function MAIN_LAYOUT(content) {
    return { header: MainHeader, content, footer: MainFooter }
}
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: MAIN_LAYOUT(Home)
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: MAIN_LAYOUT(About)
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/partner",
        name: "Partner",
        component: MAIN_LAYOUT(Partner)
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;