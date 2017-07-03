<template>
  <div class="contain">
    <center-header></center-header>
    <div class="con">
      <ul class="home-list">
        <li class="myorder"><div><img src="../assets/images/order.png"><span>我的订单</span></div>
        <ul class="order-list">
        <li><img src="../assets/images/pay.png"><span>待付款</span></li>
          <li><img src="../assets/images/fahuo.png"><span>代发货</span></li>
            <li><img src="../assets/images/shouhuo.png"><span>待收货</span></li>
              <li><img src="../assets/images/commit.png"><span>待评价</span></li>
        </ul>
        </li>
        <li><img src="../assets/images/address.png"><span>我的地址</span></li>
        <li><img src="../assets/images/jifen.png"><span>我的积分</span></li>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CenterHeader from '../components/centerHeader'
  import CommonFooter from '../components/commonFooter'
  export default {
    components: {
      CenterHeader,
      CommonFooter
    },

  }
</script>

<style  type="text/css">
  .contain{
    width: 100%;
     background-color: #F4F4F4;
  }

  .home-list li{
    height: 2rem;
    background-color: #fff;
    margin-top: 0.5rem;
    padding-left: 0.3rem;
    padding-top: 0.5rem;
  }
  li.myorder{
    height: 3rem;
  }
  .home-list span{
    padding-left: 1rem;
  }
  .order-list{
    height: 1.5rem;
    display: flex;
    font-size: 0.6rem;
    padding-left: 0.5rem;
    padding-top: 0.3rem;
    border-top: 10px solid  #F3F3F3;
    border-bottom: 10px solid  #F3F3F3;
  }
  
   ul.order-list li{
  /*  background-color: #fff;*/
  padding: 0 0.7rem 0 0;
  margin:0;
  height: 1rem;
  }
   .order-list span{
    padding-left: 0.2rem;
  }
</style>
