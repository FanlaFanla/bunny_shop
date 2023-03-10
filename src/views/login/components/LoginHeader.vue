<template>
  <header class="container">
    <RouterLink to="/"></RouterLink>
    <span>
      <slot>默认</slot>
    </span>
  </header>
</template>

<script>
export default {
  setup () {
  }
}
</script>

<style scoped lang='less'>
header {
  height: 132px;
  a {
    display: inline-block;
    width: 230px;
    height: 110px;
    background: url(@/assets/images/logo.png) center/100% no-repeat;
  }
  span {
    display: inline-block;
    vertical-align: bottom;
    font-size: 25px;
    padding-bottom: 20px;
    padding-left: 20px;
  }
}
</style>
