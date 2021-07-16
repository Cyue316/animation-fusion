<template>
  <div class="demo6">
    <div>按钮常用-2</div>
    <div class="disassemble">
      <div class="button ani-button-07">点击领取1</div>
    </div>
    <div class="disassemble">
      <div class="button ani-button-08">点击领取2</div>
      <div class="button ani-button-09">点击领取3</div>
      <div class="button ani-button-07">点击领取4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo_6',
}
</script>

<style lang="scss" scoped>
.demo6 {
  text-align: center;
}

.disassemble {
  // margin-top: 20px;
  display: flex;
  justify-content: space-around;
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
  background-color: pink;
  text-align: center;
}

// ========= 全效果 open

$Company: 1px; // 单位基数
$button-07-timeA: 1s; // 动画总时长
$button-07-h: 60; // 按钮高度
// ani-button-07-2 需按照按钮比例 自行微调，例 长按钮 缩放为 scale(1.3,1.6)， 圆按钮则为 scale(1.3,1.3);

.ani-button-07 {
  position: relative;
  animation: ani-button-07 $button-07-timeA linear infinite;
  // 利用伪元素实现, 减少不必要的元素
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(
      180deg,
      pink 0%,
      pink 100%
    ); // 利用渐变 实现外环光晕
    z-index: -1;
    animation: ani-button-07-2 $button-07-timeA ease-out infinite;
    border-radius: $button-07-h / 2 * $Company;
    opacity: 0.8;
  }
}

@keyframes ani-button-07 {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  20% {
    transform: scale(1.1);
  }
  25% {
    transform: scale(1);
  }
}

@keyframes ani-button-07-2 {
  0%,
  20% {
    transform: scale(1);
    opacity: 0.8;
  }
  60%,
  100% {
    transform: scale(1.3, 1.6);
    opacity: 0;
  }
}

// ========= 全效果 end

// 呼吸效果
.ani-button-08 {
  position: relative;
  animation: ani-button-07 $button-07-timeA linear infinite;
}
// 光晕效果
.ani-button-09 {
  position: relative;
  // animation: ani-button-07 $button-07-timeA linear infinite;
  transform: scale(1);
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(
      180deg,
      pink 0%,
      pink 100%
    ); // 原按钮背景色 或 指定颜色
    z-index: -1;
    animation: ani-button-07-2 $button-07-timeA ease-out infinite;
    border-radius: $button-07-h / 2 * $Company;
    opacity: 0.8;
  }
}
</style>
