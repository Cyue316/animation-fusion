<template>
  <div class="demo10">
    <div>loading-2</div>

    <!-- 通过切换class改变状态 播放一遍的可自行控制 -->
    <div class="ani-loading-05">
      <div class="loading-box" :class="{ show: show }">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo_10',
  data () {
    return {
      show: false
    }
  },
  created () {
    setTimeout(() => {
      this.show = true
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.demo10 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}

$Company: 1px; // 单位基数
$loading-05-w: 200; // loading宽度
.ani-loading-05 {
  margin-top: 50px;

  width: $loading-05-w * $Company;
  height: 40 * $Company;
  background: #6500df;
  border: 1 * $Company solid #543877;
  box-sizing: border-box;
  border-radius: 20 * $Company;
  position: relative;
}
.loading-box {
  width: 30 * $Company;
  height: 30 * $Company;
  box-sizing: border-box;
  position: absolute;
  left: 4 * $Company;
  top: 4 * $Company;
  transition: width 2s ease-in-out;
  span {
    position: absolute;
    width: 100%;
    height: 30 * $Company;
    border-radius: 15 * $Company;
    left: 0;
    top: 0;
    &:nth-child(1) {
      border: 2 * $Company solid #9161fe;
      box-sizing: border-box;
      background: linear-gradient(180deg, #ffe5b0 0%, #ff79ec 100%);
    }
    &:nth-child(2) {
      background: url(https://img11.360buyimg.com/imagetools/jfs/t1/132950/25/13740/6303/5f990a6cE553282b2/7cd1c7c6b134aba5.png)
        0 0 / auto 30 * $Company repeat-x;
      animation: ani-loading-05 2s linear infinite;
    }
  }
  &.show {
    width: ($loading-05-w - 10) * $Company;
  }
}

@keyframes ani-loading-05 {
  to {
    background-position-x: 88 * $Company;
  }
}
</style>
