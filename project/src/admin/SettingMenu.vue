<template>
    <div id="center-wrap">
        <div class="sub-container">
            <!-- left menu -->
           <left-navigation></left-navigation>

            <!-- content start -->
            <div class="content">

                <h2>메뉴 설정</h2>
                <h3>메뉴 설정</h3>

                <!-- form field -->
                <form action="">
                    <fieldset>  
                        <div class="form-wrap tree-chk">
                            <p class="title">게시판 추가</p>
                            <div class="form-large">
                                <input type="text" name="" id="" placeholder="게시판 이름 입력">
                                <label for="">게시판 이름 입력</label>
                            </div>
                            <p class="info-text info-text-row">- 추가할 게시판 이름을 입력해주세요. Ex) 조황 정보, 버스 나들이 등</p>                           
                            <p class="info-text">- 게시판은 최대 3개까지 추가 하실 수 있습니다.</p>
                        </div>

                        <div class="button-wrap middle">
                            <button type="button" class="default">게시판 추가</button>
                        </div>

                        <p class="title">메뉴 설정</p>
                        <table class="table-style1 table-hasForm">
                            <caption>메뉴 설정</caption>
                            <thead>
                                <tr>
                                    <th>메뉴</th>
                                    <th>기타</th>
                                    <th>순서</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text" name="" id="" placeholder="공지사항">
                                        <label for="">공지사항</label>
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-modify">수정</button>
                                            <button type="button" class="button-delete">삭제</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="button-wrap updown-form">
                                            <button type="button" class="button-up">up</button>
                                            <button type="button" class="button-down">down</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" name="" id="" placeholder="상품소개">
                                        <label for="">상품소개</label>
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-modify">수정</button>
                                            <button type="button" class="button-delete">삭제</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="button-wrap updown-form">
                                            <button type="button" class="button-up">up</button>
                                            <button type="button" class="button-down">down</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" name="" id="" placeholder="조항정보">
                                        <label for="">조항정보</label>
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-modify">수정</button>
                                            <button type="button" class="button-delete">삭제</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="button-wrap updown-form">
                                            <button type="button" class="button-up">up</button>
                                            <button type="button" class="button-down">down</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" name="" id="" placeholder="먹물정보">
                                        <label for="">먹물정보</label>
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-modify">수정</button>
                                            <button type="button" class="button-delete">삭제</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="button-wrap updown-form">
                                            <button type="button" class="button-up">up</button>
                                            <button type="button" class="button-down">down</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                       
                        <div class="button-wrap">
                            <button type="button" class="primary large">확인</button>
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
    name : "SettingMenu"
}
</script>
