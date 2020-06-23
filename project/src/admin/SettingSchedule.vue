<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
           <left-navigation></left-navigation>

            <!-- content start -->
            <div class="content">

                <h2>예약 설정</h2>
                <h3>예약 스케쥴 등록</h3>

                <!-- form field -->
                <form action="">
                    <fieldset>  

                        <div class="form-wrap tree-chk">
                            <p class="title">상품 선택</p>
                            <!-- radio 3개 -->
                            <div class="three-radio">
                                <div class="radio-form">
                                    <input type="radio" id="name1" name="name1">
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
                            <!-- 유효성검사 실패시 error 클래스 추가 -->
                            <div class="form-large">
                                <input type="text" class="error"  name="" id="" placeholder="예약 이름">
                                <label for="">예약 이름 </label>
                                <div class="error-msg" id="error-msg">error massage</div>
                            </div>
                            <p class="info-text">- 예약 정보 수정 및 삭제시 사용되는 이름 입니다.</p>
                            
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="예약 비용 (숫자만 입력)">
                                <label for="">예약 비용 (숫자만 입력)</label>
                            </div>
                            <p class="info-text">- 예약 비용 안내를 위해 사용 됩니다. 1인 예약금을 숫자만 입력해 주세요.</p>
                        </div>
                        
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
                            
                            <!-- 유효성검사 실패시 error 클래스 추가 -->
                            <div class="date-list">
                                <p>종료일</p>
                                <div class="select-form select-year error">
                                    <select name="" id="">
                                        <option value="년">년</option>
                                    </select>
                                </div>
                                <div class="select-form select-month error">
                                    <select name="" id="">
                                        <option value="월">월</option>
                                    </select>
                                </div>
                                <div class="select-form select-day error">
                                    <select name="" id="">
                                        <option value="일">일</option>
                                    </select>
                                </div>
                            </div>
                        </div>

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
                            <p class="info-text style2">- 부가 상품 사용 시 환경 설정 > 상품 설정 메뉴에서 등록한 부가 상품 리스트가 고객님의 예약 화면에 표시 됩니다.</p>
                        </div>

                        <p class="title">상세 정보 입력</p> 
                        <!-- 게시판 영역 -->
                        <div class="board-wrap">
                            <!--  : 모양땜에 임시조치 이 안쪽은은 삭제하고 작업부탁드려요 -->
                            <img src="../assets/images/topimg_board.png" alt="   ">
<pre style="padding:10px; text-align:left;border:1px solid #999">
공지 :

어종 :

출항시간 :

준비물 :

서비스 :

집결지 :

기타 :
</pre>
                        </div>   

                        <p class="title">입금 시 확인 사항 (필수)</p> 
                        <p class="info-text info-text-row">- 예약 비용 입금 후 취소 및 환불 등 중요 내용을 입력해 주세요.</p>
                        <p class="info-text">- 잘못된 정보 등록 시 민.형사상 피해가 발생할 수 있으며, 책임지지 않습니다.</p>
                        <!-- 게시판 영역 -->
                        <div class="board-wrap">

                        </div>


                        <div class="form-wrap tree-chk">
                            <p class="title">자리 선택 선택</p>
                            <!-- radio 3개 -->
                            <div class="three-radio">
                                <div class="radio-form">
                                    <input type="radio" id="" name="">
                                    <label for="">선착순 배정</label>
                                </div>
                                <div class="radio-form">
                                    <input type="radio" id="" name="">
                                    <label for="">추첨식 배정</label>
                                </div>
                                <div class="radio-form">
                                    <input type="radio" id="" name="">
                                    <label for="">예약자 지정</label>
                                </div>
                            </div>
                        </div>

                        <!-- 선박 예약 -->
                        <div class="schedule-wrap">    
                            <div class="setting-shipName">                        
                                <p>선박 이름</p>
                                <div class="select-form select-wrap">
                                    <label for="">선박 이름</label>
                                    <select name="" id="">
                                        <option value="태양 5호">태양 5호</option>
                                    </select>
                                </div>
                            </div> 
                            <div class="setting-shipNum"> 
                                <p>선박 정원 (예약 인원)</p>
                                <div class="select-form select-wrap">
                                    <label for="totalCnt">선박 정원 (예약 인원)</label>
                                    <select id="totalCnt" name="totalCnt" v-model="totalCnt">
                                        <option value="">선박 정원 선택</option>
                                        <option v-for="totalCnt in totalCnts" :selected="totalCnt === '선박 정원 선택'" :key="totalCnt">{{ totalCnt }}</option>
                                    </select>
                                </div>
                            </div>

                            <!-- 선박 설정 -->
                            <div class="setting-wrap">
                                <div class="top-container">
                                    <div class="left-wrap">
                                        <p>좌현 인원</p>
                                        <div class="select-form select-wrap">
                                            <label for="SelectLeftCnt">좌현 인원</label>
                                            <select name="SelectLeftCnt" id="SelectLeftCnt" v-model="SelectLeftCnt" >
                                                <option value="">좌현 인원</option>
                                                <option v-for="SelectLeftCnt in SelectLeftCnts" :selected="SelectLeftCnt === '좌현인원'" :key="SelectLeftCnt" :value="SelectLeftCnt">{{ SelectLeftCnt }}</option>
                                            </select>
                                        </div>             
                                         <div class="switch-wrap">
                                            <span>선수 순</span>
                                            <div class="switch-box">
                                                <input type="checkbox" class="swich-input" id="switchCheck" 
                                                v-model="switchCheck"
                                                @change="switchChk('cheked', $event)"> 
                                                <label for="switchCheck"></label>
                                            </div>
                                            <span>선미 순</span>
                                        </div>                           
                                    </div>
                                    <div class="right-wrap">
                                        <p>우현 인원</p>
                                        <div class="select-form select-wrap">
                                            <label for="SelectRightCnt">우현 인원</label>
                                            <select name="SelectRightCnt" id="SelectRightCnt" v-model="SelectRightCnt" @change="onChange()">
                                                    <option value="">우현 인원</option>
                                                    <option v-for="SelectRightCnt in SelectRightCnts" :selected="SelectRightCnt === '우현인원'" :key="SelectRightCnt" :value="SelectRightCnt">{{ SelectRightCnt }}</option>
                                            </select>    
                                        </div>     
                                        <div class="resultButton-wrap">
                                            <button v-on:click.prevent="jaliSetting">미리보기</button>
                                        </div>                               
                                    </div>                                    
                                </div>
                                <div class="middle-container">
                                    <span class="top">선수</span>
                                    <span class="left">좌현</span>
                                    <span class="right">우현</span>
                                    <span class="bottom">선미</span>
                                    <div class="leftJali">
                                        <div id="jaliLeft1" class="myjali">1 </div>
                                        <div id="jaliLeft2" class="myjali"> 2</div>
                                        <div id="jaliLeft3" class="myjali"> 3</div>
                                        <div id="jaliLeft4" class="myjali"> 4</div>
                                        <div id="jaliLeft5" class="myjali"> 5</div>
                                        <div id="jaliLeft6" class="myjali"> 6</div>
                                        <div id="jaliLeft7" class="myjali"> 7</div>
                                        <div id="jaliLeft8" class="myjali"> 8</div>
                                        <div id="jaliLeft9" class="myjali"> 9</div>
                                        <div id="jaliLeft10" class="myjali">10 </div>
                                        <div id="jaliLeft11" class="myjali">11 </div>
                                        <div id="jaliLeft12" class="myjali">12 </div>
                                        <div id="jaliLeft13" class="myjali">13 </div>
                                        <div id="jaliLeft14" class="myjali">14 </div>
                                        <div id="jaliLeft15" class="myjali">15 </div>
                                        <div id="jaliLeft16" class="myjali">16 </div>
                                        <div id="jaliLeft17" class="myjali">17 </div>
                                        <div id="jaliLeft18" class="myjali"> 18</div>
                                        <div id="jaliLeft19" class="myjali"> 19</div>
                                        <div id="jaliLeft20" class="myjali"> 20</div>
                                    </div>
                                    <div class="rightJali">
                                        <div id="jaliRight1" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight2" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight3" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight4" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight5" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight6" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight7" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight8" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight9" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight10" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight11" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight12" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight13" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight14" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight15" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight16" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight17" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight18" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight19" class="myjali">{{ numValue }}</div>
                                        <div id="jaliRight20" class="myjali">{{ numValue }}</div>
                                    </div>
                                </div>
                                <div class="bottom-container">
                                    <ul class="list-box">
                                        <li><span></span>선택</li>
                                        <li><span></span>일반</li>
                                        <li><span></span>예약완료</li>
                                        <li><span></span>선택불가</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                      
                        
                        <div class="button-wrap">
                            <button type="button" class="button-primary large">예약 등록</button>
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
    name : "SettingSchedule",
    data: function() {
        return {
            totalCnt: '',
            totalCnts: Array.from({ length: 21 }, (v, i) => i).slice(1), //선박 정원
            SelectLeftCnt : '',
            SelectLeftCnts:[], 
            SelectRightCnt : '',
            SelectRightCnts : [],
            numValue : '',
            switchCheck: []
        }
    },
    watch: {
        totalCnt : function() { //총 정원 선택 후 좌현인원 값 넘기기기
            this.SelectLeftCnt = '';
            this.SelectLeftCnts = [];
            
            if (this.totalCnt > 0) {
                var cnt = parseInt(this.totalCnt) + 1;
                this.SelectLeftCnts = Array.from({length:cnt}, (v, i) => i).slice(1);
            }         
        },
        SelectLeftCnt : function() { //좌현 인원 선택 후 우현정원 구하기
            this.SelectRightCnt = '';
            this.SelectRightCnts = [];
            
            var totalCntNum = this.totalCnt; //총 정원
            var cnt = parseInt(this.SelectLeftCnt); //좌현 인원 
            var result = parseInt(totalCntNum - cnt) + 1 ; //총 정원 -좌현
            
            if ( cnt > 0 ){
                this.SelectRightCnts = Array.from({length:result}, (v, i) => i).slice(1);//우현인원 총 인원값                
                //좌현값 선택시 우현 최대값 고정                
                this.SelectRightCnt = result-1;                      
               
            } else if (cnt == totalCntNum){ //좌현 = 총인원 => 우현 = 0
                this.SelectRightCnts = [0];
            }             
        }     
    },
    methods: {
        onChange() {//우현선택시 좌현 자동값지정
            var totalCntNum2 = this.totalCnt; //총 정원
            var cnt2 = parseInt(this.SelectRightCnt); //우현 인원 
            var result2 = parseInt(totalCntNum2 - cnt2) + 1 ; //총 정원 - 우현
            if ( cnt2 > 0 ){
                this.SelectLeftCnts = Array.from({length:result2}, (v, i) => i).slice(1);//좌현인원 총 인원값                
                this.SelectLeftCnt = result2-1;     
            }
        },
        switchChk(value, $event) { //선수순, 선미순 체크
            var checked = $event.target.checked;
            //console.log(checked);

            var leftJali = document.querySelector(".leftJali");
            var rightJali = document.querySelector(".rightJali");
            leftJali.classList.remove("reverse");
            rightJali.classList.remove("reverse");
            
            if( checked == true ) {              
                leftJali.classList.add("reverse");
                rightJali.classList.add("reverse");
            }
        }, 
        jaliSetting () {
            
            var totalCnt = this.totalCnt; //총 정원
            var SelectLeftCnt = this.SelectLeftCnt; //좌현 정원 jaliLeft
            var SelectRightCnt = this.SelectRightCnt; //우현 정원 jaliRight

            for(var m = 0; m < 20; m++) { // 자리 clear
                    var initLeft = document.querySelector("#jaliLeft" + (m+1));      
                    var initRight = document.querySelector("#jaliRight" + (m+1));                    
                    initLeft.style.display = "none";              
                    initRight.style.display = "none";
                    //console.log(m);
                } 
            if( totalCnt == 0) {
                alert("선박 정원을 모두 선택해주세요!");   
            }else {
                  
                if( SelectLeftCnt > 0 ) {
                    //좌현 인원 그리기
                    for(var i = 0; i < SelectLeftCnt; i++) { 
                        var leftNum = document.querySelector("#jaliLeft" + (i+1));                    
                        leftNum.style.display = "block";

                    }    
                    //우현 인원 그리기
                    if( SelectRightCnt
                     > 0 ) {
                        for(var j= 0; j < SelectRightCnt; j++) { 
                            var rightNum = document.querySelector("#jaliRight" + (j+1));    
                            rightNum.style.display = "block";                                  
                        }
                        
                        //span 숫자 채우기 // SelectRightCnt쪽만 넣으면 됨      
                        var numValue2 = parseInt(totalCnt - SelectLeftCnt);// 우
                        var SelectLeftCnt2 = parseInt(SelectLeftCnt)//좌 
                    
                        for(var p=SelectLeftCnt2; p < totalCnt; p++ ) {  
                              
                            this.numValue = p+1;
                            console.log('1.'+ numValue2, SelectLeftCnt2); // 우, 좌 
                            console.log('2.'+ SelectLeftCnt2, totalCnt ); //총인원
                            console.log(p+1);
                        }    
                    }      
                }
            }            
       }
    }
}

</script>

