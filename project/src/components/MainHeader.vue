<template>
    <div>
        <header id="main-header">
            <div class="center-header">
                <h1>MYJALI.com</h1>
                <ul>
                    <li>환경센터</li>
                    <li>예약설정</li>
                    <li>메뉴설정</li>
                </ul>
            </div>
        </header>
     
        <footer>
            <div>
                <ul>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li><a href="#">고객문의</a></li>
                </ul>
            </div>
            <div>
                <address>
                    Copyright © 2020 Contentstech., All rights reserved
                </address>
            </div>
        </footer> 
    </div>
</template>
<script>
export default {
    name : 'header'
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