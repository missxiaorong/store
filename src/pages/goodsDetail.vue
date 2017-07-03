<template lang="html">
  <div class="detail">
      <detail-header></detail-header>
      <img src="../assets/images/detail.jpg" alt="" />
      <p class="site-title">好丽友派</p>
      <P class="site-price">￥16.70</P>
      <p class="site-cont">月销售：1000笔</p>
      <div class="goods-detail">
         <img src="../assets/images/details.jpg">
        <img src="../assets/images/details_1.jpg">
      </div>
      <detail-footer></detail-footer>
      <div class="show">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import CommonFooter from '../components/commonFooter'
import DetailFooter from '../components/detailFooter'
export default {
  data () {
    return {

    }
  },
  components: {
    DetailHeader,
    CommonFooter,
    DetailFooter
  },
  methods:{
    addCart(){

    }
  }
}
</script>

<style>
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 100%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1rem;
    line-height: 1.5rem;
    
    margin-left: 0.5rem;
    padding-bottom: 0.1rem;
  }
  .detail > p.site-title {
  /*  color: #ff8000;*/
    color: #666;
  }
  p.site-price{
       color: #ff8000;
  }
  p.site-cont {
    color: #669;
     margin-left: 0.5rem;
    font-size: 0.6rem;
  }
  div.show{
    color: #f00;
    font-size: 0.9rem;
  }
  .goods-detail img{
    width: 95%;
    padding: 0.5rem;
  }


</style>
