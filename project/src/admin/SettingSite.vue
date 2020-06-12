<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
           <left-navigation></left-navigation>

            <!-- content start -->
            <div class="content">

                <h2>환경 설정</h2>
                <h3>예약 사이트 설정</h3>

                <!-- form field -->
                <form action="">
                    <fieldset>  
                        <div class="form-wrap">
                            <p class="title">로고 이미지 등록</p>
                            <!-- radio 2개 -->
                            <div class="two-radio">
                                <div class="radio-form">
                                    <input type="radio" id="logo_image1" name="logo_image">
                                    <label for="logo_image1">이미지 사용</label>
                                </div>
                                <div class="radio-form">
                                    <input type="radio" id="logo_image2" name="logo_image">
                                    <label for="logo_image2">이미지 없음</label>
                                </div>
                            </div>
                             <!-- image 등록 -->
                            <div class="file-form">
                                <input type="text" class="file-name" placeholder="파일 찾기" readonly>
                                <label class="find-file" for="file01">파일 찾기</label>
                                <input type="file" name="bf_file[]" id="file01" accept="image/*">
                            </div>

                            <p class="info-text info-text-row">- 예약 사이트에 사용될 로고 이미지를 등록해주세요. (가로 000 / 세로 000)</p>
                            <p class="info-text">- 로고 이미지가 없으면 이미지 없음 선택 후 텍스트를 입력해주세요.</p>
                        </div>

                        <div class="form-wrap">
                            <p class="title">메인 이미지 등록(최대 5개)</p>
                            <!-- radio 2개 -->
                            <div class="two-radio">
                                <div class="radio-form">
                                    <input type="radio" id="" name="">
                                    <label for="">이미지 사용</label>
                                </div>
                                <div class="radio-form">
                                    <input type="radio" id="" name="">
                                    <label for="">이미지 없음</label>
                                </div>
                            </div>

                             <!-- image 등록 -->
                            <div class="file-form">
                                <input type="text" class="file-name" placeholder="파일 찾기" readonly>
                                <label class="find-file disabled" for="file01">파일 찾기</label>
                                <input type="file" name="bf_file[]" id="file_01" accept="image/*" disabled="disabled">
                            </div>

                            <p class="info-text info-text-row">- 예약 사이트에 사용될 로고 이미지를 등록해주세요. (가로 000 / 세로 000)</p>
                            <p class="info-text info-text-row">- gif, jpg, png 형태의 파일만 등록하실 수 있습니다.</p>
                            <p class="info-text">- 메인인 이미지가 없으면 이미지 없음 선택 후 텍스트를 입력해주세요.</p>
                        </div>
                        
                        <div class="form-wrap ">
                            <p class="title">연락처 등록</p>
                            <div class="phone-form">
                                <input type="text" name="" id="" placeholder="연락처명">
                                <label for="">연락처명</label>                           
                                <input type="text" name="" id="" placeholder="번호입력(- 제외)">
                                <label for="">번호입력</label>
                             </div>
                            <p class="info-text">- 예약 사이트에 문의사항 연락처 배너로 사용 됩니다.</p>
                        </div>

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

                        <div class="form-wrap">
                            <p class="title">주소 정보 등록 (오시는 길)</p>
                            <div class="zipCode-form">
                                <input type="text" name="" id="">
                                <label for="">우편번호 찾기</label>
                                <button type="button">우편번호 찾기</button>
                            </div>
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="상세주소1">
                                <label for="">상세주소1</label>
                            </div>
                            <div class="form-large" >
                                <input type="text" name="" id="" placeholder="상세주소2">
                                <label for="">상세주소2</label>
                            </div>
                            <p class="info-text">- 예약 사이트에 사용될 정확한 주소 정보를 입력해주세요.</p>                           
                        </div>

                        

                    </fieldset>
                </form>

                 <h3>예약 정보 설정</h3>
                  <!-- form field -->
                <form action="">
                    <fieldset>   
                        <div class="form-wrap tree-chk">
                            <p class="title">예약 상품 선택</p>
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
                        </div>

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
                            <p>- 출조 위치는 물때 정보 및 기상 정보 안내를 위해 사용 됩니다.</p>
                        </div>
                        <div class="form-wrap">
                            <p class="title">카카오톡 문의</p>
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
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="카카오톡 아이디">
                                <label for="">카카오톡 아이디</label>
                            </div>
                            <p class="info-text">- 카카오톡 ID 등록 시 예약 사이트에 카카오톡 문의 배너가 추가 됩니다.</p>
                        </div>

                        <div class="form-wrap">
                            <p class="title">BAND</p>
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
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="URL 입력(band.us/band/000000)">                            
                                <label for="">밴드 url</label>
                            </div>
                        </div>

                        <div class="form-wrap">
                            <p class="title">네이버 카페</p>
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
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="URL 입력(cafe.naver.com/000000)">
                                <label for="">네이버 카페 url</label>
                            </div>
                        </div>

                        <div class="form-wrap">
                            <p class="title">네이버 블로그</p>
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
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="URL 입력(blog.naver.com/000000)">
                                <label for="">네이버 블로그 url</label>
                            </div>
                        </div>

                        <div class="button-wrap">
                            <button type="button" class="button-primary large">환경 설정 등록</button>
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
    name : "SettingSite"
}
</script>
