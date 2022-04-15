<template>
	<div class="grid  gap-5 gap-y-40 grid-flow-row md:grid-cols-4 grid-rows-2">

    <div
			class=" flex flex-col space-y-6 text-center lg:mx-4 md:ml-16 items-center"
			v-for="item in timelineItems"
			:key="item.key">
			<h5
				style="font-family:'origflyingsausage'" class="w-2/12 sm:flex  text-yellow text-7xl">
				{{ item.title }}
			</h5>
      <h3  style="font-family:'space-mono'" class="text-white whitespace-pre">
        {{item.texts}}
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
