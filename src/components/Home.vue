<template>
	<div>
		<el-container>
			<el-header>Header</el-header>
			<el-main>
			<login>
			</login></el-main>
			<el-footer>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import login from '@/components/Login'
	export default {
		components:{
		login
		},
		data() {
			return {
				text: 'home'
			}
		},
		methods:{
			skip(){
				this.$router.push("login")
			}
		}
	}
</script>

<style>
	*{
		font-size: 2vh;
	}
	.el-footer {
	    background-color: aliceblue;
	    color: black;
	    text-align: center;
		align-items: center;
	    height:5%;
		display:flex;
		flex-direction: row;
	  }
	   .el-main {
	      background-color: white;
	      color: #333;
	      text-align: center;
	      height:90%;
	    }
</style>