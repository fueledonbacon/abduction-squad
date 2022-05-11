<template>
	<div
		class="
			flex flex-wrap flex-col
			sm:flex-row
			md:w-4/5
			mx-auto
			item
			justify-center
			items-center
		">
		<div
			v-for="item in timelineItems"
			:key="item.key"
			class="
				justify
				flex flex-col
				text-center
				mt-12
				mx-4
				w-36
				lg:mx-12
				md:mx-12
				items-center
				content-center
				aling-end
			">
			
			<h5 class="font-flyingSausage sm:flex text-yellow text-8xl">
				{{ item.title }}
			</h5>
			<h3 class="text-white whitespace-pre text-sm leading-6 font-spmono">
				{{ item.texts }}
			</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TimelineComponent',
	props: {
		timelineItems: {
			type: Array,
			default: () => [],
		},
	},
	computed: {},
}
</script>

<style></style>
