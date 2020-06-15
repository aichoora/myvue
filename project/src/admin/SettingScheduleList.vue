<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
           <left-navigation></left-navigation>
         
            <!-- content start -->
            <div class="content">

                <h2>예약 리스트</h2>
                <p> 파트너님께서 등록한 예약 스케쥴 입니다.</p>
                
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
                    <div class="button-wrap table-form">
                        <button type="button" class="button-modify small">수정</button>
                        <button type="button" class="button-delete small">삭제</button>
                    </div>
                
                </div>
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
                    <div class="button-wrap table-form">
                        <button type="button" class="button-modify small">수정</button>
                        <button type="button" class="button-delete small">삭제</button>
                    </div>
                
                </div>

                
               <!-- 구글 광고 -->
               <bottomAdvertisement></bottomAdvertisement>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "SettingScheduleList"
}
</script>
