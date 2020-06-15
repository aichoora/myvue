<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
           <left-navigation></left-navigation>

            <!-- 수정 -->
            <!-- content start -->
            <div class="content">

                <h2>예약 설정</h2>
                <h3>예약 수정</h3>

                <!-- form field -->
                <form action="">
                    <fieldset>  

                        <div class="form-wrap tree-chk">
                            <p class="title">상품 선택</p>
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
                            
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="주말 새벽 광어 낚시!!!">
                                <label for="">예약 이름 </label>
                            </div>
                            <p class="info-text">- 예약 정보 수정 및 삭제시 사용되는 이름 입니다.</p>
                            
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="50,000">
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
                                        <option value="2020 년">2020 년</option>
                                    </select>
                                </div>
                                <div class="select-form select-month">
                                    <select name="" id="">
                                        <option value="5 월"> 5월</option>
                                    </select>
                                </div>
                                <div class="select-form select-day">
                                    <select name="" id="">
                                        <option value="21 일">21 일</option>
                                    </select>
                                </div>
                            </div>
                            <div class="date-list">
                                <p>종료일</p>
                                <div class="select-form select-year">
                                    <select name="" id="">
                                        <option value="2020 년">2020 년</option>
                                    </select>
                                </div>
                                <div class="select-form select-month">
                                    <select name="" id="">
                                        <option value="5 월">5 월</option>
                                    </select>
                                </div>
                                <div class="select-form select-day">
                                    <select name="" id="">
                                        <option value="31 일">31 일</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-wrap">
                            <p class="title">부가 상품 사용 (사이트에 표시 여부)</p>
                            <!-- radio 2개 -->
                            <div class="two-radio">
                                <div class="radio-form">
                                    <input type="radio" id="" name="" >
                                    <label for="">사용</label>
                                </div>
                                <div class="radio-form">
                                    <input type="radio" id="" name="" checked>
                                    <label for="">미사용</label>
                                </div>
                            </div>
                            <p class="info-text">- 부가 상품 사용 시 환경 설정 > 상품 설정 메뉴에서 등록한 부가 상품 리스트가 고객님의 예약 화면에 표시 됩니다.</p>
                        </div>

                        <p class="title">상세 정보 입력</p> 
                        <!-- 게시판 영역 -->
                        <div class="board-wrap">
                            <!--  : 모양땜에 임시조치 이 안쪽은은 삭제하고 작업부탁드려요 -->
                            <img src="../assets/images/topimg_board.png" alt="   ">
<pre style="padding:10px; text-align:left;border:1px solid #999">
공지 : 비와도 갑니다.

어종 : 광어/우럭/농어
 
출항시간 : 05:00

준비물 : 장화 / 썬크림 / 낚시장비 / 구명조끼 / 신분증증

서비스 : 미끼 5종종

집결지 : 전라북도 군산시 새만금북로 201 오드리피싱

기타 : 신분증 꼭 지참
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
                                    <input type="radio" id="" name="" checked>
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
                                    <label for="">선박 정원 (예약 인원)</label>
                                    <select name="" id="">
                                        <option value="20명">20명</option>
                                    </select>
                                </div>
                            </div>

                            <!-- 선박 설정 -->
                            <div class="setting-wrap">
                                <div class="top-container">
                                    <div class="left-wrap">
                                            <p>좌현 인원</p>
                                        <div class="select-form select-wrap">
                                            <label for="">좌현 인원</label>
                                            <select name="" id="">
                                                <option value="15명">15명</option>
                                            </select>
                                        </div>
                                        <div class="switch-wrap">
                                            <span>선수 순</span>
                                            <div class="switch-box">
                                                <input type="checkbox" name="" id="chk1" class="swich-input">
                                                <label for="chk1"></label>
                                            </div>
                                            <span>선미 순</span>
                                        </div>
                                    </div>
                                    <div class="right-wrap">
                                        <p>우현 인원</p>
                                        <div class="select-form select-wrap">                                            
                                            <label for="">우현 인원</label>
                                            <select name="" id="">
                                                <option value="5명">5명</option>
                                            </select>
                                        </div>
                                        <div class="switch-wrap">
                                            <span>선수 순</span>
                                            <div class="switch-box">
                                                <input type="checkbox" name="" id="chk12" class="swich-input">
                                                <label for="chk12"></label>
                                            </div>
                                            <span>선미 순</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle-container">
                                    <span class="top">선수</span>
                                    <span class="left">좌현</span>
                                    <span class="right">우현</span>
                                    <span class="bottom">선미</span>
                                    <ul class="left-ship">
                                        <li>
                                            <input type="checkbox" name="" id="btn1" class="button_occupy">
                                            <label for="btn1">1</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="btn2" class="button_occupy">
                                            <label for="btn2">2</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="btn3" class="button_occupy">
                                            <label for="btn3">3</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="btn4" class="button_occupy">
                                            <label for="btn4">4</label>
                                        </li>
                                        
                                        <li>
                                            <input type="checkbox" name="" id="btn5" class="button_occupied" disabled="disabled">
                                            <label for="btn5">5</label>
                                        </li>
                                    </ul>   
                                    <!-- <img src="./ship.png" alt=""> -->
                                    <ul class="right-ship">
                                        <li>
                                            <input type="checkbox" name="" id="btn21" class="button_empty">
                                            <label for="btn21">21</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="btn22" class="button_not" disabled="disabled">
                                            <label for="btn22">22</label>
                                        </li>
                                    </ul>   
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
                            <button type="button" class="button-primary large">예약 수정</button>
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
    name : "SettingSchedule"
}
</script>
