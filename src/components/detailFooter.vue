<template>
	  <div class="footer">
        <ul class="footer-cont icon">
         <router-link to="/"  class="goods-list-link">
          <li><img src="../assets/images/home.png"></li>
        </router-link>  
            <li><img src="../assets/images/cart.png"></li>
      </ul>
      <ul class="footer-cont btn">
       <li @click="addCart"><p class="cart">加入购物车</p></li>
       <router-link to="/confirmOrder" >
         <li><p class="buy">立即购买</p></li>
       </router-link>
     </ul>
   </div>
</template>

<style type="text/css">
	  .footer {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
    display: flex;
  }
  .icon{
    float: left;
    width: 40%;
  }
  .icon li{
    width: 50% !important;
  }
  .btn{
   float: right;
    width: 60%; 
  }
  .btn li{
width: 50% !important;
  }
  
  .footer-cont li {
    float: left;
/*    width: 33%;*/
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.7rem !important;
    color: #fff !important;
    text-align: center;
  }
  li img{
    width: 50px;
    height: 50px;
  }   
  p.cart{
    background-color: #FF7101;
  }   
  p.buy{
    background-color: #FF2829;
  }
  .footer-cont li:active {
    background-color: #ccc;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>