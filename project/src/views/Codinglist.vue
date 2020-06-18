<template>
    <div class="center">
        <h2>coding list</h2>
        <table class="table-style1">            
            <thead>
                <tr>
                    <th>구분</th>
                    <th>1depth</th>
                    <th>2depth</th>
                    <th>파일이름</th>
                    <th>screenId</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SignIn</td>
                    <td>SignIn</td>
                    <td></td>
                    <td>./admin/SignIn01.vue</td>
                    <td>SignIn01</td>
                    <td>로그인</td>
                </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
export default {
    name : "codingList"
}
</script>
<style lang="scss" scoped>
    #app {
        padding:120px;
        .center {
            width:1190px;
            margin:0 auto;
            h2 {
                padding:20px 0;
            }
        }
    }
        header, footer {
            display: none !important;
        }
</style>