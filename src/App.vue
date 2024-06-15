<template>
	<div id="app" style="">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {
		},
		created() {
		}

	}
</script>

<style>
	#app {
		margin:auto;
		border-radius: 15px;
		border: 7px solid black;
		height:1440px;
		width:810px;
	}
</style>