<template>
  <div class="demo4">
    <div>弹性动效</div>
    <div class="ani-elastic-02"></div>
  </div>
</template>
<script>
export default {
  name: 'demo_4',
}
</script>
<style lang="scss" scoped>
.demo4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  position: relative;
}

$Company: 1px; // 单位基数

.ani-elastic-02 {
  width: 60 * $Company;
  height: 60 * $Company;
  animation: ani-elastic-02 1s ease-in-out infinite;
  position: absolute;
  bottom: 20 * $Company;
  transform: translateY(0) rotate(0deg);
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #b1b1b1;
    position: absolute;
    animation: ani-elastic-02-2 1s linear infinite;
    transform: rotate(45deg);
  }
}

@keyframes ani-elastic-02 {
  0%,
  100% {
    transform: translateY(-90 * $Company) scale(1, 1);
  }
  50% {
    animation-timing-function: ease-in-out;
    transform: translateY(0) scale(1.2, 0.8);
  }
}
@keyframes ani-elastic-02-2 {
  0% {
    transform: rotate(0);
    border-radius: 0 0 0 0;
  }
  25% {
    border-radius: 0 0 0 0;
  }
  50% {
    transform: rotate(45deg);
    border-radius: 0 0 40 * $Company 0;
  }
  100% {
    transform: rotate(90deg);
    border-radius: 0 0 0 0;
  }
}
</style>
