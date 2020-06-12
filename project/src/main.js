import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import styles from "./assets/css/common.scss";
import LeftNavigation from "./components/LeftNavigation";
import bottomAdvertisement from "./components/bottomAdvertisement";

Vue.component('LeftNavigation', LeftNavigation);
Vue.component('bottomAdvertisement', bottomAdvertisement);

Vue.config.productionTip = false;

new Vue({
    router,
    styles,
    render: h => h(App)
}).$mount("#app");