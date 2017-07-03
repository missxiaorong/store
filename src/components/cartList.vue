<template>
	
	<div class="cart-content">
			<ul class="list">
				<li class="flex-box">
					<input type="checkbox" name="">
					<img src="../assets/images/5.jpg">
					<div class="explain">
						<p class="text">全網銷售冠軍，讓用戶選擇，景田飲用水</p>
						<p class="price">￥29.9</p>
						<p class="num">x 7</p>
					</div>
				</li>
			</ul>
		</div>
</template>

<style>
		.list{

	}
	.box{
		width: 15%;
	}
	.flex-box{
		display: flex;
	}
	.list li{
		height: 5rem;
		background-color: #F7F7F7;
		/*padding-left: 0.5rem;*/
	}
	.list li input{
		float: left;
		width: 1rem;
		height: 1rem;
		margin:auto 1rem;
	}
	.list img{
		float: left;
		width: 35%;
		height: 4rem;
		margin-top: 0.5rem;

	}
	.explain{
		padding-top: 0.5rem;
		margin-left: 1rem;
		width: 50%;
		font-size: 0.6rem;
		float: left;
	}
	p.price{
		float: left;
	}
	p.num{
		float: left;
		/*margin-right: 0.5rem;*/
	}
</style>