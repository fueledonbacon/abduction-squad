<template>
	<button
		type="button"
		class="
		  rounded-sm
			inline-flex
			items-center

			h-12
			px-8
			text-base
			font-medium
			leading-6
			text-black
			transition
			duration-150
			ease-in-out
			bg-yellow
			border border-transparent
			hover:bg-slate-700
			hover:text-yellow
			focus:outline-none

		">
		<slot />
	</button>
</template>
<script>
export default{
    name: "PillButton"
}
</script>