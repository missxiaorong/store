<template>
	<div class="side" >
		<div class="left">
			<ul>
				<li><img src="../assets/images/tx.png"><span>大青</span></li>
				<li><img src="../assets/images/order.png"><span>最新订单</span></li>
				<li><img src="../assets/images/orders.png"><span>已处理订单</span></li>
				<li><img src="../assets/images/site.png"><span>站点管理</span></li>
				<li><img src="../assets/images/set.png"><span>设置</span></li>				
			</ul>
		</div>
		<div class="right"  @click="back()"></div>
	</div>
</template>


<script>
export default {
	 props: ['state'],
	methods:{
		back() {
			this.$emit('getChild',false)
		}

	}
}
</script>


<style scoped>
	.side{
		position: fixed;
		width: 100%;
		float: left;
		z-index: 999;
		display: flex;
	}
	.hide-class{
		display: none;
	}
	.left{
			width: 60%;
			background-color: #F3F3F3;
	}
	.left li{
		height: 2rem;
		padding-top: 0.5rem;
		border:1px solid #DCDCDC;
	}

	li img{
		margin:0 0 0 1rem;
	}
	li span{
		margin-left: 1rem;
	}
	.left li:nth-child(1){
		padding-top: 1rem;
		height: 3rem;
		padding-bottom: 1rem;
	}
	.left li:nth-child(1) img{
		width: 3rem;
		height: 3rem;
	}

	.right{
		width: 40%;
		height: 45rem;
		background-color: #000 !important;
		 filter: alpha(opacity=40); opacity:0.4; 
	}


</style>