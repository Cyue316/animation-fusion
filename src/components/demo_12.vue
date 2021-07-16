<template>
  <div class="demo12">
    <div>文字-2</div>

    <div class="ani-txt-06"><span>DI_DI</span></div>
  </div>
</template>

<script>
export default {
  name: 'demo_12',
}
</script>

<style lang="scss" scoped>
.demo12 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  background-color: #000;
}

$Company: 2px; // 单位基数
$txt-06-time: 1.6s; // 动画总时长

.ani-txt-06 {
  -webkit-background-clip: text; // 需要注意兼容性
  animation: ani-txt-06 $txt-06-time linear infinite;
  // background-image: linear-gradient(90deg, #e66465, #9198e5 50% ,#e66465) !important; // 自定义颜色
  background-image: linear-gradient(
    -45deg,
    #ffa7ff 0%,
    #a85fff 25%,
    #38fff3 50%,
    #a85fff 75%,
    #ffa7ff 100%
  ) !important;
  background-size: 200% 100%;
  color: transparent;
  font-size: 30 * $Company;
  font-weight: bold;
}

@keyframes ani-txt-06 {
  to {
    background-position: 200% 0;
  }
}
</style>
