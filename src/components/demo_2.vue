<template>
  <div class="demo2">
    <div>转场</div>

    <div class="ani-treasure-01">
      <div class="treasure">
        <div class="treasure-box">
          <div class="treasure-header"></div>
          <div class="treasure-body"></div>
          <div class="treasure-atmosphere">
            <div class="treasure-light2"></div>
            <div class="treasure-body-inset"></div>
          </div>
        </div>
        <div class="treasure-light"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo_2',
  data () {
    return {
      showDom: false
    }
  },
  created () {},
  methods: {
    changeDom () {
      this.showDom = !this.showDom
    }
  }
}
</script>
<style lang="scss" scoped>
.demo2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  // height: 200px;
}

$Company: 1px; // 单位基数
$treasure01-time: 1.5; // 动画总时长
$treasure01-wait: 0; // 间隔时间 默认0
$treasure01-header: "https://img11.360buyimg.com/imagetools/jfs/t1/145719/18/16802/3566/5fc8c25cE8bf5aee5/a1eb07d6818d8e5a.png"; // 宝箱盖图片
$treasure01-body: "https://img13.360buyimg.com/imagetools/jfs/t1/138401/33/16747/2915/5fc8c25cE6d57059b/e1d6f3037688fb2c.png"; // 宝箱箱体图片
$treasure01-inset: "https://img12.360buyimg.com/imagetools/jfs/t1/138136/23/16577/8591/5fc8c25cEdc4f20eb/a99cae768d35292e.png"; // 宝箱内素材图片
$treasure01-light: "https://img11.360buyimg.com/imagetools/jfs/t1/135072/12/18337/1495/5fc8c25cE44a75534/3bfb363902d25bac.png"; // 宝箱后光点图片
$treasure01-light2: "https://img14.360buyimg.com/imagetools/jfs/t1/135086/36/18292/1968/5fc8c25cEc54decaf/2e2cc1878ab78b81.png"; // 宝箱后其他素材图片

.ani-treasure-01 {
  margin-top: 100px;

  .treasure {
    width: 120 * $Company;
    height: 120 * $Company;
    position: relative;
    div {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      backface-visibility: hidden;
    }
    .treasure-box {
      animation: ani-treasure-01 $treasure01-time + s $treasure01-wait + s
          linear forwards,
        ani-treasure-01-02 ($treasure01-time - 1) + s $treasure01-wait + s
          ease-in forwards,
        ani-treasure-01-03 ($treasure01-time - 0.85) + s $treasure01-wait + s
          ease-out forwards,
        ani-treasure-01-02 ($treasure01-time - 1.15) + s
          ($treasure01-time - 1.1 + $treasure01-wait) + s ease-in 2,
        ani-treasure-01-03 ($treasure01-time - 1.2) + s
          ($treasure01-time - 1.05 + $treasure01-wait) + s ease-out 2;
    }
    .treasure-header {
      background: url($treasure01-header) 0 0 / cover no-repeat;
      z-index: 3;
      animation: ani-treasure-01-06 ($treasure01-time - 1) + s
        ($treasure01-time - 0.4 + $treasure01-wait) + s ease-out forwards;
    }
    .treasure-body {
      background: url($treasure01-body) 0 0 / cover no-repeat;
      z-index: 2;
    }
    .treasure-body-inset {
      background: url($treasure01-inset) 0 0 / cover no-repeat;
      transform: scale(0);
      opacity: 0;
      z-index: 1;
      animation: ani-treasure-01-07 ($treasure01-time - 1.1) + s
        ($treasure01-time - 0.35 + $treasure01-wait) + s
        cubic-bezier(0, 0, 0.2, 1.5) forwards;
    }
    .treasure-atmosphere {
      z-index: 1;
    }
    .treasure-light2 {
      background: url($treasure01-light2) 0 0 / cover no-repeat;
      transform: scale(0.2);
      opacity: 0;
      animation: ani-treasure-01-05 ($treasure01-time - 1.1) + s
        ($treasure01-time - 0.35 + $treasure01-wait) + s
        cubic-bezier(0, 0, 0.2, 1.5) forwards;
    }
    .treasure-light {
      background: url($treasure01-light) 0 0 / cover no-repeat;
      transform: scale(0.2);
      opacity: 0;
      animation: ani-treasure-01-04 ($treasure01-time - 0.5) + s
        ($treasure01-time - 0.7 + $treasure01-wait) + s linear forwards;
    }
  }
}
@keyframes ani-treasure-01 {
  65% {
    animation-timing-function: ease-in;
    transform: scale(0.8);
  }
  80% {
    animation-timing-function: ease-out;
    transform: scale(1.3, 1.3);
    transform-origin: center bottom;
  }
  100% {
    transform: scale(1);
  }
}
@keyframes ani-treasure-01-02 {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    left: 0;
  }
  10%,
  30%,
  50%,
  90% {
    left: -5 * $Company;
  }
  30%,
  70% {
    left: 5 * $Company;
  }
}
@keyframes ani-treasure-01-03 {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    top: 0;
  }
  10%,
  30%,
  50%,
  90% {
    top: -5 * $Company;
  }
  30%,
  70% {
    top: 5 * $Company;
  }
}
@keyframes ani-treasure-01-04 {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
  to {
    transform: scale(1.6);
    opacity: 0;
  }
}
@keyframes ani-treasure-01-05 {
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes ani-treasure-01-06 {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-95 * $Company) translateX(90 * $Company)
      rotate(50deg);
  }
}
@keyframes ani-treasure-01-07 {
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
