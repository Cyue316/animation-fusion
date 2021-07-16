<template>
  <div class="demo17">
    <div class="title-flex">参考：<a href="https://www.zhangxinxu.com/wordpress/2014/10/currentcolor-css3-powerful-css-keyword/">box-shadow + currentColor 实现九个点icon</a></div>
    <a href="javascript:" class="ico-a"><i class="ico ico-repeat"></i>平铺</a>

    <div class="title-flex">box-shadow 实现九个点icon</div>
    <div class="box-wrap"><i class="box box-repeat"></i></div>

    <div class="title-flex">参考：<a href="https://www.zhangxinxu.com/wordpress/2014/12/css3-animation-dotting-loading/">animation实现点点点loading动画</a></div>
    <div class="title-flex">参考：<a href="https://www.zhangxinxu.com/wordpress/2018/06/css3-animation-steps-step-start-end/">animation step 详解</a></div>
    <a href="javascript:" class="grebtn">订单提交中<span class="dotting"></span></a>
  </div>
</template>
<script>
export default {
  name: "demo_17",
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.demo17 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}
/* 分割线 */
 .title-flex {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: pink;
  margin: 20px 0;
}

.title-flex::before,
.title-flex::after {
  content: '';
  flex: 1;
  height: 1px;
  background: pink;
}

.title-flex::before {
  margin-right: 25px;
}

.title-flex::after {
  margin-left: 25px;
}
/* 分割线 end */

/* box-shadow + currentColor 实现九个点icon */
.ico-a {
  color: #333;
}

.ico-a:hover {
  color: #4D77C6;
  text-decoration: none;
}

.ico {
  display: inline-block;
  width: 20px;
  height: 20px;
  // background: url(css3-icons.png) no-repeat -99em;
  vertical-align: -3px;
}

/* 以下为IE9+浏览器 */
:root .ico {
  background-image: none;
  position: relative;
}

.ico::before,
.ico::after {
  content: '';
  position: absolute;
}

.ico-repeat {
  background-position: 0 -20px;
}

a:hover .ico-repeat,
a.ico-repeat:hover {
  background-position: -20px -20px;
}

/* css3 */
.ico-repeat::before {
  width: 3px;
  height: 3px;
  background-color: currentColor;
  box-shadow: 0 5px currentColor,
              5px 0 currentColor,
              5px 5px currentColor,
              10px 0 currentColor,
              0 10px currentColor,
              5px 10px currentColor,
              10px 5px currentColor,
              10px 10px currentColor;
  top: 5px;
  left: 3px;
}

/* box-shadow + currentColor 实现九个点icon end */

/* box-shadow 实现九个点icon */
.box-wrap {
  width: 200px;
  height: 200px;
  display: inline-table;
}

.box {
  display: block;
  width: 50px;
  height: 50px;
  background-color: pink;
  position: relative;
  color: pink;
}

.box::before {
  content: '';
  position: absolute;
}

.box-repeat {
  /* border-radius: 50%; */
  box-shadow: 0 55px currentColor,
      0 110px currentColor,
      55px 0 currentColor,
      55px 55px currentColor,
      55px 110px currentColor,
      110px 0 currentColor,
      110px 55px currentColor,
      110px 110px currentColor;
}

/* box-shadow 实现九个点icon end */

/* 打点效果 */

.dotting {
  display: inline-block;
  min-width: 2px;
  min-height: 2px;
  color: green;
  box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor;/* for IE9+, ..., 3个点 */
  /* -webkit-animation: dot 4s infinite step-start both; */
  animation: dot 4s infinite step-start both;
  *zoom: expression(this.innerHTML = '...'); /*  for IE7. 若无需兼容IE7, 此行删除 */
}

.dotting:before { content: '...'; } /* for IE8. 若无需兼容IE8, 此行以及下一行删除*/
.dotting::before { content: ''; } /* for IE9+ 覆盖 IE8 */
:root .dotting { margin-right: 8px; } /* for IE9+,FF,CH,OP,SF 占据空间*/

@keyframes dot {
  25% {
      box-shadow: none;
  }

  50% {
      box-shadow: 2px 0 currentColor;
  }

  75% {
      box-shadow: 2px 0 currentColor, 6px 0 currentColor;
  }

}
/* 打点效果 end */
</style>
