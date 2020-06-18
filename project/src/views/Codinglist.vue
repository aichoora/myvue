<template>
    <div class="center">
        <h2>coding list</h2>
        <table class="table-style1">            
            <thead>
                <tr>
                    <th>구분</th>
                    <th>1depth</th>
                    <th>2depth</th>
                    <th>파일이름</th>
                    <th>screenId</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SignIn</td>
                    <td>SignIn</td>
                    <td></td>
                    <td>./admin/SignIn01.vue</td>
                    <td>SignIn_01</td>
                    <td>로그인 - 에러메시지 함께 작성함</td>
                </tr>
                <tr>
                    <td>SignUp Info</td>
                    <td>SignUpInfo</td>
                    <td></td>
                    <td>./admin/SignUpInfo.vue</td>
                    <td>SignUp_Info_01</td>
                    <td>파트너 정보 입력</td>
                </tr>
                <tr>
                    <td>SignUp Terms</td>
                    <td>SignUpterms</td>
                    <td></td>
                    <td>./admin/SignUp_terms.vue</td>
                    <td>SignUp_Terms_01</td>
                    <td>파트너 약관 동의</td>
                </tr>
                <tr>
                    <td>SignUp Complete</td>
                    <td>SignUpComplete</td>
                    <td></td>
                    <td>./admin/SignUpComplete.vue</td>
                    <td>SignUp_Complete_01</td>
                    <td>파트너 가입 신청 완료</td>
                </tr>
                <tr>
                    <td>FindId </td>
                    <td>FindId</td>
                    <td></td>
                    <td>./admin/FindId.vue</td>
                    <td>FIND_ID_01</td>
                    <td>아이디 찾기</td>
                </tr>
                <tr>
                    <td>FindId Complete</td>
                    <td>FindIdComplete</td>
                    <td></td>
                    <td>./admin/FindIdComplete.vue</td>
                    <td>FIND_ID_complete_01</td>
                    <td>아이디 찾기 완료</td>
                </tr>
                <tr>
                    <td>FindIdFailed</td>
                    <td>FindIdFailed</td>
                    <td></td>
                    <td>./admin/FindIdFailed.vue</td>
                    <td>FIND_ID_complete_02</td>
                    <td>아이디 찾기 실패</td>
                </tr>
                <tr>
                    <td>Find Password</td>
                    <td>FindPassword</td>
                    <td></td>
                    <td>./admin/FindPassword.vue</td>
                    <td>FIND_Password_01</td>
                    <td>비밀번호 찾기 완료</td>
                </tr>
                <tr>
                    <td>Find Password</td>
                    <td>FindPassword</td>
                    <td></td>
                    <td>./admin/FindPassword.vue</td>
                    <td>FIND_Password_02</td>
                    <td>비밀번호 재설정</td>
                </tr>
                <tr>
                    <td>Find Password</td>
                    <td>FindPassword</td>
                    <td></td>
                    <td>./admin/FindPassword.vue</td>
                    <td>FIND_Password_02</td>
                    <td>비밀번호 재설정</td>
                </tr>
                <tr>
                    <td>Find PasswordComplete</td>
                    <td>FindPasswordComplete</td>
                    <td></td>
                    <td>./admin/FindPassComplete.vue</td>
                    <td>FIND_Password_complete_01</td>
                    <td>비밀번호 재설정 완료</td>
                </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
export default {
    name : "codingList"
}
</script>
<style lang="scss" scoped>
    #app {
        padding:120px;
        .center {
            width:1190px;
            margin:0 auto;
            h2 {
                padding:20px 0;
            }
        }
    }
        header, footer {
            display: none !important;
        }
</style>