<template>
    <header id="header">
        <div class="partner-header">
            <h1>MYJALI.com</h1>
            <ul>
                <li>로그인</li>
                <li>이용안내</li>
                <li>파트너 가입</li>
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