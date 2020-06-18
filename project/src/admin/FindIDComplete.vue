<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap findId-wrap"></div>
            <!-- content start -->
            <div class="content">

                <h2>아이디 찾기</h2>
                <p>아이디(Email) 찾기가 완료 되었습니다.</p>
                <div class="table-wrap">
                     <table class="table-style2">
                        <caption>아이디 찾기</caption>
                        <colgroup>
                            <col width="20%">
                            <col width="">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>아이디 (Email)</th>
                                <td>test@naver.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bottom-text-wrap">
                    <p><strong>비밀번호도 함께 찾고 싶으신가요?</strong></p>
                    <p>비밀번호 재설정을 선택하면, <br/>
                    <p>지금 바로 새로운 비밀번호로 바꿔서 로그인 할 수 있습니다.</p>
                </div>
                <div class="button-wrap last-button-wrap">
                    <button type="button" class="primary large">비밀번호 재설정</button>
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
    name : "FindIDComplete"
}
</script>
