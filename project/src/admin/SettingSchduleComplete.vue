<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
           <left-navigation></left-navigation>

            <!-- content start -->
            <div class="content">

                <h2>예약 설정 완료</h2>
                <p>파트너님의 사이트에 예약이 수정 되었습니다.</p>
                 <div class="scheduleList-wrap table-wrap">
                    <table class="table-style2">
                        <caption>등록된 상품 리스트</caption>
                        <colgroup>
                            <col width="20%">
                            <col width="">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>주소</th>
                                <td>test.myjali.com/adssdd/020010</td>
                            </tr>
                            <tr>
                                <th>예약 이름</th>
                                <td>TEST</td>
                            </tr>                          
                        </tbody>
                    </table>                
                </div> 
                <p>예약을 추가로 등록 하시려면 예약 설정 > 예약 등록 메뉴를 이용해주세요.</p>
                <p>등록한 예약의 수정 / 삭제를 원하시면 예약 설정 > 예약 삭제 메뉴를 이용해주세요.</p>
                <div class="button-wrap">
                    <button type="button" class="button-primary large">내 사이트 확인하기</button>
                </div>

                <!-- 구글 광고 -->
                <bottomAdvertisement></bottomAdvertisement>        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "SettingSchduleComplete"
}
</script>
