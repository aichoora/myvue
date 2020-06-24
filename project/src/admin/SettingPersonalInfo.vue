<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
            <nav class="left-menu">
                <ul class="depth2">
                    <li class="set-site">
                        <span><router-link to="/settingSite">내계정</router-link></span>
                        <ul>             
                            <li><router-link to="/settingSite">개인정보 수정</router-link></li>
                            <li><router-link to="/settingProduct">비밀번호 수정</router-link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <!-- content start -->
            <div class="content">

                <h2>개인정보 수정</h2>
                <p>개인 정보 확인 및 수정을 위해 비밀번호를 입력해주세요.</p>
                <div class="form-wrap">
                    <div class="form-large">
                        <input type="text" name="" id="" placeholder="비밀번호">
                        <label for="">비밀번호</label>
                    </div>
                </div>
                <div class="button-wrap">
                    <button type="button" class="button-primary large">정보 수정하기</button>
                </div>

                <!-- 구글 광고 -->
                <bottomAdvertisement></bottomAdvertisement>        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "SettingPersonalInfo"
}
</script>
