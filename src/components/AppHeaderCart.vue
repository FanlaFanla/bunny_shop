<template>
  <div class="cart">
    <RouterLink to="/cart" class="iconfont icon-cart"></RouterLink>
    <span class="cartcount">{{countGoods}}</span>
    <div class="cart-panel" v-if="$store.getters['cart/totalPrice']>0&&$route.path!=='/cart'">
      <ul>
        <li v-for="item in list" :key="item.skuId">
          <div class="image">
            <img :src="item.picture" alt="">
          </div>
            <div class="info">
              <p class="title">{{ item.name }}</p>
              <div class="desc">{{ item.attrsText }}</div>
            </div>
            <div class="price">
              <div>￥{{ item.price }}</div>
              <div class="count">x{{ item.count }}</div>
            </div>
            <div class="remove">
              <a @click="removeGoods(item.skuId)">x</a>
            </div>
        </li>
      </ul>
      <div class="total">
        <div>
          <p>共{{list.length}}件商品</p>
          <p>￥{{ totalPrice }}</p>
        </div>
        <XtxButton type="plain">去结算</XtxButton>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    // 购物车已有商品渲染数据
    const { list } = store.state.cart
    // store计算商品总数
    const countGoods = computed(() => {
      return store.getters['cart/countGoods']
    })
    // store计算价格总数
    const totalPrice = computed(() => {
      return store.getters['cart/totalPrice']
    })
    // 未登录时更新本地store库里的数据
    store.dispatch('cart/findCart')
    // handle移除购物车商品
    const removeGoods = (skuId) => {
      store.dispatch('cart/deleteCart', skuId)
    }
    return { list, countGoods, totalPrice, removeGoods }
  }
}
</script>

<style scoped lang='less'>
.cart{
      position: relative;
      margin-left: 10px;
      .iconfont{
        font-size: 25px;
      }
      .cartcount{
        position: absolute;
        top: -5px;
        left: 20px;
        font-size: 12px;
        padding: 2px 7px;
        border-radius: 10px;
        color: #fff;
        background: rgb(251, 45, 45);
      }
      &:hover .cart-panel{
      opacity: 1;
      z-index: 999;
  }
      .cart-panel{
        position: absolute;
        background-color: #fff;
        opacity: 0;
        width: 400px;
        height: 421px;
        left: -360px;
        top: 50px;
        box-shadow: 2px -2px 3px #bdb3b3;
        transform: translate3d(0,0,115px);
        border-radius: 5px;
        z-index:-10;
        transition: all 0.5s;
        &::after{
          content: '';
          display: block;
          position: absolute;
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #fff #fff transparent transparent;
          transform: rotate(-45deg);
          top: -10px;
          right: 15px;
          box-shadow: 2px -2px 3px #bdb3b3;
         }
         ul{
          overflow: auto;
          height: 350px;
          &::-webkit-scrollbar {display: none;}
          li{
            display: flex;
            padding: 5px;
            height: 94px;
            border-bottom: 1px solid #eee9e9;
            .image{
              width: 80px;
              height: 80px;
            }
            .info{
              height: inherit;
              flex: 1;
              padding: 0 10px;
              text-overflow: ellipsis;
              .title{
                padding: 10px 0;
                height: 60px;
                font-size: 17px;
                text-overflow: ellipsis;
              }
              .desc{
                font-size: 12px;
              }
            }
            .price{
              display: flex;
              height: inherit;
              width: 80px;
              flex-direction: column;
              justify-content: space-evenly;
              text-align: center;
            }
            .remove{
              line-height: 90px;
              padding: 0 10px;
              a{
                opacity: 0;
              }
            }
            &:hover{
              a{
              opacity: 1;
            }
            }
          }
          // .remove{
          //   line-height: 90px;
          //   padding: 0 10px;
          //   a{
          //     opacity: 0;
          //     &:hover{
          //       opacity: 1;
          //     }
          //   }
          // }
         }
         .total{
          display: flex;
          height: 71px;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          background-color: #ebe8e8;
          border-radius: 0 0 5px 5px;
          div{
            & p:nth-child(2){
              color: red;
              font-size: 20px;
            }
          }
         }
      }
    }
</style>
