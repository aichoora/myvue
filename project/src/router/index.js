import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";
import SubHeader from "../components/SubHeader.vue";

/* page */
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Partner from "../views/Partner.vue";

/* admin */
import SettingSite from "../admin/SettingSite.vue";
import SettingProduct from "../admin/SettingProduct.vue";
import SettingSchedule from "../admin/SettingSchedule.vue";


function mainLayout(content) {
    return { header: MainHeader, content, footer: MainFooter }
}

function centerLayout(content) {
    return { header: SubHeader, content, footer: MainFooter }
}
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        components: mainLayout(Home)
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: centerLayout(About)
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/partner",
        name: "Partner",
        components: centerLayout(Partner)
    },
    {
        path: "/SettingSite",
        name: "SettingSite",
        components: centerLayout(SettingSite)
    },
    {
        path: "/SettingProduct",
        name: "SettingProduct",
        components: centerLayout(SettingProduct)
    },
    {
        path: "/SettingSchedule",
        name: "SettingSchedule",
        components: centerLayout(SettingSchedule)
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;