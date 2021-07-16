<template>
  <div class="demo15">
    <div>按钮常用-5</div>
    <div id="button" class="btn-wrap" ref="button">
      <div class="button">
        <div class="btn-text">领取</div>
        <img src="../assets/button_2.png" alt="">
      </div>
      <img src="../assets/hand_1.png" class="hand" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "demo_15",
}
</script>
<style lang="scss" scoped>
.demo15 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}
.btn-wrap {
  position: relative;
}
.btn-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  color: white;
  margin-top: 100px;
  font-size: 28px;
  font-weight: 500;
}
.button {
  width: 750px;
  height: 270px;
  animation: breathe 0.7s infinite;
}

.hand {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 120px;
  right: 100px;
  transform: scale(0.9) ;
  animation: handAnimation 0.8s infinite;
     
}
@keyframes handAnimation {

	0% {
    top: 120px;
    right: 100px;
  }
    
  50% {
    top: 100px;
    right: 120px;
  }
	100.00% {
    top: 120px;
    right: 100px;
  }
}
@keyframes breathe {

	0% {
    transform: scale(0.9);
  }
  40% {
    transform: scale(0.95);
  }
	70%,100.00% {
    transform: scale(0.9);
  }
}

</style>
