<template>
    <div id="center-wrap">
        <div class="account-container">
           <div class="left-wrap">
               <img src="../" alt="side-bg">
           </div>
            <!-- content start -->
            <div class="content">

                <h2>로그인인</h2>
                <h3>상품 설정</h3>

                <!-- form field -->
                <form action="">
                    <fieldset>  
                        <div class="form-wrap tree-chk">
                            <p class="title">상품 선택</p>
                            <!-- radio 3개 -->
                            <div class="three-radio">
                                <div class="radio-form">
                                    <input type="radio" id="" name="">
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
                            <div  class="form-middle form-button">
                                <input type="text" id="" name="" placeholder="선박 이름" max-lengh="10">
                                <label for="">선박 이름</label>
                                <div class="button-wrap">
                                    <button type="button" class="middle">추가</button>
                                </div>                                
                            </div>
                            <p>- 등록된 선박명으로 예약 등록 및 상품 소개를 할 수 있습니다. </p>
                            <p>- 선박 이름은 10자리까지 입력하실 있습니다.</p>
                        </div>
                        
                        <p class="title">등록된 상품 리스트</p>

                        <div class="table-wrap">
                            <table class="table-style1">
                                <caption>등록된 상품 리스트</caption>
                                <colgroup>
                                    <col width="15%">
                                    <col width="">
                                    <col width="15%">
                                    <col width="">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>상품</th>
                                        <th>이름</th>
                                        <th>등록일</th>
                                        <th>기타</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>선박</td>
                                        <td>슈퍼마리호</td>
                                        <td>2020/05/22</td>
                                        <td>
                                            <div class="button-wrap table-form">
                                                <button type="button" class="button-modify">수정</button>
                                                <button type="button" class="button-delete">삭제</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>버스</td>
                                        <td>블루오션 버스 1호</td>
                                        <td>2020/05/22</td>
                                        <td>
                                            <div class="button-wrap table-form">
                                                <button type="button" class="button-modify">수정</button>
                                                <button type="button" class="button-delete">삭제</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>객실</td>
                                        <td>프라하 리조트</td>
                                        <td>2020/05/22</td>
                                        <td>
                                            <div class="button-wrap table-form">
                                                <button type="button" class="button-modify">수정</button>
                                                <button type="button" class="button-delete">삭제</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="title">상품 정보 입력</p>
                        <p class="info-text info-text-row">- 파트너님의 사이트에 상품 소개 메뉴에 등록되는 내용입니다.</p>
                        <p class="info-text">- 하단의 소개 페이지 사용 여부에 따라 파트너님의 사이트에 표시 여부가 결정 됩니다.</p>
                        
                        <div class="tab-wrap">
                            <ul class="tab-menu">
                                <li class="active">선박정보</li>
                                <li>버스정보</li>
                                <li>객실정보</li>
                            </ul>
                            
                            <div class="contents">                                     
                                    <!-- 게시판 영역 -->
                                    <div class="board-wrap">
                                        <!--  : 모양땜에 임시조치 이 안쪽은은 삭제하고 작업부탁드려요 -->
                                        <img src="../assets/images/topimg_board.png" alt="   ">
                                    </div>
                            </div>  
                        </div>

                        <div class="form-wrap info-page-check">
                            <div class="full-block">
                                <span >선박 소개 페이지</span>
                                <span>
                                    <input type="radio" id="" name="">
                                    <label for="">사용</label>
                                </span>
                                <span>
                                    <input type="radio" id="" name="">
                                    <label for="">미사용</label>
                                </span>
                            </div>
                            <div class="full-block">
                                <span>버스 소개 페이지</span>
                                <span>
                                    <input type="radio" id="" name="">
                                    <label for="">사용</label>
                                </span>
                                <span>
                                    <input type="radio" id="" name="">
                                    <label for="">미사용</label>
                                </span>
                            </div>
                            <div class="full-block">
                                <span>객실 소개 페이지</span>
                                <span>
                                    <input type="radio" id="" name="">
                                    <label for="">사용</label>
                                </span>
                                <span>
                                    <input type="radio" id="" name="">
                                    <label for="">미사용</label>
                                </span>
                            </div>
                        </div>
                        <div class="form-wrap">
                            <p class="title">부가 상품 설정</p>
                            <div class="form-large">
                                <input type="text" class="large" name="" id="" placeholder="상품 이름">
                                <label for="">상품 이름</label>
                            </div>
                            <div class="form-middle form-button">
                                <input type="text" id="" name="" placeholder="선박 이름" max-lengh="10">
                                <label for="">선박 이름</label>
                                <div class="button-wrap">
                                    <button type="button" class="middle">추가</button>
                                </div>                                
                            </div>                  
                            <p class="info-text info-text-row">- 등록된 상품명으로 예약 페이지에서 상품을 추가로 예약 받으실 수 있습니다다.</p>
                            <p class="info-text">- 상품 이름은 10자리까지 입력하실 수 있습니다.</p>
                                
                        </div>
                       
                        <p class="title">등록된 부가 상품 리스트</p>
                        <div class="table-wrap">
                            <table class="table-style1">
                                <caption>등록된 부가 상품 리스트</caption>
                                <colgroup>
                                    <col width="17%">
                                    <col width="38%">
                                    <col width="15%">
                                    <col width="30%">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">상품이름</th>
                                        <th scope="col">상품가격</th>
                                        <th scope="col">등록일</th>
                                        <th scope="col">기타</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>로드 - A</td>
                                        <td>12,000원</td>
                                        <td>2020/05/22</td>
                                        <td>
                                            <div class="button-wrap table-form">
                                                <button type="button" class="button-modify">수정</button>
                                                <button type="button" class="button-delete">삭제</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>릴 - A</td>
                                        <td>15,000원</td>
                                        <td>2020/05/22</td>
                                        <td>
                                            <div class="button-wrap table-form">
                                                <button type="button" class="button-modify">수정</button>
                                                <button type="button" class="button-delete">삭제</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>릴과 로드 SET</td>
                                        <td>28,000원</td>
                                        <td>2020/05/22</td>
                                        <td>
                                            <div class="button-wrap table-form">
                                                <button type="button" class="button-modify">수정</button>
                                                <button type="button" class="button-delete">삭제</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                         <div class="button-wrap last-button-wrap">
                            <button type="button" class="primary large">환경 설정 등록</button>
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
    name : "SettingProduct"
}
</script>
