<template>
  <div class="demo8">
    <div>按钮常用-4</div>
    <div>利用按钮的伪元素   ::after,::before 通过设置不同的动画延时实现视差上的波纹</div>
    <div class="button ani-button-08">点击领取</div>
  </div>
</template>

<script>
export default {
  name: 'demo_8',
}
</script>

<style lang="scss" scoped>
.demo8 {
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
  background-color: yellowgreen;
  text-align: center;
}

$Company: 1px; // 单位基数
$button-08-timeA: 2s; // 动画总时长
$button-08-w: 60; // 圆环宽高
$button-08-w2: 4; // 圆环 环宽度

.ani-button-08 {
  &::after,
  &::before {
    width: $button-08-w * $Company;
    height: $button-08-w * $Company;
    content: "";
    box-sizing: border-box;
    border: $button-08-w2 * $Company solid rgba(255, 255, 255, 0.6);
    position: absolute;
    border-radius: $button-08-w / 2 * $Company;
    right: 50%;
    margin-right: -$button-08-w / 2 * $Company;
    z-index: 1;
    transform: scale(0);
    animation: ani-button-08 $button-08-timeA ease-out infinite;
  }
  &::after {
    animation-delay: 0.4s;
  }
}

@keyframes ani-button-08 {
  0% {
    transform: scale(0);
  }
  20% {
    opacity: 1;
  }
  50%,
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
</style>
