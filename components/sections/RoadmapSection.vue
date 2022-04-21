<template>
	<section class="w-full py-16 bg-black lg:py-24" id="roadmap-section">
		<div class="px-12 relative w-full">
    <video class="md:max-h-192 hidden md:block relative w-full z-10" autoplay loop muted >
			 <source src="@/assets/videos/bg-black.mp4" > 
		</video>
      <div class="md:absolute      h-full w-full  m-auto  top-0 left-0 z-30">
				<div
					class="
						mb-20
						space-y-5
						sm:mx-auto sm:max-w-xl
						md:max-w-2xl
						sm:space-y-4
						lg:max-w-5xl
					">
					<img
						class="m-auto max-w-xl"
						src="@/assets/images/spacemap.svg" />
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
			

              <BasicsTimeline :timeline-items="timelineItems"/>
				</div>
			</div>

	</section>
</template>
<script>



import timelineItems from '@/assets/json/timeline.json'
export default {
  data() {
    return {
      timelineItems: timelineItems
    }
  },
  computed: {
    
  },
}
</script>

<style scoped></style>
