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
                                    <select  name="totalCnt" id="totalCnt" @change="cntSetting('T');">
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>

                            <!-- 선박 설정 -->
                            <div class="setting-wrap">
                                <div class="top-container">
                                    <div class="left-wrap">
                                            <p>좌현 인원</p>
                                        <div class="select-form select-wrap">
                                            <label for="leftCnt">좌현 인원</label>
                                            <select name="leftCnt" id="leftCnt"  @change="cntSetting('L');"></select>
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
                                            <label for="rightCnt">우현 인원</label>
                                            <select name="rightCnt" style="width:100px;"  @change="cntSetting('R');" ></select>
                                        </div>         
                                        <div class="resultButton-wrap">
                                            <input type="button"  @change="jaliSetting();" value="미리보기" />
                                        </div>                               
                                    </div>                                    
                                </div>
                                <div class="middle-container">
                                    <span class="top">선수</span>
                                    <span class="left">좌현</span>
                                    <span class="right">우현</span>
                                    <span class="bottom">선미</span>
                                    <!-- <ul class="left-ship">
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
                                    <ul class="right-ship">
                                        <li>
                                            <input type="checkbox" name="" id="btn21" class="button_empty">
                                            <label for="btn21">21</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="" id="btn22" class="button_not" disabled="disabled">
                                            <label for="btn22">22</label>
                                        </li>
                                    </ul>    -->
                                    <div>
                                        <div id="img1" class="myjari"></div>
                                        <div id="img2" class="myjari"></div>
                                        <div id="img3" class="myjari"></div>
                                        <div id="img4" class="myjari"></div>
                                        <div id="img5" class="myjari"></div>
                                        <div id="img6" class="myjari"></div>
                                        <div id="img7" class="myjari"></div>
                                        <div id="img8" class="myjari"></div>
                                        <div id="img9" class="myjari"></div>
                                        <div id="img10" class="myjari"></div>
                                        <div id="img11" class="myjari"></div>
                                        <div id="img12" class="myjari"></div>
                                        <div id="img13" class="myjari"></div>
                                        <div id="img14" class="myjari"></div>
                                        <div id="img15" class="myjari"></div>
                                        <div id="img16" class="myjari"></div>
                                        <div id="img17" class="myjari"></div>
                                        <div id="img18" class="myjari"></div>
                                        <div id="img19" class="myjari"></div>
                                        <div id="img20" class="myjari"></div>
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
    name : "SettingSchedule"
}


// new Vue({
//   el: "#centerWrap",
//   methods: {
//     cntSetting: function(pos) {
// 			var tmpTotalCnt = document.querySelector("select[name=totalCnt]").value;
// 			for(var i = 0; i < 20; i++) {
// 				document.querySelector("#img" + (i+1)).style.display = "none";
// 			}

// 			if(pos == "T") {
// 				var tmpLeftCount = Math.round(tmpTotalCnt / 2);
//                 var tmpRightCount = tmpTotalCnt - tmpLeftCount;
//                 var tmpRightCountVal = tmpRightCount.value;

// 				document.querySelector("select[name=leftCnt]").innerHTML = null;
// 				for(var i = 0; i <= tmpTotalCnt; i++) {
// 					var option = document.querySelector("<option value=\"" + i + "\">" + i + "</option>");
// 					document.querySelector("select[name=leftCnt]").append(option);
// 	            }
// 	            document.querySelector("select[name=leftCnt]").tmpLeftCount.value;

// 				document.querySelector("select[name=rightCnt]").innerHTML = null;
// 				for(var i = 0; i <= tmpTotalCnt; i++) {
// 					var option = document.querySelector("<option value=\"" + i + "\">" + i + "</option>");
// 					document.querySelector("select[name=rightCnt]").append(option);
// 	            }
// 	            document.querySelector("select[name=rightCnt]").tmpRightCountVal;
// 			} else if(pos == "L") {
// 				var tmpleftCnt = document.querySelector("select[name=leftCnt]").value;
// 				var tmpRightCnt = tmpTotalCnt - tmpleftCnt;
// 	            document.querySelector("select[name=rightCnt]").val(tmpRightCnt);
// 			} else if(pos == "R") {
// 				var tmpRightCnt = document.querySelector("select[name=rightCnt]").value;
// 				var tmpleftCnt = tmpTotalCnt - tmpRightCnt;
// 	            document.querySelector("select[name=leftCnt]").tmpleftCnt.value;
//             }
//         },
//     jaliSetting: function() {
//         var leftX   = 100; // ���� X ��ǥ
// 			var rightX  = 435; // ���� X ��ǥ
// 			var topY    = 180; // ���� Y ��ǥ (�ֻ��)
// 			var bottomY = 711; // ���� Y ��ǥ (���ϴ�)

// 			var distanceY = bottomY - topY;
// 			var oneStepY = 0;
// 			var tmpArr;
// 			var completeArr;

// 			var inputTotalCnt = parseInt(document.querySelector("select[name=totalCnt]").value);
// 			var inputLeftCnt = parseInt(document.querySelector("select[name=leftCnt]").value);
// 			var inputRightCnt = parseInt(document.querySelector("select[name=rightCnt]").value);
// 			var inputPrimaryOrder = document.querySelector(':radio[name="primaryOrder"]:checked').value;
// 			// console.log("inputTotalCnt[" + inputTotalCnt + "] inputLeftCnt[" + inputLeftCnt + "] inputRightCnt[" + inputRightCnt + "] inputPrimaryOrder[" + inputPrimaryOrder + "]");

// 			if(inputLeftCnt > 0 || inputRightCnt > 0) {
// 				// tmpArr�� Y ��ǥ ����
// 				if(inputLeftCnt >= inputRightCnt) {
// 					oneStepY = distanceY / (inputLeftCnt - 1);
// 					tmpArr = new Array(inputLeftCnt);
// 					for(var i = 0; i < inputLeftCnt; i++) {
// 						tmpArr[i] = parseInt(topY + (i * oneStepY));
// 					}
// 				} else {
// 					oneStepY = distanceY / (inputRightCnt - 1);
// 					tmpArr = new Array(inputRightCnt);
// 					for(var i = 0; i < inputRightCnt; i++) {
// 						tmpArr[i] = parseInt(topY + (i * oneStepY));
// 					}
// 				}

// 				// completeArr ����
// 				completeArr = new Array(inputTotalCnt);
// 				if(inputLeftCnt >= inputRightCnt) {
// 					console.clear();
// 					console.log("===== ������������ Y ��ǥ ���� �� �ڸ� ä��� ���ð��� ���� ���� ��ġ =====");

// 					for(var i = 0; i < inputLeftCnt; i++) {
// 						completeArr[i] = leftX + "," + tmpArr[i];
// 					}
// 					for(var i = 0; i < inputRightCnt; i++) {
// 						if(inputPrimaryOrder == 1) {
// 							completeArr[inputLeftCnt+i] = rightX + "," + tmpArr[i];
// 						} else {
// 							completeArr[inputLeftCnt+i] = rightX + "," + tmpArr[inputLeftCnt-inputRightCnt+i];
// 						}
// 					}
// 				} else {
// 					console.clear();
// 					console.log("===== ������������ Y ��ǥ ���� �� �ڸ� ä��� ���ð��� ���� ���� ��ġ =====");

// 					for(var i = 0; i < inputLeftCnt; i++) {
// 						if(inputPrimaryOrder == 1) {
// 							completeArr[i] = leftX + "," + tmpArr[i];
// 						} else {
// 							completeArr[i] = leftX + "," + tmpArr[inputRightCnt-inputLeftCnt+i];
// 						}
// 					}
// 					for(var i = 0; i < inputRightCnt; i++) {
// 						completeArr[inputLeftCnt+i] = rightX + "," + tmpArr[i];
// 					}
// 				}

// 				// Test log
// 				console.log("* �ڸ� ��ȣ�� ���� �������� ����, �̾ ���� �������� ������ ������ �Ű����ϴ�.");
// 				for(var i = 0; i < inputTotalCnt; i++) {
// 					console.log((i+1) + "�� �ڸ� Image ��ǥ [" + completeArr[i] + "]");
// 				}

// 				// Display
// 				for(var i = 0; i < inputTotalCnt; i++) {
// 					var xyPosition = completeArr[i].split(",");
// 					document.querySelector("#img" + (i+1)).css("left", parseInt(xyPosition[0]));
// 					document.querySelector("#img" + (i+1)).css("top", parseInt(xyPosition[1]));
// 					document.querySelector("#img" + (i+1)).show();
// 				}
// 			}
// 			alert("Partner�� �̷��� ����� �ͱ��� �մϴ�.\n���߿� �ڸ� �����Ϸ� ���� User���� �� ��� �״�� �������ϴ�.");

//     }
//   }
// })

</script>
