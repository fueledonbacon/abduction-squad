<template>
	<section class="w-full overflow-hidden bg-black hidden md:block" id="prizes">

	<div class="relative w-full max-h-min">

    <video class="md:max-h-192 hidden md:block relative w-full z-10 " style="width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1;" autoplay loop muted >
			 <source src="@/assets/videos/bg-black.mp4" > 
		</video>

    <div class="md:absolute    md:flex-row align-end h-full w-full py-16 md:pt-16 md:pb-0 px-8 m-auto  top-0 left-0 z-30">
        <h3
						class="
              mb-4 sm:mb-0
							text-4xl
              md:text-6xl
              font-flyingSausage 
							leading-none
							lg:leading-7
							text-center text-yellow
							tracking-[2px]
						">
            TRAIT <span class="text-white text-3xl md:text-5xl font-[oswald-medium]">PRIZES</span>
					</h3>
          <div class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 mt-2  md:mt-0 justify-items-center h-[inherit]">
            <div class="alien-obj">
              <img class="md:self-end" src="@/assets/images/merch/bodyMerch.png" alt="" >
              <div>
                <h4 class="tracking-[2px] text-2xl font-sans leading-none">AS MERCH:</h4>
                <p class="font-light text-2xl text-yellow font-[space-mono]"> Squad Merch</p>
              </div>
            </div>
               <div class="alien-obj">
              <img class="md:self-end" src="@/assets/images/merch/bodyEth.png" alt="" >
              <div>
                <h4 class="tracking-[2px] text-2xl font-sans leading-none">ETH EYES:</h4>
                <p class="font-light text-2xl text-yellow font-[space-mono]"> ETH</p>
              </div>
            </div>
               <div class="alien-obj">
              <img class="md:self-end"  src="@/assets/images/merch/bodyVr.png" alt="" >
              <div>
                <h4 class="tracking-[2px] text-2xl font-sans leading-none">VR VISOR:</h4>
                <p class="font-light text-2xl text-yellow font-[space-mono]"> VR Headset</p>
              </div>
            </div>
            
          </div>


	  </div>

	</div>

	</section>
</template>
<style scoped>
.alien-obj{
  @apply flex h-max md:flex-row flex-col items-center text-center self-end
}
</style>
