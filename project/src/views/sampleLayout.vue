<template>
    <div class="wrapper">
        <h1 style="margin-bottom:20px">DESIGN</h1>
        <div>
            1.color
            <ul>
                <li>버튼 기본 컬러 - #133db1 <div class="box" style="background-color:#133db1"></div></li>
                <li>라디오 박스 - #3cbef <div class="box" style="background-color: #3cbef"></div></li>
                <li>메뉴 박스 컬러 - #384d6e <div class="box" style="background-color:#384d6e"></div></li>
                <li>버튼 컬러2(ON) - #758298 <div class="box" style="background-color:#758298"></div></li>
                <li>버튼 컬러2(Off/disabled) - #758298 <div class="box" style="background-color:#384d6e; opacity:0.4"></div></li>
            </ul>
           <p style="margin-top:10px">2.font-style</p>
            <p style="font-size:20px; color:#000; font-weight:bold"> [h2] title - font-size:20px, color:#000 </p>
        </div>
        <h1 style="margin:20px 0">LAYOUT</h1>
        
        1. main-layout 
        <div class="layout">
           <span class="txt">#app</span>
           <div class="header">               
            <span class="txt">header</span>
           </div>
           <div class="body">
               <span class="txt"><b>#center-wrap</b></span>
               <div class="layout-wrap">
                <span class="txt"><b>.sub-container</b></span>         
                <div class="layout-cont">
                    <span class="txt"><b>.wrap</b></span>
                </div>
               </div>
           </div>
           <div class="footer">
               <span class="txt">footer</span>
           </div>
        </div>
        
        2. partner-center 
        <div class="layout">
           <span class="txt">#app</span>
           <div class="header">               
            <span class="txt">header</span>
           </div>
           <div class="body">
               <span class="txt"><b>#center-wrap</b></span>
               <div class="layout-wrap">
                <span class="txt"><b>.sub-container</b></span>
                <div class="layout-cont">
                    <span class="txt"><b>.left-menu</b></span>
                </div>
                <div class="layout-cont">
                    <span class="txt"><b>.content</b></span>
                </div>
               </div>
           </div>
           <div class="footer">
               <span class="txt">footer</span>
           </div>
        </div>

        3. 회원가입 
        <div class="layout">
           <span class="txt">#app</span>
           <div class="header">               
            <span class="txt">header</span>
           </div>
           <div class="body">
               <span class="txt"><b>#account-wrap</b></span>
               <div class="layout-wrap">
                <span class="txt"><b>.account-container</b></span>
                <div class="layout-cont">
                    <span class="txt"><b>.left-wrap</b></span>
                </div>
                <div class="layout-cont">
                    <span class="txt"><b>.content</b></span>
                </div>
               </div>
           </div>
           <div class="footer">
               <span class="txt">footer</span>
           </div>
        </div>

        <h1 style="margin:20px 0">FORM</h1>
        1. full-block form
         <div class="form-wrap">
            <label for="">사업자 등록 번호</label>
            <input type="text" name="" id="" placeholder="숫자만 입력하세요.">
        </div> 
    </div>
</template>

<script>
export default {
    name : "SampleLayout"
}
</script>
<style lang="scss" scoped>
.wrapper {
    padding:100px;
}
.box {
    display:inline-block;
    margin-left:10px;
    width:20px;
    height:20px;
}
.layout {
    position:relative;
    margin:10px 0;
    width:330px;
    height:600px;
    border:1px solid #999;
    padding:10px;
}
.layout .txt {
    display: block; 
    position: absolute;
    top:-12px;
    left:4px;
    right:auto;
    font-weight:bold;
 }
 .layout .body,  .layout .header,  .layout .footer {
     width:90%;
     height:10%;
     border:1px solid #ddd;
 }

</style>