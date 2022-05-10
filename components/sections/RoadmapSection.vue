<template>
	<section class="w-full bg-black" id="roadmap-section">
		<div class="relative w-full">
			<video
				class="md:max-h-max h-max hidden md:block absolute w-full z-10"
				style="
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center center;
					opacity: 1;
				"
				autoplay
				loop
				muted>
				<source src="@/assets/videos/bg-black.mp4" />
			</video>
			<div
				class="
					py-16
					md:relative
					z-10
					top-0
					left-0
					md:flex-row
					h-full
					w-full
					m-auto
				">
				<div
					class="
						mb-16
						space-y-5
						sm:mx-auto sm:max-w-xl
						md:max-w-2xl
						sm:space-y-4
						lg:max-w-5xl
					">
					<img class="max-w-xl m-auto w-10/12" src="@/assets/images/spacemap.svg" />
					<h3
						class="
							text-xl
							sm:text-3xl
							md:text-[40px]
							font-[oswald-medium]
							leading-none
							lg:leading-7
							text-center text-white
							tracking-[2px]
						">
						ROADMAP 1.0
					</h3>
				</div>

				<BasicsTimeline :timeline-items="timelineItems" />
			</div>
		</div>
	</section>
</template>
<script>
import timelineItems from '@/assets/json/timeline.json'
export default {
	data() {
		return {
			timelineItems: timelineItems,
		}
	},
	computed: {},
}
</script>

<style scoped></style>
