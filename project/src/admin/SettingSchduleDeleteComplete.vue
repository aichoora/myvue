<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
           <left-navigation></left-navigation>

            <!-- content start -->
            <div class="content">

                <h2>예약 설정 완료</h2>
                <h4>예약 삭제</h4>
                <p>선택하신 예약 스케줄이 삭제 되었습니다.</p>

<p>예약을 추가로 등록 하시려면 예약 설정 > 예약 등록 메뉴를 이용해주세요.</p>

<p>등록한 예약의 수정 / 삭제를 원하시면 예약 설정 > 예약 리스트 메뉴를 이용해주세요.</p>
               
               
                <div class="button-wrap">
                    <button type="button" class="button-primary large">사이트 확인</button>
                </div>

                <!-- 구글 광고 -->
                <bottomAdvertisement></bottomAdvertisement>        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "SettingSchduleDeleteComplete"
}
</script>
