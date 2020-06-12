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
                            <div>
                                <label for="">게시판 이름 입력</label>
                                <input type="text" name="" id="" placeholder="게시판 이름 입력">
                            </div>
                            <p>- 추가할 게시판 이름을 입력해주세요. Ex) 조황 정보, 버스 나들이 등</p>                           
                            <p>- 게시판은 최대 3개까지 추가 하실 수 있습니다.</p>
                        </div>

                        <div class="button-wrap middle">
                            <button type="button" class="primary large">환경 설정 등록</button>
                        </div>

                        <p class="title">메뉴 설정</p>
                        <table>
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
                                        <label for="">공지사항</label>
                                        <input type="text" name="" id="" placeholder="공지사항">
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-modify">수정</button>
                                            <button type="button" class="button-delete">삭제</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-up">up</button>
                                            <button type="button" class="button-down">down</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="">상품소개</label>
                                        <input type="text" name="" id="" placeholder="상품소개">
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-modify">수정</button>
                                            <button type="button" class="button-delete">삭제</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-up">up</button>
                                            <button type="button" class="button-down">down</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="">조항정보</label>
                                        <input type="text" name="" id="" placeholder="조항정보">
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-modify">수정</button>
                                            <button type="button" class="button-delete">삭제</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-up">up</button>
                                            <button type="button" class="button-down">down</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="">먹물정보</label>
                                        <input type="text" name="" id="" placeholder="먹물정보">
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
                                            <button type="button" class="button-modify">수정</button>
                                            <button type="button" class="button-delete">삭제</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="button-wrap table-form">
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
