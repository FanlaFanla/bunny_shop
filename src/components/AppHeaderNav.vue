<template>
<ul class="navlist">
  <li><a href="#">首页</a></li>
  <li v-for="item in list" :key="item.id">
    <RouterLink to="/">{{ item.name }}</RouterLink>
    <ul class="recommon">
      <li v-for="i2 in item.children" :key="i2.id">
        <img :src="i2.picture" alt="">
        <RouterLink to="/">{{ i2.name }}</RouterLink>
      </li>
    </ul>
  </li>
</ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup () {
    const sotre = useStore()
    sotre.dispatch('category/getCategoryList')
    // 分类数据
    const list = computed(() => {
      return sotre.state.category.categoryList
    })
    return { list }
  }
}
</script>

<style scoped lang="less">

.navlist{
  display: flex;
  justify-content: space-around;
  position: relative;
  flex-grow: 1;
  li:nth-child(n+2) {
    a:hover {
      color: @xtxColor;
    }
    &:hover{
      .recommon{
        opacity: 1;
        display: block;
        height: 90px;
        z-index: 999;
      }
    }
    .recommon{
      position: absolute;
      width: 1100px;
      height: 50px;
      padding-left: 45px;
      opacity: 0;
      overflow: hidden;
      transition: all 0.4s;
      top: 55px;
      left: -110px;
      z-index: -1;
      box-shadow: 0 0 3px #e2e0e0;
      background: #fff;
      li{
        display: inline-block;
        width: 100px;
        height: 90px;
        text-align: center;
        padding-top: 5px;
        img{
          height: 60px;
          width: 60px;
        }
        a{
          display: block;
        }
        &:hover a{
          color: @xtxColor
        }
      }
      &:hover{
        display: block;
      }
      }
    }
}
</style>
