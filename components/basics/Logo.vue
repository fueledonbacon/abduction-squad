<template>
  <div class="flex items-baseline justify-center md:justify-start">
    <a href="#home">
			<img
      src="@/assets/images/ASLogoWhite.svg"
      alt=""
      :class="width"
      class=" mr-3"
    />

		</a>
  </div>
</template>

<script>
export default {
  name: 'BasicsLogo',
 props: {
    width: {
      type: String,
      default: 'w-16',
      required: false,
    },
  },
}
</script>

<style scoped>

</style>
