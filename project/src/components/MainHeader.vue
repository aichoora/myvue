<template>
    <header id="header">
        <div class="user-header">
            <!-- .mobileMenu 햄버거 메뉴 -->
            <div class="mobileMenu">
                <span></span>
                <span></span>
                <span></span>      
            </div>
            <h1><img src="../assets/images/logo.png" alt="MYJALI.com"></h1>            
            <ul class="gnb">
                <li><router-link to="/SignIn">로그인</router-link></li>
                <li><router-link to="/">이용안내</router-link></li>
                <li><router-link to="/SignUpInfo">파트너 가입</router-link></li>
            </ul>
        </div>
    </header>  
</template>

<script>
export default {
    name : "MainHeader"
}
</script>

<style scoped lang="scss">
    #main-header {
        overflow: hidden;
        width:1920px;
        height:90px;
        margin:0 auto;
        border-bottom:1px solid #ccc;
        h1, ul {
            float:left;
        }
        ul li { 
            list-style:none;
            float:left;
            font-size: 22px;
            font-weight: 500;
            color:#000
        }
    }
    h1 {
        font-weight:700; 
        font-size:27px
        }
</style>