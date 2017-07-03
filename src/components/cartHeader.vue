<template lang="html">
  <div class="cart-head">
    <div class="cart-header">
      <a href="javascript:;" class="go-back" @click="goBack">返回</a>
      <span class="header-cont">购物车</span>
      <span class="edit" @click="edit">編輯</span>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goBack () {
      window.history.back()
    }
  }
}
</script>

<style lang="css" scoped>
  .cart-head{
    height: 2rem;
  }
  .cart-header{
    width: 100%;
    height: 2rem;
    position: fixed;
    left: 0;
    top: 0;
	background-color: #fff;
    border-bottom: 2px solid #ccc;
  }
  .cart-header .go-back {
    width: 2rem;
    height: 2rem;
    color: #ccc;
    font-size: 0.8rem;
    float: left;
    line-height: 2rem;
    margin-left: 0.5rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .cart-header .header-cont {
    width: 100%;
    margin-left: 5.5rem;
    line-height: 2rem;
    font-size: 0.8rem;
  }
  .edit{
  	float: right;
  	margin:0.6rem 1rem;
  	font-size: 0.7rem;
  }

</style>
