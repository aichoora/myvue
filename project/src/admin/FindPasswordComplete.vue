<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap findId-wrap"></div>
            <!-- content start -->
            <div class="content">

                <h2>비밀번호 재설정</h2>
                <p class="sub-text">비밀번호 재설정이 완료 되었습니다.</p>
                <div class="table-wrap">
                     <table class="table-style2">
                        <caption>비밀번호 재설정</caption>
                        <colgroup>
                            <col width="20%">
                            <col width="">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>비밀번호</th>
                                <td>12*************</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="paswordComplete-text">
                    <p>이제, 마이자리닷컴(가제)에 로그인 하실 수 있습니다.</p>
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
    name : "FindPasswordComplete"
}
</script>
