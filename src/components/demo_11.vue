<template>
  <div class="demo11">
    <div>文字-抖*</div>

    <div class="ani-txt-05">
      <div class="txt">精神抖擞</div>
      <div class="txt">精神抖擞</div>
    </div>
    <div class="ani-txt-06">
      <div class="txt">抖擞精神</div>
      <div class="txt">抖擞精神</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo_11',
}
</script>

<style lang="scss" scoped>
.demo11 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  background-color: #000;
}

$Company: 2px; // 单位基数
$Pian: 2; // 偏移量
.ani-txt-05 {
  margin-top: 50px;

  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  .txt {
    position: absolute;
    font-size: 30 * $Company;
    font-weight: bold;
    &:nth-child(1) {
      color: #fe2d52 !important;
      margin: (3 * $Company) 0 0 (3 * $Company); // 巧用margin 错位
      animation: ani-txt-05-2 1s steps(1) infinite;
    }
    &:nth-child(2) {
      color: #24f6f0 !important;
      mix-blend-mode: lighten;
      animation: ani-txt-05 1s steps(1) infinite;
    }
  }
}

@keyframes ani-txt-05 {
  0%,
  10%,
  20%,
  30%,
  40%,
  100% {
    transform: translate(0, 0);
  }

  5%,
  25% {
    transform: translate($Pian * $Company, $Pian * $Company);
  }
  15%,
  35% {
    transform: translate($Pian * $Company, -$Pian * $Company);
  }
}
@keyframes ani-txt-05-2 {
  0%,
  10%,
  20%,
  30%,
  40%,
  100% {
    transform: translate(0, 0);
  }

  10%,
  25% {
    transform: translate(-$Pian * $Company, -$Pian * $Company);
  }
  30%,
  35% {
    transform: translate(-$Pian * $Company, $Pian * $Company);
  }
}

.ani-txt-06 {
  margin-top: 50px;

  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  .txt {
    position: absolute;
    font-size: 30 * $Company;
    font-weight: bold;
    &:nth-child(1) {
      color: #fe2d52 !important;
      // margin: (20 * $Company) 0 0 (20 * $Company); // 巧用margin 错位
      animation: ani-txt-05-2 1s steps(1) infinite;
    }
    &:nth-child(2) {
      color: #24f6f0 !important;
      mix-blend-mode: lighten;
      animation: ani-txt-05 1s steps(1) infinite;
    }
  }
}
</style>
