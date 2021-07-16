<template>
  <div class="demo5">
    <div>按钮常用-呼吸</div>
    <div class="button ani-button-01">点击领取</div>
  </div>
</template>
<script>
export default {
  name: 'demo_5',
}
</script>
<style lang="scss" scoped>
.demo5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
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
  background-color: #409eff;
  text-align: center;
}

$button-01-timeA: 1s; // 动画总时长
$button-01-sc: 1.1; // 缩放比例  1.1为  110%
.ani-button-01 {
  animation: ani-button-01 $button-01-timeA ease-in-out alternate infinite;
}
@keyframes ani-button-01 {
  to {
    transform: scale($button-01-sc);
  }
}
</style>
