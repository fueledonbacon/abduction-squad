<template>
	<button  @click="callback($event)"
		type="button"
		class="btn">
		<span>	<slot /></span>
	</button>
</template>

<style scoped>
.btn {
	@apply 
				font-poppins
				text-black
				bg-yellow hover:bg-black hover:text-yellow
				border border-transparent rounded-sm 
				inline-flex items-center h-12 px-8
				transition duration-150 ease-in-out
				focus:outline-none 
				



}

</style>
<script>
export default{
    name: "PillButton",
	methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
	}
}
</script>