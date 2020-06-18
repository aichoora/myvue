<template>
    <div id="account-wrap">
        <div class="account-container">
           <div class="left-wrap findId-wrap"></div>
            <!-- content start -->
            <div class="content">

                <h2>아이디 찾기</h2>
                <p>파트너 가입시 등록하신 이름과 생년월일을 입력해주세요.</p>
                <!-- form field -->
                <form action="">
                    <fieldset>  
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

                        <!-- 구글 캡챠 : 캡챠 넣으셨는데 이미지 크기가 이상하면 말씀 주세여~~ -->
                        <div class="captcha-wrap">
                            <img src="../assets/images/robo.png" alt="" style="width:340px">
                        </div>

                        <div class="button-wrap last-button-wrap">
                            <button type="button" class="primary large">아이디 찾기</button>
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
    name : "FindID"
}
</script>
