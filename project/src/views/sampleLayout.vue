<template>
    <div class="wrapper">
        <ul class="goMenu">
            <li><a href="#settingColor">컬러 모음 ▶</a></li>
            <li><a href="#settingLayout">레이아웃 모음 ▶</a></li>
            <li><a href="#settingForm">폼 모음 ▶</a></li>
            <li><a href="#settingShip">선박설정 클래스명 ▶</a></li>
        </ul>
        <h1 style="margin:20px 0">DESIGN</h1>
        <div id="settingColor">
            1.color
            <ul>
                <li>버튼 기본 컬러 - #133db1 <div class="box" style="background-color:#133db1"></div></li>
                <li>라디오 박스 - #3cbef <div class="box" style="background-color: #3cbef"></div></li>
                <li>메뉴 박스 컬러 - #384d6e <div class="box" style="background-color:#384d6e"></div></li>
                <li>버튼 컬러2(ON) - #758298 <div class="box" style="background-color:#758298"></div></li>
                <li>버튼 컬러2(Off/disabled) - #758298 <div class="box" style="background-color:#384d6e; opacity:0.4"></div></li>
            </ul>
           <p style="margin-top:10px">2.font-style</p>
            <p style="font-size:20px; color:#000; font-weight:bold"> [h2] title - font-size:20px, color:#000 </p>
            <p style="font-size:20px; color:#333;"> 기본 #333</p>
            <p style="font-size:20px; color:#3c6bef;"> #3c6bef</p>
            <p style="font-size:20px; color:#e53935;"> #e53935</p>
        </div>

        <h1 style="margin:20px 0">LAYOUT</h1>
        <div id="settingLayout" class="layout_wrap">            
            <div class="layout">
               <span class="txt">Main-Layout - #app</span>
               <div class="header">               
                <span class="txt">header</span>
               </div>
               <div class="body">
                   <span class="txt"><b>#center-wrap</b></span>
                   <div class="layout-cont">
                    <span class="txt"><b>.sub-container</b></span>         
                    <div class="layout-cont">
                        <span class="txt"><b>.wrap</b></span>
                    </div>
                   </div>
               </div>
               <div class="footer">
                   <span class="txt">footer</span>
               </div>
            </div>
            
            <div class="layout">
               <span class="txt">partner-centerLayout - #app</span>
               <div class="header">               
                <span class="txt">header</span>
               </div>
               <div class="body">
                   <span class="txt"><b>#center-wrap</b></span>
                   <div class="layout-cont">
                    <span class="txt"><b>.sub-container</b></span>
                    <div class="layout-cont">
                        <span class="txt"><b>.left-menu</b></span>
                    </div>
                    <div class="layout-cont">
                        <span class="txt"><b>.content</b></span>
                    </div>
                   </div>
               </div>
               <div class="footer">
                   <span class="txt">footer</span>
               </div>
            </div>
            <div class="layout">
               <span class="txt">회원가입 - #app</span>
               <div class="header">               
                <span class="txt">header</span>
               </div>
               <div class="body">
                   <span class="txt"><b>#account-wrap</b></span>
                   <div class="layout-cont">
                    <span class="txt"><b>.account-container</b></span>
                    <div class="layout-cont">
                        <span class="txt"><b>.left-wrap</b></span>
                    </div>
                    <div class="layout-cont">
                        <span class="txt"><b>.content</b></span>
                    </div>
                   </div>
               </div>
               <div class="footer">
                   <span class="txt">footer</span>
               </div>
            </div>
        </div>

        <h1 style="margin:20px 0">FORM</h1>
        <div id="settingForm" class="form-area" style="width:800px">
            
            1. full-block form(라벨없음)
            <div class="form-wrap">
                <div class="form-large">
                    <input type="text" name="" id="" placeholder="주말 새벽 광어 낚시!!!">
                    <label for="">예약 이름 </label>
                </div>
            </div> 
            2. full-block form(라벨 제목 있음)
            <div class="form-wrap">
                <div class="form-large">
                    <label for="">예약 이름 </label>
                    <input type="text" name="" id="" placeholder="주말 새벽 광어 낚시!!!">
                </div>
            </div> 
            2-1. input 타입 
            1) password
            <div class="form-wrap">
                <label for="">비밀번호</label>
                <input type="password" name="" id="" placeholder="비밀번호를 입력해주세요.">
            </div>  
            2) tel
            <div class="form-wrap">
                <label for="">전화번호</label>
                <input type="tel" name="" id="" placeholder="숫자만 입력하세요.">
            </div> 
            3. 에러 메시지(input에 error 클래스 추가)
            <div class="form-wrap">
                 <!-- 유효성검사 실패시 error 클래스 추가 -->
                <div class="form-large">
                    <input type="text" class="error"  name="" id="" placeholder="예약 이름 오류">
                    <label for="">예약 이름 </label>
                    <div class="error-msg" id="error-msg">error massage</div>
                </div>
            </div>
            3-1. 다중 에러 메시지
            <div class="form-wrap">
                <p class="title">계좌정보 등록 (계좌번호)</p>
                <div class="account-form">
                    <div class="select-form error">
                        <select name="" id=""><option value="은행">은행</option></select>
                    </div>
                    <input type="text" class="error" name="" id="" placeholder="예금주 명">
                    <label for="">예금주 명</label>
                </div>
                <div class="error-msg" id="error-msg">error massage</div>
                <div class="form-large">
                    <input type="text" class="" name="" id="" placeholder="계좌번호(- 제외)">
                    <label for="">계좌번호(- 제외)</label>
                    <div class="error-msg" id="error-msg">error massage</div>
                </div>
            </div>
            
          
            4. 라디오 버튼
            <p>- radio-form / 2개</p>
            <div class="form-wrap">
                <p class="title">부가 상품 사용 (사이트에 표시 여부)</p>
                <!-- radio 2개 -->
                <div class="two-radio">
                    <div class="radio-form">
                        <input type="radio" id="" name="">
                        <label for="">사용</label>
                    </div>
                    <div class="radio-form">
                        <input type="radio" id="" name="">
                        <label for="">미사용</label>
                    </div>
                </div>
            </div>
             - radio-form / 3개
            <div class="form-wrap tree-chk">
                <p class="title">title</p>
                <!-- radio 3개 -->
                <div class="three-radio">
                    <div class="radio-form">
                        <input type="radio" id="name1" name="name1" checked>
                        <label for="">낚시 선박</label>
                    </div>
                    <div class="radio-form">
                        <input type="radio" id="" name="">
                        <label for="">출조 버스</label>
                    </div>
                    <div class="radio-form">
                        <input type="radio" id="" name="">
                        <label for="">숙박 객실</label>
                    </div>
                </div>
            </div>
            - radio-form / 4개
            <div class="form-wrap four-chk">
                <p class="title">출조 위치</p>
                <!-- radio 4개 -->
                <div class="four-radio">
                    <div class="radio-form">
                        <input type="radio" id="" name="">
                        <label for="">서해</label>
                    </div>
                    <div class="radio-form">
                        <input type="radio" id="" name="">
                        <label for="">동해</label>
                    </div>
                    <div class="radio-form">
                        <input type="radio" id="" name="">
                        <label for="">남해</label>
                    </div>
                    <div class="radio-form">
                        <input type="radio" id="" name="">
                        <label for="">제주도</label>
                    </div>
                </div>
            </div>

            5.셀렉트 박스 - date-list
            <div class="form-wrap date-wrap">
                <p class="title">예약 기간 설정</p>
                <div class="date-list">
                    <p>시작일</p>
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
        
            6.계좌정보
            <div class="form-wrap">
                <p class="title">계좌정보 등록 (계좌번호)</p>
                <div class="account-form">
                    <div class="select-form">
                        <select name="" id="">
                            <option value="은행">은행</option>
                        </select>
                    </div>
                    <input type="text" name="" id="" placeholder="예금주 명">
                    <label for="">예금주 명</label>
                </div>
                <div class="form-large">
                    <input type="text" name="" id="" placeholder="계좌번호(- 제외)">
                    <label for="">계좌번호(- 제외)</label>
                </div>
                <p class="info-text info-text-row">- 입금 받을 정확한 정보를 입력 하세요. (은행 / 예금주 / 계좌번호)</p>
                <p class="info-text">- 잘못된 정보 등록시 민.형사상 피해가 발생할 수 있으며, 책임지지 않습니다.</p>                            
            </div>

            7. 체크박스
              <div class="form-wrap">
                            <input type="checkbox" name="" id="terms1">
                            <label for="terms1">동의 합니다.</label>
                        </div>
        </div><!-- //form-area -->


        <h1 style="margin-top:20px 0">선박 설정</h1>
        <div id="settingShip" class="setting-wrap" style="width:50%;padding:50px;height:100%;">
            <div class="middle-container" style="background:none; border:1px solid #666">
                <p>div class 설정</p>
                <p>기본 myjali 클래스에 상태 클래스만 추가해주시면 됩니다.(다른화면에서 독립적으로 사용할땐 부모클래스 필요합니다...)</p>
<br>
<pre>
&lt;div id="jaliLeft1" class="myjali"&gt;1&lt;/div&gt;
&lt;div id="jaliLeft2" class="myjali checked"&gt;2&lt;/div&gt;
&lt;div id="jaliLeft3" class="myjali occupied"&gt;3&lt;/div&gt;
&lt;div id="jaliLeft4" class="myjali notChoose"&gt;4&lt;/div&gt;

일반 - myjali <div class="myjali">1</div>
선택 - myjali checked <div class="myjali checked">2</div>
예약완료 - myjali occupied <div class="myjali occupied">3</div>
선택불가 - myjali notChoose <div class="myjali notChoose">4</div>
</pre>
            </div>
        </div>


    </div><!-- //wrapper -->
</template>

<script>
export default {
    name : "SampleLayout"
}
</script>
<style lang="scss" scoped>
.wrapper {
    padding:100px;
}
.box {
    display:inline-block;
    margin-left:10px;
    width:20px;
    height:20px;
}

.layout_wrap {
    overflow:hidden;
}
.layout {
    float:left;
    position:relative;
    margin:10px 0;
    width:330px;
    height:400px;
    margin-right:10px;
    border:1px solid #999;
    padding:10px;
}
.layout .txt {
    display: block; 
    font-weight:bold;
    padding-left:10px;
 }
 .layout .body,  .layout .header,  .layout .footer {
    
    width: 100%;
    height: 10%;
    padding:3%;
    margin-bottom: 10px;
    border:1px solid #ddd;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
 }
 .layout .body {
     height:70%;
 }
 .layout-cont {
    width: 100%;
    padding:5%;
    margin-bottom: 10px;
    border:1px solid #ddd;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
 }
 .setting-wrap .middle-container .myjali {display:block;text-align:center}
.goMenu{font-weight:bold; color:#333;}
</style>