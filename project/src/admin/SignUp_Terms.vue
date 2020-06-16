<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap singUp-wrap">
               <img src="../assets/images/side_bg.png" alt="side-bg">
           </div>
            <!-- content start -->
            <div class="content">

                <h2>파트너 약관 동의</h2>
                <!-- form field -->
                <form action="">
                    <fieldset>  
                        <h4>서비스 이용약관(필수)</h4>
                        <div class="terms-wrap">
                            <h5>제1조 (목적)</h5>
                            <p>이 약관은 콘텐츠테크(이하”회사”라 표기합니다)가 제공하는 사이버 회원에 대한 서비스 제공 및 이용조건, 회원가입에 관련된 사항 및 절차 그리고 기타 필요한 사항의 규정을 목적으로 합니다.</p>    
                            <h5>제2조 (약관의 효력)</h5>
                            <ul>
                                <li>1. 이 약관은 전기통신사업법 제31조, 동법 시행규칙 제21조의 2에 따라 공시절차를 거친 후 서비스 화면에 게시하거나 전자우편, 기타의 방법으로 회원에게 통지함 으로써 효력을 발생합니다.</li>  
                                <li>2. 회사는 이 약관을 변경할 수 있으며, 변경된 약관은 변경된 사항에 대하여 공지 또는 통지함으로써 효력을 발생합니다.</li> 
                            </ul> 
                            <h5>제3조 (약관 이외의 준칙)</h5>
                            <p>이 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신 사업법 및 기타 관련법령에 규정되어있는 경우 그 규정에 따릅니다.</p>    
                            <h5>제4조 (용어의 정의)</h5>
                            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                            <ul>
                                <li>1. 마이자리 사이버회원(이하”회원”이라 표기합니다) 마이자리 홈페이지를 통해 사이버 회원에 회원등록 하신 고객</li>  
                                <li>2. 아이디(ID) 회원 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자와 숫자의 조합</li>
                                <li>3. 비밀번호 회원의 비밀보호를 위하여 회원 자신이 설정한 문자와 숫자의 조합</li>
                            </ul> 
                        </div>
                        <div class="form-wrap">
                            <input type="radio" name="" id="">
                            <label for="">동의 합니다.</label>
                        </div>     
                        <h4>개인정보 처리방침(필수)</h4>  
                        <div class="terms-wrap">
                           <h5> [수집하는 개인정보의 항목 및 수집방법]</h5>
                            <p>이 약관은 콘텐츠테크(이하”회사”라 표기합니다)가 제공하는 사이버 회원에 대한 서비스 제공 및 이용조건, 회원가입에 관련된 사항 및 절차 그리고 기타 필요한 사항의 규정을 목적으로 합니다.</p>    
                            <ul>
                                <li>1.이 약관은 전기통신사업법 제31조, 동 법 시행규칙 제21조의 2에 따라 공시절차를 거친 후 서비스 화면에 게시하거나 전자우편, 기타의 방법으로 회원에게 통지함으로써 효력을 발생합니다.</li>
                                <li>2.회사는 이 약관을 변경할 수 있으며, 변경된 약관은 변경된 사항에 대하여 공지 또는 통지함으로써 효력을 발생합니다.</li>
                            </ul> 
                        </div> 
                        <div class="form-wrap">
                            <input type="radio" name="" id="">
                            <label for="">동의 합니다.</label>
                        </div>        
                       
                        <div class="button-wrap last-button-wrap">
                            <button type="button" class="primary large">약관 동의</button>
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
    name : "SignUpTerms"
}
</script>
