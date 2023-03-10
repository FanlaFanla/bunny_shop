<template>
    <footer class="container">
    <ul class="about">
      <li><a href="">关于我们</a></li>
      <li><a href="">帮助中心</a></li>
      <li><a href="">售后服务</a></li>
      <li><a href="">配送与验收</a></li>
      <li><a href="">商务合作</a></li>
      <li><a href="">搜索推荐</a></li>
      <li><a href="">友情链接</a></li>
    </ul>
    <p class="copyright">CopyRight © 兔兔</p>
  </footer>
</template>

<script>
export default {
  setup () {}
}
</script>

<style scoped lang='less'>
// 底部署名
footer{
  .about {
  margin-top: 60px;
  text-align: center;
  li {
    display: inline-block;
    padding: 0 15px;
    &:nth-child(n + 2) {
      border-left: 1px solid #dddbdb;
    }
  }
}
.copyright {
  text-align: center;
  margin-top: 30px;
}
}
</style>
