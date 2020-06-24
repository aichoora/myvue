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

                <div class="personalInfo-wrap">
                    <div class="form-wrap">
                        <div class="form-large">
                            <label for="">이름</label>
                            <input type="text" name="" id="" placeholder="홍길동">
                        </div>
                    </div>
                    <div class="form-wrap date-wrap">
                        <div class="date-list">
                            <p>생년월일</p>
                            <div class="select-form select-year">
                                <select name="" id="">
                                    <option value="1990년">1990 년</option>
                                </select>
                            </div>
                            <div class="select-form select-month">
                                <select name="" id="">
                                    <option value="01월">01 월</option>
                                </select>
                            </div>
                            <div class="select-form select-day">
                                <select name="" id="">
                                    <option value="22일">22 일</option>
                                </select>
                            </div>
                        </div>                        
                    </div>
                    <div class="form-wrap">
                        <label for="">전화번호</label>
                        <input type="tel" name="" id="" placeholder="010-4321-9876">
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
    name : "SettingPersonalInfo2"
}
</script>
