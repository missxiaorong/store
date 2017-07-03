<template lang="html">
  <div class="footer">
    <ul class="footer-cont">
     <router-link to="/"  class="goods-list-link">
      <li><img src="../assets/images/home.png"></li>
    </router-link>
    <router-link to="/cart">
    <li><img src="../assets/images/cart.png"></li>
    </router-link>
    <router-link to="/myCenter">
    <li><img src="../assets/images/person.png"></li>
    </router-link>
  </ul>
</div>
</template>

<script>
  export default {
  }
</script>

<style lang="css">
  .footer {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .footer-cont li {
    float: left;
    width: 33%;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.4rem;
    color: #ff8000;
    text-align: center;
  }
  li img{
    width: 50px;
    height: 50px;
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
