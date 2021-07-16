<template>
  <div class="demo16">
    <div>点赞</div>
    <div class="heart" :class="{'is_animating': active}" @click="zan" ref="heart"></div>
  </div>
</template>
<script>
export default {
  name: "demo_16",
  data() {
    return {
      active: false
    }
  },
  mounted() {
    this.$refs.heart.addEventListener('animationend', () => {
      this.active = false
    });
  },
  unmounted() {
    this.$refs.heart.removeEventListener('animationend')
  },
  methods: {
    zan() {
      this.active = true
    }
  }
}
</script>
<style lang="scss" scoped>
.demo16 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}
.heart {
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-image: url('https://user-gold-cdn.xitu.io/2019/4/4/169e6d3fb6a474b2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1');
  background-position: left;
  background-repeat: no-repeat;
  background-size: 2900%;
}

.is_animating {
  animation-name: heart-burst;
  animation-duration: 800ms;
  animation-timing-function: steps(28);
  animation-iteration-count: 1;
}

@keyframes heart-burst {
  from {
      background-position: left;
  }
  to {
      background-position: right;
  }
}

</style>
