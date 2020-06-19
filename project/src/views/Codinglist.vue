<template>
    <div class="center">
        <h2>샘플 레이아웃 바로가기 -> <router-link to="/SampleLayout" style="color:#000;font-weight:bold">GOGOGOGO</router-link></h2>
        <h2 style="color:#000;font-size:35px">coding list</h2>
        <table class="table-style1">            
            <thead>
                <tr>
                    <th>구분(바로가기링크)</th>
                    <th>1depth</th>
                    <th>2depth</th>
                    <th>파일이름</th>
                    <th>screenId</th>
                    <th>설명</th>
                    <th>작업일체크</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><router-link to="/SignIn" target="_blank">SignIn</router-link></td>
                    <td>SignIn</td>
                    <td></td>
                    <td>./admin/SignIn.vue</td>
                    <td>SignIn_01</td>
                    <td>로그인 - 에러메시지 함께 작성함</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SignUpInfo" target="_blank">SignUp Info</router-link></td>
                    <td>SignUpInfo</td>
                    <td></td>
                    <td>./admin/SignUpInfo.vue</td>
                    <td>SignUp_Info_01</td>
                    <td>파트너 정보 입력</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SignUpTerms" target="_blank">SignUp Terms</router-link></td>
                    <td>SignUpterms</td>
                    <td></td>
                    <td>./admin/SignUp_terms.vue</td>
                    <td>SignUp_Terms_01</td>
                    <td>파트너 약관 동의</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SignUpComplete" target="_blank">SignUp Complete</router-link></td>
                    <td></td>
                    <td>SignUpComplete</td>
                    <td>./admin/SignUpComplete.vue</td>
                    <td>SignUp_Complete_01</td>
                    <td>파트너 가입 신청 완료</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/FindID" target="_blank">FindId </router-link></td>
                    <td>FindId</td>
                    <td></td>
                    <td>./admin/FindID.vue</td>
                    <td>FIND_ID_01</td>
                    <td>아이디 찾기</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/FindIdComplete" target="_blank">FindId Complete</router-link></td>
                    <td></td>
                    <td>FindIdComplete</td>
                    <td>./admin/FindIdComplete.vue</td>
                    <td>FIND_ID_complete_01</td>
                    <td>아이디 찾기 완료</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/FindIdFailed" target="_blank">FindIdFailed</router-link></td>
                    <td></td>
                    <td>FindIdFailed</td>
                    <td>./admin/FindIdFailed.vue</td>
                    <td>FIND_ID_complete_02</td>
                    <td>아이디 찾기 실패</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/FindPassword" target="_blank">Find Password</router-link></td>
                    <td>FindPassword</td>
                    <td></td>
                    <td>./admin/FindPassword.vue</td>
                    <td>FIND_Password_01</td>
                    <td>비밀번호 찾기</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/FindPassword2" target="_blank">Find Password2</router-link></td>
                    <td></td>
                    <td>FindPassword2</td>
                    <td>./admin/FindPassword2.vue</td>
                    <td>FIND_Password_02</td>
                    <td>비밀번호 재설정</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/FindPasswordComplete" target="_blank">Find PasswordComplete</router-link></td>
                    <td></td>
                    <td>FindPasswordComplete</td>
                    <td>./admin/FindPassComplete.vue</td>
                    <td>FIND_Password_complete_01</td>
                    <td>비밀번호 재설정 완료</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><router-link to="/SettingSite" target="_blank">Setting Site</router-link></td>
                    <td></td>
                    <td>SettingSite</td>
                    <td>./admin/SettingSite.vue</td>
                    <td></td>
                    <td>사이트 설정</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingProduct" target="_blank">Setting Product</router-link></td>
                    <td></td>
                    <td>SettingProduct</td>
                    <td>./admin/SettingProduct.vue</td>
                    <td></td>
                    <td>상품 설정</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingSchedule" target="_blank">Setting Schedule</router-link></td>
                    <td></td>
                    <td>SettingSchedule</td>
                    <td>./admin/SettingSchedule.vue</td>
                    <td></td>
                    <td>예약 등록</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingScheduleList" target="_blank">Setting Schedule List</router-link></td>
                    <td></td>
                    <td>SettingScheduleList</td>
                    <td>./admin/SettingScheduleList.vue</td>
                    <td></td>
                    <td>예약 리스트</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingMenu" target="_blank">Setting Menu</router-link></td>
                    <td></td>
                    <td>SettingMenu</td>
                    <td>./admin/SettingMenu.vue</td>
                    <td></td>
                    <td>메뉴 설정</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingSchduleComplete" target="_blank">Setting Schdule Complete</router-link></td>
                    <td></td>
                    <td>SettingSchduleComplete</td>
                    <td>./admin/SettingSchduleComplete.vue</td>
                    <td></td>
                    <td>예약 설정 완료</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingSchduleComplete2" target="_blank">Setting Schdule Complete2</router-link></td>
                    <td></td>
                    <td>SettingSchduleComplete2</td>
                    <td>./admin/SettingSchduleComplete2.vue</td>
                    <td></td>
                    <td>예약 수정 완료</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingScheduleModify" target="_blank">Setting Schedule Modify</router-link></td>
                    <td></td>
                    <td>SettingScheduleModify</td>
                    <td>./admin/SettingScheduleModify.vue</td>
                    <td></td>
                    <td>예약 수정 </td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingScheduleModify2" target="_blank">Setting Schedule Modify2</router-link></td>
                    <td></td>
                    <td>SettingScheduleModify2</td>
                    <td>./admin/SettingScheduleModify2.vue</td>
                    <td></td>
                    <td>예약 수정(스케쥴없음)</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingSchduleDelete" target="_blank">Setting Schedule Delete</router-link></td>
                    <td></td>
                    <td>SettingSchduleDelete</td>
                    <td>./admin/SettingSchduleDelete.vue</td>
                    <td></td>
                    <td>예약 삭제</td>
                    <td>0618/퍼블리싱끝</td>
                </tr>
                <tr>
                    <td><router-link to="/SettingSchduleDeleteComplete" target="_blank">Setting Schedule Delete Complete</router-link></td>
                    <td></td>
                    <td>SettingSchduleDeleteComplete</td>
                    <td>./admin/SettingSchduleDeleteComplete.vue</td>
                    <td></td>
                    <td>예약 삭제 완료</td>
                    <td>0618/퍼블리싱끝</td>
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
        table {
            td:first-child {
                color:#006f91;
                font-weight:bold;
            }
        }
</style>