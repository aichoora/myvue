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
import SettingSite from "../admin/SettingSite.vue"; //사이트설정
import SettingProduct from "../admin/SettingProduct.vue"; //상품설정정
import SettingSchedule from "../admin/SettingSchedule.vue" //예약 등록
import SettingScheduleList from "../admin/SettingScheduleList.vue"; //예약 리스트
import SettingMenu from "../admin/SettingMenu.vue"; //메뉴 설정
import SettingSchduleComplete from "../admin/SettingSchduleComplete.vue"; //예약설정 완료
import SettingSchduleComplete2 from "../admin/SettingSchduleComplete2.vue"; //예약 수정 완료
import SettingScheduleModify from "../admin/SettingScheduleModify.vue"; //예약 수정
import SettingScheduleModify2 from "../admin/SettingScheduleModify2.vue"; //예약 수정(스케쥴없음)
import SettingSchduleDelete from "../admin/SettingSchduleDelete.vue"; //예약 삭제
import SettingSchduleDeleteComplete from "../admin/SettingSchduleDeleteComplete.vue"; //예약 삭제 완료
import SignIn01 from "../admin/SignIn01.vue"; //로그인
import SignUpInfo from "../admin/SignUpInfo.vue"; //파트너정보입력력


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
        path: "/settingSite",
        name: "SettingSite",
        components: centerLayout(SettingSite)
    },
    {
        path: "/settingProduct",
        name: "SettingProduct",
        components: centerLayout(SettingProduct)
    },
    {
        path: "/settingSchedule",
        name: "SettingSchedule",
        components: centerLayout(SettingSchedule)
    },
    {
        path: "/settingScheduleList",
        name: "SettingScheduleList",
        components: centerLayout(SettingScheduleList)
    },
    {
        path: "/settingMenu",
        name: "SettingMenu",
        components: centerLayout(SettingMenu)
    },
    {
        path: "/settingSchduleComplete",
        name: "SettingSchduleComplete",
        components: centerLayout(SettingSchduleComplete)
    },
    {
        path: "/settingSchduleComplete2",
        name: "SettingSchduleComplete2",
        components: centerLayout(SettingSchduleComplete2)
    },
    {
        path: "/settingScheduleModify",
        name: "SettingScheduleModify",
        components: centerLayout(SettingScheduleModify)
    },
    {
        path: "/settingScheduleModify2",
        name: "SettingScheduleModify2",
        components: centerLayout(SettingScheduleModify2)
    },
    {
        path: "/settingSchduleDelete",
        name: "SettingSchduleDelete",
        components: centerLayout(SettingSchduleDelete)
    },
    {
        path: "/settingSchduleDeleteComplete",
        name: "SettingSchduleDeleteComplete",
        components: centerLayout(SettingSchduleDeleteComplete)
    },
    {
        path: "/signIn01",
        name: "SignIn01",
        components: centerLayout(SignIn01)
    },
    {
        path: "/signUpInfo",
        name: "SignUpInfo",
        components: centerLayout(SignUpInfo)
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;