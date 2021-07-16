<template>
  <div>
    <div class="navbar">
      <div v-for="(item, index) in routes" :key="index">
        <router-link :to="item.path">{{item.meta.title}}</router-link>
      </div>
    </div>

    <!-- 路由匹配到的组件将显示在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    routes () {
      return this.$router.options.routes
    }
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100px;
    height: 30px;
    border-radius: 6px;
    background-color: #accbff;
    >a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
