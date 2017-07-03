<template lang="html">
  <li class="goods-list">
    <router-link to="/detail"  class="goods-list-link">
      <div class="goods-list-pic">
        <img :src="img" alt="">
      </div>
      <div class="goods-list-desc">
          <p class="goods-list-name">{{ title }}</p>
          <p class="goods-list-price">￥{{ price }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>

export default {
  props: ['price', 'title', 'img']
}
</script>

<style lang="css" scoped>
  .goods-list {
    width: 100%;
    height: 5rem;
    background-color: #fff;
  /*  box-sizing: border-box;*/
    margin-top: 0.2rem;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap 
  }
  /*.goods-list:nth-of-type(odd) {
    border-right: 0.15rem solid #ccc;
  }
  .goods-list:nth-of-type(even) {
    border-left: 0.15rem solid #ccc;
  }*/
  .goods-list-link {
    display: block;
    padding: 0.2rem 0;
    margin: 0 0.2rem;
   /* text-align: center;*/
    background-color: #fff;
  }
  .goods-list:nth-of-type(even) .goods-list-link{
    margin-left: 0;
  }
  .goods-list:nth-of-type(odd) .goods-list-link{
    margin-right: 0;
  }
  .goods-list-pic {
       width: 30%;
    padding: 0.5rem;
  }
  .goods-list-pic > img {
    width: auto;
    height: 4rem;
    float: left;

  }
  .goods-list-desc {

     margin-left: 2rem;
    padding: 0 3rem;
  }
  .goods-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .goods-list-name {
   /* width: 50%;*/
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    display: block;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-list-price {
    color: #ff8000;
    display: block;

  }
</style>
