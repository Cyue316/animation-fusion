<template>
  <div class="demo1">
    <div>入场/出场</div>
    <!-- 通过切换class改变状态 -->
    <div class="all">
      <div
        class="ani-admission-01"
        :class="{ 'box-in': show, 'box-out': show2 }"
      ></div>
    </div>
    <div class="disassemble">
      <div class="ani-admission-01" :class="{ 'box-in': show }"></div>
      <div class="ani-admission-01" :class="{ 'box-out': show2 }"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo_1',
  data () {
    return {
      show: false,
      show2: false
    }
  },
  created () {
    setTimeout(() => {
      this.show = true
      this.show2 = false
    }, 500)
    setTimeout(() => {
      this.show = false
      this.show2 = true
    }, 2500)
  }
}
</script>
<style lang="scss" scoped>
.demo1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.all {
  margin-top: 20px;
}
.disassemble {
  margin-top: 20px;
  display: flex;
}

$Company: 1px; // 单位基数
// $admission-01-timeA: 0.6s; // 过渡时间
$admission-01-timeA: 1s; // 过渡时间

.ani-admission-01 {
  background-color: pink;
  width: 150 * $Company;
  height: 150 * $Company;
  transform: translateX(-200 * $Company) rotate(10deg);
  // 以上需自行修改所要UI样式

  opacity: 0;
  transform-origin: 100% 100%;
  &.box-in {
    animation: ani-admission-01 $admission-01-timeA linear forwards;
  }
  &.box-out {
    transform-origin: 0 100%;
    animation: ani-admission-01-2 $admission-01-timeA linear forwards;
  }
}

@keyframes ani-admission-01 {
  0% {
    transform: translateX(-200 * $Company) rotate(10deg);
    opacity: 0;
    animation-timing-function: cubic-bezier(0, 0, 0, 1.2);
  }

  70% {
    transform: translateX(0) rotate(10deg);
  }

  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes ani-admission-01-2 {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  70% {
    transform: translateX(-20 * $Company) rotate(-10deg);
    opacity: 1;
  }
  100% {
    transform: translateX(200 * $Company) rotate(-10deg);
    opacity: 0;
  }
}
</style>
