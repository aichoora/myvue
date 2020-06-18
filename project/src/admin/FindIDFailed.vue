<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap findId-wrap"></div>
            <!-- content start -->
            <div class="content">

                <h2>아이디 찾기</h2>
                <p>입력하신 정보와 일치하는 내용이 없습니다.</p>
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
                                <td class="color-red">일치하는 정보가 없습니다.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bottom-text-wrap">
                    <p><strong>가입하신 정보가 확인이 불가 한가요?</strong></p>
                    <p><a href="mailto:admin@contentstech.co.kr">admin@contentstech.co.kr</a> 로 문의 내용을 보내주세요. <br/>
                    확인 후 연락 드리겠습니다.</p>
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
    name : "FindIdFailed"
}
</script>
