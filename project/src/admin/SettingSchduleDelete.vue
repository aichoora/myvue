<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
           <left-navigation></left-navigation>
         
            <!-- content start -->
            <div class="content">

                <h2>예약 리스트</h2>
                <h4>선택하신 예약 스케줄을 삭제 하시겠습니까?</h4>
                <p>이미 예약이 진행된 스케줄은 삭제하실 수 없습니다.</p>
                
                
                <div class="scheduleList-wrap">
                    <table class="table-style2">
                        <caption>등록된 상품 리스트</caption>
                        <colgroup>
                            <col width="20%">
                            <col width="">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>예약 종류</th>
                                <td>낚시 선박</td>
                            </tr>
                            <tr>
                                <th>예약 이름</th>
                                <td>TEST</td>
                            </tr>
                            <tr>
                                <th>선박 이름</th>
                                <td>오로라 5호</td>
                            </tr>
                            <tr>
                                <th>예약 기간</th>
                                <td>2020/05/01 ~ 2020/07/01</td>
                            </tr>
                        </tbody>
                    </table>                
                </div>
                <div class="button-wrap">
                    <button type="button" class="button-primary large">예약 스케줄 삭제</button>
                </div>
                
               <!-- 구글 광고 -->
               <bottomAdvertisement></bottomAdvertisement>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "SettingScheduleDelete"
}
</script>
