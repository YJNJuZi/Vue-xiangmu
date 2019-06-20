<template>
  <div id="app">-
    <div class="box">
      <div class="box1">
        <span class="zi">我 们 能 做 什 么</span>
      </div>
      <ul class="boxui">
        <li class="pc">
          <u class="cl"></u>
          <u class="cr"></u>
          <i></i>
          <strong>高端定制网站</strong>
          <p>
            企业高端定制网站设计<br>
            彰显品牌形象
          </p>
        </li>
        <li class="mobi">
          <u class="cl"></u>
          <u class="cr"></u>
          <i></i>
          <strong>移动网站建设</strong>
          <p>
            企业高端定制网站设计<br>
            彰显品牌形象
          </p>
        </li>
        <li class="sys">
          <u class="cl"></u>
          <u class="cr"></u>
          <i></i>
          <strong>业务系统开发</strong>
          <p>
            企业高端定制网站设计<br>
            彰显品牌形象
          </p>
        </li>
        <li class="app">
          <u class="cl"></u>
          <u class="cr"></u>
          <i></i>
          <strong>APP应用程序</strong>
          <p>
            企业高端定制网站设计<br>
            彰显品牌形象
          </p>
        </li>
        <li class="host">
          <u class="cl"></u>
          <u class="cr"></u>
          <i></i>
          <strong>服务器运维护</strong>
          <p>
            企业高端定制网站设计<br>
            彰显品牌形象
          </p>
        </li>
      </ul>
      <div class="zi2">One-stop Internet service</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
body{
  height: 100%;
  font-family: "微软雅黑",Arial;
}
#app {
  width: 100%;
  height: 637px;
  background-image:url(../images/wp22.jpg);
  background-size: 1920px 1200px;
  background-position: -260px -560px;
  background-repeat: no-repeat;
}
.box{
  // border:1px solid red;
  margin:0 auto;
  width: 1148px;
  height: 615px;
  position: relative;
}
.box1{
  top: 90px;
  height: 34px;
  width: 100%;
  text-align: center;
  position: absolute;
}
.zi{
  width: 162px;
  margin:0 auto;
  line-height: 34px;
  font-size: 23px;
}
.boxui{
  list-style:none;
  position: absolute;
  top: 170px;
}
.boxui>li{
  overflow: hidden;
  margin:0 13.5px;
  float: left;
  width: 200px;
  height: 300px;
  // border:0.5px solid red;
}
.zi2{
  // text-align: center;
  margin: 0 auto;
  color: #8A8A8A;
  font-size: 22px;
  position: absolute;
  bottom: 150px;
  left: 420px;;
}


.boxui>li i {
    font-style: italic;
    display: block;
    position: relative;
    margin: 0 auto;
    margin-top: 43px;
    height: 69px;
}
.boxui>li strong {
    position: relative;
    display: block;
    margin-top: 70px;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    transition: all 0.5s ease-in-out 0s;
}
.boxui>li:hover strong{
     color: white;
     background-position:-168px -357px;
     transition-delay: 0.3s;
     z-index: 3;
}

.pc i{
    width: 69px;
    background: url(../images/words.png) no-repeat -245px -357px;
    transition: all 0.5s ease-in-out 0s;
}
.boxui .pc:hover i{
     background-position:-168px -357px;
     transition-delay: 0.3s;
     z-index: 2;
}
.mobi i {
    width: 64px;
    background: url(../images/words.png) no-repeat -416px -291px;
    transition: all 0.5s ease-in-out 0s;
}
.boxui .mobi:hover i{
     background-position:-336px -291px;
     transition-delay: 0.3s;
     z-index: 2;
}
.sys i {
    width: 76px;
    background: url(../images/words.png) no-repeat -415px -362px;
    transition: all 0.5s ease-in-out 0s;
}
.boxui .sys:hover i{
     background-position:-328px -362px;
     transition-delay: 0.3s;
     z-index: 2;
}
.app i {
    width: 74px;
    background: url(../images/words.png) no-repeat -244px -439px;
    transition: all 0.5s ease-in-out 0s;
}
.boxui .app:hover i{
     background-position:-165px -439px;
     transition-delay: 0.3s;
     z-index: 2;
}
.host i {
    width: 79px;
    background: url(../images/words.png) no-repeat -420px -439px;
    transition: all 0.5s ease-in-out 0s;
}
.boxui .host:hover i{
     background-position:-334px -439px;
     transition-delay: 0.3s;
     z-index: 2;
}
.boxui>li u {
    display: block;
    position: absolute;
    width: 156px;
    height: 156px;
    margin-left: 22px;
    background: url(../images/words.png) no-repeat 0px -363px;
    transition: all .5s ease-in-out 0s;
}
.boxui>li:hover u.cl { 
    clip: rect(0px,156px,-10px,78px);
}
.boxui>li:hover u.cr {
    clip: rect(156px,78px,156px,0px);
}
.boxui>li u.cl {
    clip: rect(0px,156px,156px,78px);
}
.boxui>li u.cr {
    clip: rect(0px,78px,156px,0px);
}

.boxui>li p{
    padding-top: 220px;
    position: relative;
    top: 200px;
    color: White;
    font-family: Arial,"宋体";
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    // margin: 0 0 10px;
    transition: all .5s ease-in-out 0s;
}
.boxui>li:hover p{
  top:-200px;
  background: #2FD0B5;
  height: 300px;
  transition-delay: 0.3s;
  z-index: 1;
}
</style>