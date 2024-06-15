<template>
	<div>
  <button @click="changeText()">
    {{ text }}
  </button>
  </div>
</template>
<script>
import { ref } from 'vue'
import onMounted from 'vue'
import router from '@/router'
import { useRouter } from 'vue-router'
import Router from 'vue-router';
export default {
	data(){
		return{
		text:ref('click here')
		}
	},
	methods:{
		changeText(){
			this.text='Nirvana'
		}
	}
}
</script>


