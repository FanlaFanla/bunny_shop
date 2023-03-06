<template>
  <footer class="app-footer">
    <div class="footer-top">
      <div class="container">
        <div class="serve">
          <h2 class="center">客户服务</h2>
          <div class="row center">
            <a href="" class="iconfont icon-kefu"></a>
            <div>在线客服</div>
          </div>
          <div class="row center">
            <a href="" class="iconfont icon-question"></a>
            <div>问题反馈</div>
          </div>
        </div>
        <div class="serve">
          <h2 class="center">关注我们</h2>
          <div class="row center">
            <a href="" class="iconfont icon-weixin"></a>
            <div>公众号</div>
          </div>
          <div class="row center">
            <a href="" class="iconfont icon-weibo"></a>
            <div>微博</div>
          </div>
        </div>
        <div class="serve">
          <h2 class="center">下载APP</h2>
          <div class="row center">
            <a href="" class="iconfont icon-kefu"></a>
            <div>二维码</div>
          </div>
          <div class="row center download">
            <p>扫描二维码</p>
            <p>立马下载APP</p>
            <div>下载页面</div>
          </div>
        </div>
        <div class="serve">
          <h2 class="center">服务热线</h2>
          <div class="row center callservice">
            <h3>400-0000-000</h3>
            <p>周一至周日12:00-15:00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="quality">
          <div>
            <em class="iconfont icon-footer01"></em>
            <span>价格亲民</span>
          </div>
          <div>
            <em class="iconfont icon-footer02"></em>
            <span>物流快捷</span>
          </div>
          <div>
            <em class="iconfont icon-footer03"></em>
            <span>品质新鲜</span>
          </div>
        </div>
        <div class="business">
          <ul class="list">
            <li><a href="#">关于我们</a></li>
            <li><a href="#">帮助中心</a></li>
            <li><a href="#">售后服务</a></li>
            <li><a href="#">配送与验收</a></li>
            <li><a href="#">商务合作</a></li>
            <li><a href="#">搜索推荐</a></li>
            <li><a href="#">友情链接</a></li>
          </ul>
          <div class="copyright">CopyRight© 兔兔</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="less">

.footer-top{
  height: 210px;
  background: #fff;
  .container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    .serve:nth-child(n+2){
      border-left: 1px solid #e4e4e4;
      padding-left: 65px;
    }
    .serve>div{
      width: 92px;
      height: 92px;
      overflow: hidden;
      margin-right: 10px;
      border: 1px solid #efeeee;
      box-shadow: 0 0 1px #cac8c8;
      .iconfont{
        font-size: 56px;
        color: #5c5959;
      }
      .iconfont:hover{
        color: @xtxColor;
      }
    }
    .serve .download{
      font-size: 12px;
      border: none;
      padding-top: 15px;
      p{
        width: 100%;
      }
      div{
        height: 30px;
        margin-top: 15px;
        line-height: 30px;
        color: #fff;
        background: @xtxColor;
      }
    }
    .serve .callservice{
      width: 100%;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
.footer-bottom{
  height: 180px;
  color: #fff;
  background: #343434;
  .quality{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 88px;
    border-bottom: 1px solid #494848;
    margin-bottom: 20px;
    font-size: 28px;
    .iconfont{
      font-size: 28px;
      margin-right: 10px;
    }
  }
  .business{
    text-align: center;
    a{
      color: #fff;
    }
    ul{
      display: flex;
      justify-content: center;
      li{
        padding: 0 15px;
      }
      li:not(:first-child){
        border-left: 1px solid #666;
      }
    }
    .copyright{
      margin-top: 15px;
    }
  }
}
.row{
  display: inline-block;
}
.center{
  text-align: center;
}
</style>
