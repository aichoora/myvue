<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap signUp-wrap short"></div>
            <!-- content start -->
            <div class="content">                
                <!-- 가입완료 -->
                <h2 class="signupComplete-title">파트너 가입<br/><span>신청이 완료되었습니다.</span></h2>
                <div class="signupComplete-info">
                    <p class="title">가입 승인 대기 </p>
                    <ul class="user-infomation">
                        <li><span>test2020@naver.com</span></li>
                        <li><span>test2020</span>.myjali.com</li>
                    </ul>
                    <p>입력하신 이메일 아이디로 인증메일이 발송되었습니다. <br/>
                    메일의 인증 링크를 클릭해서 인증을 완료 하신 후, 관리자의 사용 승인을 기다려 주세요.<br/>
                    감사합니다.</p>
                </div>

                <!-- 구글 광고 -->
               <bottomAdvertisement></bottomAdvertisement>   

               <!-- 가입 푸터 -->                         
               <subFooter></subFooter>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name : "SignUpComplete"
}
</script>
