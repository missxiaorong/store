<template>
	<div>
	<address-header></address-header>
		<ul class="address-list">
			<li class="address-detail">
				<input type="radio" name="">
				<p>
				<span>张倩青</span>
				<span>17165245678</span>
				<pre class="juti">中南大学</pre>
				</p>
	
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import AddressHeader from '../components/addressHeader'
	export default{
		components:{
			AddressHeader
		}
	}
</script>
<style type="text/css">
.address-list li{
	height: 2rem;
	border-bottom: 2px solid #ccc;
}
.address-detail input{
	height: 0.8rem;
	width: 0.8rem;
	margin: 0.1rem 0.5rem 0 0.5rem;
}
.address-detail{
	margin-top: 1rem;
	font-size: 0.7rem;
	display: flex;
}
.address-detail span{
	margin-right:1rem;
	color:black;
}
.juti{
	color: #ccc;
}
</style>