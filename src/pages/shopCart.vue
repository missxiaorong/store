<template>
	<div class="shopCart">
		<cart-header></cart-header>
		<cart-list></cart-list>
		<div class="jiesuan">
			<ul class="jiesuan-cont">
			<li class="checkbox"><input type="checkbox" name=""><span>全选</span></li>
			<li class="txt"><p class="sum">合计:</p><p class="prices">￥43</p></li>
			<li class="sum-btn"><p>结算</p></li>
			</ul>
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script type="text/javascript">
	import CartHeader from '../components/CartHeader'
	import CommonFooter from '../components/commonFooter'
	import CartList from '../components/cartList'
	export default{
		components:{
			CartHeader,
			CommonFooter,
			CartList
		}
	}
</script>
<style type="text/css">
	p.sum{
		float: left;
	padding-left: 1rem;
		color: #777;
		font-size: 0.8rem;
	}
	p.prices{
		float: left;
		font-size: 0.9rem;
	}
	.checkbox span{
		margin-left: 0.5rem;
	}
	.checkbox input{
		width: 1rem;
		height: 1rem;
		margin: 0.5rem 1rem;
	}

	.sum-btn p{
		background-color: #FF8300;
		color: #fff;
		font-size: 1rem;
	}
	.jiesuan {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 1.8rem;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .jiesuan-cont li {
    float: left;
  /*  width: 33%;*/
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.4rem;
    color: #ff8000;
    text-align: center;
  }
  li.checkbox{
  	width: 15%;
  	color: #AAA;
  	font-size: 0.8rem;
  }
  li.sum-btn{
  	float: right;
	width: 45%;
	}
  li.txt{
  	padding-left: 1rem;
	width: 30%;
  }
  li img{
    width: 50px;
    height: 50px;
  }
  .jiesuan-cont li:active {
    background-color: #ccc;
  }
  .jiesuan-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>