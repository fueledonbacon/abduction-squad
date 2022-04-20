<template>
	<section class="w-full bg-black" id="prizes">

	<div class="relative w-full max-h-min">

    <video class="md:max-h-192 hidden md:block relative w-full z-10 " style="width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1;" autoplay loop muted >
			 <source src="@/assets/videos/bg-black.mp4" > 
		</video>

    <div class="md:absolute    md:flex-row align-end h-full w-full pt-8 md:pt-12 px-8 m-auto  top-0 left-0 z-30">
        <h3
						class="
							text-4xl
              md:text-6xl
              font-flyingSausage 
							leading-none
							lg:leading-7
							text-center text-yellow
							tracking-[2px]
						">
            TRAIT <span class="text-white font-sans">PRIZES</span>
					</h3>
          <div class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="flex md:flex-row flex-col items-center text-center">
              <img src="@/assets/images/merch/bodyMerch.png" alt="" >
              <div>
                <h4 class="text-yellow 	tracking-[2px] text-2xl font-sans leading-none">AS MERCH:</h4>
                <p>Squad Merch</p>
              </div>
            </div>
            
          </div>


	  </div>

	</div>

	</section>
</template>
