<template>
    <div>
        <nav class="left-menu">
            <ul class="depth2">
                <li class="set-site">
                    <span><router-link to="/settingSite">환경 설정</router-link></span>
                    <ul>             
                        <li><router-link to="/settingSite">사이트 설정</router-link></li>
                        <li><router-link to="/settingProduct">상품 설정</router-link></li>
                    </ul>
                </li>
                <li class="set-schedule">
                    <span><router-link to="/settingSchedule">예약 설정</router-link></span>
                    <ul>
                        <li><router-link to="/settingSchedule">예약 등록</router-link></li>
                        <li><router-link to="/settingScheduleList">예약 리스트</router-link></li>
                    </ul>
                </li>
                <li class="set-menu">
                    <span><router-link to="/settingMenu">메뉴 설정</router-link></span>
                    <ul>
                        <li><router-link to="/settingMenu">메뉴 설정</router-link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name : 'LeftNavigation'
}

</script>