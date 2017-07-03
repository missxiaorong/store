<template>
	<div class="orders-list">
	<span>订单详情列表</span>
		<ul class="order-detail">
			<li>德芙巧克力</li>
			<li>x7</li>
			<li>￥45</li>
		</ul>
	</div>
</template>

<style type="text/css">
	.orders-list span{
		padding-left: 0.5rem;
	}
	.order-detail{
		margin: 0.5rem 0;
		background-color: #fff;
		display: flex;
	}
	.order-detail li{
		width: 100%;
		height: 2rem;
		padding-top: 0.6rem;
		border-bottom: 3px solid  #F3F3F3;

	}
	.order-detail li:nth-child(1){
		padding-left: 0.5rem;
	} 
	.order-detail li:nth-child(2){
		padding-left: 4rem;
	} 
	.order-detail li:nth-child(3){
		color: #ff8000;
	} 
</style>