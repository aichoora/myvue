<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap findId-wrap"></div>
            <!-- content start -->
            <div class="content">

                <h2>비밀번호 재설정</h2>
                <p class="sub-text">비밀번호 힌트 확인이 완료 되었습니다.<br/>새롭게 사용하실 비밀번호를 확인해주세요.</p>
                <!-- form field -->
                <form action="">
                    <fieldset>  
                        <div class="form-wrap">
                            <label for="">비밀번호</label>
                            <input type="password" name="" id="" placeholder="비밀번호를 입력해주세요.">
                        </div>   
                        <div class="form-wrap">
                            <label for="">비밀번호 확인</label>
                            <input type="password" name="" id="" placeholder="비밀번호를 다시 한번 입력해주세요.">
                        </div>  

                        <!-- 구글 캡챠 : 캡챠 넣으셨는데 이미지 크기가 이상하면 말씀 주세여~~ -->
                        <div class="captcha-wrap">
                            <img src="../assets/images/robo.png" alt="" style="width:340px">
                        </div>

                        <div class="button-wrap last-button-wrap">
                            <button type="button" class="primary large">비밀번호 재설정</button>
                        </div>
                    </fieldset>                    
                </form>

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
    name : "FindPasswordComplete"
}
</script>
