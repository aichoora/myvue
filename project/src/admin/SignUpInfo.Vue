<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap singUp-wrap">
               <img src="../assets/images/side_bg.png" alt="side-bg">
           </div>
            <!-- content start -->
            <div class="content">

                <h2>파트너 정보 입력</h2>
                <h3>파트너 정보</h3>
                <!-- form field -->
                <form action="">
                    <fieldset>  
                        <div class="form-wrap">
                            <label for="">아이디 (Email)</label>
                            <input type="text" name="" id="" placeholder="아이디로 사용하실 이메일을 입력해주세요.">
                        </div>     
                        <div class="form-wrap">
                            <label for="">비밀번호</label>
                            <input type="password" name="" id="" placeholder="비밀번호를 입력해주세요.">
                        </div>   
                        <div class="form-wrap">
                            <label for="">비밀번호 확인</label>
                            <input type="password" name="" id="" placeholder="비밀번호를 다시 한번 입력해주세요.">
                        </div>     
                        <div class="form-wrap">
                            <label for="">이름</label>
                            <input type="text" name="" id="" placeholder="이름">
                        </div> 


                        <div class="form-wrap">
                             <div class="date-list">
                                <p>생년월일</p>
                                <div class="select-form select-year">
                                    <select name="" id="">
                                        <option value="년">년</option>
                                    </select>
                                </div>
                                <div class="select-form select-month">
                                    <select name="" id="">
                                        <option value="월">월</option>
                                    </select>
                                </div>
                                <div class="select-form select-day">
                                    <select name="" id="">
                                        <option value="일">일</option>
                                    </select>
                                </div>
                            </div>
                        </div> 
                        <div class="form-wrap">
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
                        <div class="form-wrap">
                            <label for="">전화번호</label>
                            <input type="text" name="" id="" placeholder="숫자만 입력하세요.">
                        </div> 

                        <!-- 사업자 정보 -->
                        <h3>사업자 정보</h3>
                        <div  class="form-middle form-hompage">
                            <label for="">홈페이지 주소</label>
                            <input type="text" id="" name="" placeholder="URL">
                            <p class="last-text">.myjali.com</p>       
                            <p class="text">(홈페이지에 사용될 주소를 입력하세요.  예) test00.myjali.com )</p>                 
                        </div>      

                        <div class="form-wrap tree-chk">
                            <p class="title">사업자 타입 선택</p>
                            <!-- radio 3개 -->
                            <div class="three-radio">
                                <div class="radio-form">
                                    <input type="radio" id="name1" name="name1">
                                    <label for="">법인 사업자</label>
                                </div>
                                <div class="radio-form">
                                    <input type="radio" id="" name="">
                                    <label for="">개인 사업자</label>
                                </div>
                                <div class="radio-form">
                                    <input type="radio" id="" name="">
                                    <label for="">기타</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-wrap">
                            <label for="">사업자 등록 번호</label>
                            <input type="text" name="" id="" placeholder="숫자만 입력하세요.">
                        </div> 
                        <div class="form-wrap">
                            <label for="">서비스 이름</label>
                            <input type="text" name="" id="" placeholder="서비스 이름">
                        </div> 
                        <!-- 구글 캡챠 -->
                        <div class="captcha-wrap">
                             i'm not a robot
                        </div>
                        <div class="button-wrap last-button-wrap">
                            <button type="button" class="primary large">파트너 가입 신청하기</button>
                        </div>

                    </fieldset>
                </form>

                <!-- 구글 광고 -->
               <bottomAdvertisement></bottomAdvertisement>             
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "SignUpInfo"
}
</script>
