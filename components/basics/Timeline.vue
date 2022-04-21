<template>
	<div class="flex flex-wrap flex-col sm:flex-row md:w-4/5 mx-auto item space-y-5 justify-center">

    <div
			class=" flex flex-col space-y-6 text-center  md:my-10 lg:mx-12 md:mx-12 items-center content-center aling-end"
			v-for="item in timelineItems"
			:key="item.key">
			<h5
				 class="font-flyingSausage w-2/12 sm:flex  text-yellow text-8xl">
				{{ item.title }}
			</h5>
      <h3  style="font-family:'space-mono'" class="text-white whitespace-pre">{{item.texts}}
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
