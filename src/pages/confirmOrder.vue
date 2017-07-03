<template>
	<div class="confirm-order">
		<router-link to='/addressList'>
		<div class="order-address">
			<img src="../assets/images/address.png">
			<div>
				<p><span>张倩青</span><span>1817527238</span></p>
				<p>湖南省长沙市天心区铁道学院</p>
			</div>
		
			<img class="right" src="../assets/images/right.png">
		</div></router-link>
		<order-list></order-list>
		<div class="style">
		<p>付款方式</p>
			<ul class="pay-style">
			<li>微信支付</li>
			<li>货到付款</li>
			</ul>
		</div>
		<div class="order-button">
			<ul class="button-box">
			<li>总价：￥29</li>
			<li>提交订单</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	import OrderList from '../components/orderList'
	export default{
		components:{
			OrderList
		}
	}
</script>
<style type="text/css">
	.confirm-order{
		font-size: 0.7rem;
		background-color: #F3F3F3;
	}
	.order-address{
		color: black;
		height: 2rem;
		padding: 1rem 0.5rem;
		margin-bottom: 0.5rem;
		display: flex;
		background-color: #fff;
	}
	.order-address img{
		width: 1rem;
		height: 1rem;
		padding:0 0.5rem;
	}
	.right{
		margin-left: 1rem;
	}
	.style p{
		padding-left: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.pay-style{
		background-color: #fff;
	}
	.pay-style li{
		height: 1.5rem;
		padding-left: 0.5rem;
		padding-top: 0.5rem;
		border-bottom: 2px solid #ccc;
	}
	.order-button{
		height: 1.8rem;
		width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;

 
	}
	.button-box{
		  width: 100%;
		  display: flex;
		  height: 1.8rem;
		  color: #fff;
		  text-align: center;
	}
	.button-box li{
		padding-top: 0.5rem;
	}
	.button-box li:nth-child(1){
		width: 50%;
		background-color: black;
	} 
	.button-box li:nth-child(2){
			width: 50%;
		background-color:  #ff8000;
	} 
</style>