<template>
    <header id="sub-header">
        <div class="partner-header">
            <h1><img src="../assets/images/logo.png" alt="MYJALI.com"></h1>
            <ul>
                <li><router-link to="/SettingSite">환경 설정</router-link> </li>
                <li><router-link to="/SettingSchedule">예약 설정</router-link> </li>
                <li><router-link to="/Partner">메뉴 설정</router-link></li>          
            </ul>
            <!-- top-nav component -->
            <div class="top-nav">
                <a href="#" class="user-menu">내계정</a>
                <a href="#" class="login">로그인</a>
            </div>

        </div>
    </header>    
</template>

<script>
export default {
    name : "SubHeader"
}
</script>
