<template>
  <div class="demo9">
    <div>loading-1</div>

    <div class="ani-loading-02">
      <div v-for="index in 5" :key="index"><span></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo_9',
}
</script>

<style lang="scss" scoped>
.demo9 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

$loading-02-timeA: 3; // 动画总时长
$Company: 2px; // 单位基数

.ani-loading-02 {
  width: 180 * $Company;
  height: 100 * $Company;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  div {
    width: 20 * $Company;
    height: 20 * $Company;
    position: absolute;
    transform-origin: center bottom;
    span {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 3 * $Company;
    }
    &:nth-child(1) {
      left: 0;
      span {
        background: #6f5adb;
        animation: ani-loading-02 $loading-02-timeA + s ease-in-out infinite;
      }
    }
    &:nth-child(2) {
      left: 40 * $Company;
      animation: ani-loading-02-2 $loading-02-timeA + s ease-in-out infinite;
      span {
        animation: ani-loading-02-3 $loading-02-timeA + s linear infinite;
        background: #735eda;
      }
    }
    &:nth-child(3) {
      left: 80 * $Company;
      animation: ani-loading-02-4 $loading-02-timeA + s
        ($loading-02-timeA * 0.18) + s ease-in-out infinite;
      span {
        animation: ani-loading-02-5$loading-02-timeA + s
          ($loading-02-timeA * 0.18) + s linear infinite;
        background: #7e6cda;
      }
    }
    &:nth-child(4) {
      left: 120 * $Company;
      animation: ani-loading-02-6 $loading-02-timeA + s
        ($loading-02-timeA * 0.24) + s ease-in-out infinite;
      span {
        animation: ani-loading-02-7 $loading-02-timeA + s
          ($loading-02-timeA * 0.24) + s linear infinite;
        background: #7d6cd6;
      }
    }
    &:nth-child(5) {
      left: 160 * $Company;
      animation: ani-loading-02-8 $loading-02-timeA + s
        ($loading-02-timeA * 0.33) + s ease-in-out infinite;
      span {
        animation: ani-loading-02-9 $loading-02-timeA + s
          ($loading-02-timeA * 0.33) + s linear infinite;
        background: #9487d6;
      }
    }
  }
}

@keyframes ani-loading-02 {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(160 * $Company);
    background: #9487d6;
  }
}

@keyframes ani-loading-02-2 {
  0%,
  7% {
    transform: translateX(0);
  }
  25%,
  82% {
    transform: translateX(-40 * $Company);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes ani-loading-02-3 {
  0%,
  7% {
    animation-timing-function: ease-out;
    transform: translateY(0) rotate(0);
  }
  16% {
    animation-timing-function: ease-in;
    transform: translateY(-40 * $Company) rotate(-90deg);
  }
  91% {
    animation-timing-function: ease-in;
    transform: translateY(-40 * $Company) rotate(-60deg);
  }
  25%,
  82% {
    transform: translateY(0) rotate(-180deg);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
@keyframes ani-loading-02-4 {
  0% {
    transform: translateX(0);
  }
  18%,
  56% {
    transform: translateX(-40 * $Company);
  }
  74%,
  100% {
    transform: translateX(0);
  }
}

@keyframes ani-loading-02-5 {
  0% {
    animation-timing-function: ease-out;
    transform: translateY(0) rotate(0);
  }
  9% {
    animation-timing-function: ease-in;
    transform: translateY(-40 * $Company) rotate(-90deg);
  }
  65% {
    animation-timing-function: ease-in;
    transform: translateY(-40 * $Company) rotate(-60deg);
  }
  18%,
  56% {
    transform: translateY(0) rotate(-180deg);
    animation-timing-function: ease-out;
  }
  74%,
  100% {
    transform: translateY(0) rotate(0);
  }
}

@keyframes ani-loading-02-6 {
  0% {
    transform: translateX(0);
  }
  18%,
  44% {
    transform: translateX(-40 * $Company);
  }
  62%,
  100% {
    transform: translateX(0);
  }
}

@keyframes ani-loading-02-7 {
  0% {
    animation-timing-function: ease-out;
    transform: translateY(0) rotate(0);
  }
  9% {
    animation-timing-function: ease-in;
    transform: translateY(-40 * $Company) rotate(-90deg);
  }
  53% {
    animation-timing-function: ease-in;
    transform: translateY(-40 * $Company) rotate(-60deg);
  }
  18%,
  44% {
    transform: translateY(0) rotate(-180deg);
    animation-timing-function: ease-out;
  }
  62%,
  100% {
    transform: translateY(0) rotate(0);
  }
}

@keyframes ani-loading-02-8 {
  0% {
    transform: translateX(0);
  }

  18%,
  23% {
    transform: translateX(-40 * $Company);
  }
  40%,
  100% {
    transform: translateX(0);
  }
}

@keyframes ani-loading-02-9 {
  0% {
    animation-timing-function: ease-out;
    transform: translateY(0) rotate(0);
  }
  9% {
    animation-timing-function: ease-in;
    transform: translateY(-40 * $Company) rotate(-90deg);
  }
  31% {
    animation-timing-function: ease-in;
    transform: translateY(-40 * $Company) rotate(-60deg);
  }
  18%,
  23% {
    transform: translateY(0) rotate(-180deg) scale(1);
    animation-timing-function: ease-out;
  }
  40%,
  100% {
    transform: translateY(0) rotate(0);
  }
}
</style>
