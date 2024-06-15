<template>
	<div>
		<span v-html="text"></span>
	</div>
</template>
<script>
	import {ref} from 'vue'
	export default{
		name:"login",
		data(){
			return {
				text:"welcome"
			}
		}
	}
</script>
<style scoped>
	
</style>

	