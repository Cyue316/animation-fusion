<template>
  <div class="demo3">
    <div>转场动效-2</div>
    <div class="ani-transition-03" @click="changeDom">
      <!-- 通过切换class改变状态 -->
      <div class="transition-box" :class="{ show: showDom }">
        <div class="transition">
          <div class="sec-top"></div>
          <div class="sec-bottom"></div>
        </div>
        <div class="transition-bg"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo_3',
  data () {
    return {
      showDom: false
    }
  },
  methods: {
    changeDom () {
      this.showDom = !this.showDom
    }
  }
}
</script>
<style lang="scss" scoped>
.demo3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}

$transition-03-timeA: 0.6s;
$Company: 1px; // 单位基数
.ani-transition-03 {
  width: 100%;
  height: 100%;
  .transition-box {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .transition {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      div {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60%;
        background: url(https://img11.360buyimg.com/imagetools/jfs/t1/145124/16/12210/7522/5f990a8aE047ed462/b8e65849bbec5eb4.png)
          0 0 / cover no-repeat;
        transform: translateY(0);
        transition: transform $transition-03-timeA ease-in-out,
          opacity $transition-03-timeA ease-in-out;
        &:nth-child(2) {
          background: url(https://img12.360buyimg.com/imagetools/jfs/t1/131546/7/13962/23316/5f990a8aEd604781a/257a325971fac320.png)
            0 bottom/cover no-repeat;
          top: 0;
          height: 70%;
          bottom: auto;
        }
      }
    }
    .transition-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: url(https://img11.360buyimg.com/imagetools/jfs/t1/155447/22/3758/98168/5f990a8aE93f27aa0/0282bbfe7a4e4591.png)
        0 0 / cover no-repeat;
      opacity: 0;
      transition: opacity $transition-03-timeA ease-out;
    }
    &.show {
      .transition div {
        transform: translateY(100%);
        opacity: 0.8;
      }
      .transition div:nth-child(2) {
        transform: translateY(-100%);
        opacity: 0.8;
      }
      .transition-bg {
        opacity: 1;
      }
    }
  }
}
</style>
