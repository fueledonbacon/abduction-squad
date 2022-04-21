<template>
<section class="w-full bg-black max-h-fit" id="our-artist">
	<div class="relative w-full">
    <video class="md:max-h-192 hidden md:block relative w-full z-10 " style="width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1;" autoplay loop muted >
			 <source src="@/assets/videos/bg-black.mp4" > 
		</video>
    <div class="flex  flex-col  md:absolute     md:flex-row align-end h-full w-full px-8 m-auto  top-0 left-0 z-30">
      <div
				class="
					md:relative
					flex flex-col
					items-center
					justify-end
					flex-shrink-0
					w-full
					md:w-1/2
					max-w-1/2
					pt-16
					mx-auto
          md:mx-2
				">
    <div class="relative w-full min-h-full pb-96  overflow-hidden md:overflow-visible">

  <img class="absolute bottom-0 left-0  md:left-1/2 md:w-2/3 z-10 w-full" src="@/assets/images/lazer_eyes.png"  />

  <img class="absolute bottom-0 left-16 md:left-20 md:w-2/3 w-full" src="@/assets/images/drool.png"/>

</div>

			</div>
			<div
				class="
					flex flex-col
					space-y-8
					w-full
					md:w-2/5
					pb-10
					justify-center
					items-center
					lg:ml-8
					lg:mb-0
          text-center
				">
				<h2 class="text-4xl font-[oswald-medium] sm:text-5xl mt-7 ">
          MEET OUR ARTIST
        </h2>
				<p class="font-spmono text-white lg:max-w-sm mt-9">
            Video game and VFX veteran Armando "AO"
            DeSoto has worked in the industry for the past 18 years. 
            Along with working with top game studios and VFX houses,
            AO has created assets for companies like Sony, Pixar, and Nickelodeon.
				</p>
				<div class="w-2/3 flex flex-col space-y-4 text-center">
            <a class="text-yellow underline" href="">View Work</a>
            <a href=""><font-awesome-icon :icon="['fab','twitter']"  /> </a>
				</div>
			</div>
    </div>
	</div>

	</section>
</template>
