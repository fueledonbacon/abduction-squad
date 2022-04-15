<template>
	<section class="w-full py-16 bg-black lg:py-24">
		<div class="px-12 relative w-full">
			    <video class="hidden md:block relative w-full  z-10 max-h-screen" style="object-position: center center; "  muted autoplay loop>
			 <source src="https://video.wixstatic.com/video/afd815_2188d4ed22b1492a89a8ce93777c9dfb/1080p/mp4/file.mp4" > 
		</video>
        <div class="md:absolute      h-full w-full px-8 m-auto  top-0 left-0 z-30">


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
						class="m-auto"
						src="https://static.wixstatic.com/media/afd815_5874587ce6df4fd7bc738f462c8b633b~mv2.png/v1/fill/w_551,h_114,al_c,usm_0.66_1.00_0.01,enc_auto/Artboard%2010.png" />
					<h3
						class="
							text-xl
							sm:text-3xl
							md:text-[40px]
							sans-serif
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
