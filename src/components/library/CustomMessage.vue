<template>
  <Transition name="down">
    <div class="message" :style="style[type]" v-show="visibale">
    <i class="iconfont" :class="style[type].icon"></i>
    <span>{{ text }}</span>
  </div>
  </Transition>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'CustomMessage',
  props: {
    type: {
      type: String,
      default: 'success'
    },
    text: {
      type: String,
      default: '成功'
    }
  },
  setup () {
    const style = {
      warning: {
        icon: 'icon-warning',
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)'
      },
      error: {
        icon: 'icon-shanchu',
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)'
      },
      success: {
        icon: 'icon-queren2',
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)'
      }
    }
    // 组件移除 创建 显示 隐藏 触发动画
    const visibale = ref(false)
    onMounted(() => {
      visibale.value = true
    })
    return { style, visibale }
  }
}
</script>

<style scoped lang='less'>
.down{
  &-enter{
    &-from{
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    &-active{
      transition: all 0.6s;
    }
    &-to{
      transform: none;
      opacity: 1;
    }
  }
}
.message{
  position: fixed;
  width: 300px;
  height: 50px;
  line-height: 50px;
  top: 53px;
  left: 50%;
  z-index: 9999;
  transform: translateX(-50%);
  padding-left: 30px;
  border-radius: 4px;
  background: #f5f3f3;
  border: 1px solid #dadada;
  box-shadow: 0 0 2px #d4d4d4;
  i{
    margin-right: 5px;
  }
}

</style>
