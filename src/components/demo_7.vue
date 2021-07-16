<template>
  <div class="demo7">
    <div>按钮常用-3</div>

    <div class="button ani-button-16">保护我方...</div>
    <div class="button ani-button-17">点击领取</div>
  </div>
</template>

<script>
export default {
  name: 'demo_7',
}
</script>

<style lang="scss" scoped>
.demo7 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  margin-top: 50px;

  width: 200px;
  height: 60px;
  border-radius: 30px;
  line-height: 60px;
  font-family: PingFangSC-Semibold;
  font-size: 22px;
  color: #fff;
  // background-color: blue;
  background-image: linear-gradient(
180deg
,#988df1,#988df1);
  text-align: center;
}

$Company: 1px; // 单位基数
.ani-button-16 {
  position: relative;
  overflow: hidden;
  &::after {
    width: 100 * $Company;
    height: 60 * $Company;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.73;
    content: "";
    background-image: linear-gradient(
      106deg,
      rgba(232, 224, 255, 0) 24%,
      #e8e0ff 91%
    );
    animation: ani-button-16 3s linear infinite;
    transform: skewX(-15deg);
    filter: blur(3 * $Company);
  }
}
@keyframes ani-button-16 {
  0% {
    transform: translateX(-100 * $Company) skewX(-15deg);
  }
  40%,
  100% {
    transform: translateX(150 * $Company) skewX(-15deg);
  }
}

.ani-button-17 {
  position: relative;
  // overflow: hidden;
  &::after {
    width: 100 * $Company;
    height: 60 * $Company;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.73;
    content: "";
    background-image: linear-gradient(
      106deg,
      rgba(232, 224, 255, 0) 24%,
      red 91%
    );
    animation: ani-button-16 3s linear infinite;
    transform: skewX(-15deg);
    filter: blur(3 * $Company);
  }
}
</style>
