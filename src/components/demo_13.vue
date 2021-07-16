<template>
  <div class="demo13">
    <div>按钮常用-小手光圈</div>
    <div class="button-wrap">
      <div class="button ani-button-01">点击领取</div>
      <div class="hand"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo_13',
}
</script>
<style lang="scss" scoped>
.demo13 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}
.button-wrap {
  position: relative;
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
.hand{
  position: absolute;
  right: -70px;
  top: 46px;
  background-image: url('../assets/hand.png');
  width: 150px;
  height: 150px;
  -webkit-animation: myAnimation 0.47s steps(1) infinite;
  -moz-animation: myAnimation 0.47s steps(1) infinite;
  -ms-animation: myAnimation 0.47s steps(1) infinite;
  -o-animation: myAnimation 0.47s steps(1) infinite;
  animation: myAnimation 0.47s steps(1) infinite;
}

@keyframes myAnimation {
	0% { background-position: 0px 0px; }
	14.29% { background-position: -150px 0px; }
	28.57% { background-position: -300px 0px; }
	42.86% { background-position: -450px 0px; }
	57.14% { background-position: -600px 0px; }
	71.43% { background-position: -750px 0px; }
	85.71% { background-position: -900px 0px; }
	100.00% { background-position: -1050px 0px; }
}



</style>
