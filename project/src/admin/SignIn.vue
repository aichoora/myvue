<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap short"></div>
            <!-- content start -->
            <div class="content">

                <h2>로그인</h2>
                <!-- form field -->
                <form action="">
                    <fieldset>  
                        <div class="form-wrap login-form">
                            <label for="">아이디</label>
                            <input type="text" id="" name="" placeholder="E-mail 아이디" >
                            <div class="error-msg">- 이메일을 입력해주세요</div>
                            <label for="" class="pw-label">비밀번호</label>
                            <input type="password" id="" name="" placeholder="비밀번호" >
                            <div class="error-msg">- 비밀번호를 입력해주세요</div>
                        </div>         
                        <div class="findInfo-wrap">
                            <div class="left-box">
                                <input type="radio" name="" id="">
                                <label for="">아이디 저장</label>
                            </div>
                            <div class="right-box">
                                <a href="#" class="link">아이디 찾기</a>
                                <a href="#" class="link">비밀번호 재설정</a>
                            </div>
                        </div>        
                       
                         <div class="button-wrap last-button-wrap">
                            <button type="button" class="primary large">로그인</button>
                        </div>
                        <div class="signup-info">
                            <p>앗! 아직 아이디가 없으신가요?</p>
                            <a href="#" class="link">파트너 가입하기</a>
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
    name : "SignIn01"
}
</script>
