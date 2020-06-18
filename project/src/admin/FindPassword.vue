<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap findId-wrap"></div>
            <!-- content start -->
            <div class="content">

                <h2>비밀번호 재설정</h2>
                <p>파트너 가입시 등록하신 아이디와 비밀번호 힌트 질문/답변을 입력해주세요.</p>
                <!-- form field -->
                <form action="">
                    <fieldset>  
                         <div class="form-wrap">
                            <label for="">아이디 (Email)</label>
                            <input type="text" name="" id="" placeholder="아이디로 사용하실 이메일을 입력해주세요.">
                        </div>  

                        <div class="form-wrap hint-form">
                            <p>비밀번호 힌트질문</p>
                            <div class="select-form">
                                <select name="" id="">
                                    <option value="내 별명은?">내 별명은?</option>
                                </select>
                            </div>   
                        </div> 

                        <div class="form-wrap">
                            <label for="">비밀번호 힌트 답변</label>
                            <input type="text" name="" id="" placeholder="답변">
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
    name : "FindPassword"
}
</script>
