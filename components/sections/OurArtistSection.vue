<template>
<section 	class="bg-fixed bg-cover  relative block    overflow-hidden leading-6 text-left  text-white" id="our-artist"
	style="background-image: url('/bg-image.jpeg')">

		<div class="absolute -z-0 w-full h-full  top-0 bg-black/[.95] min-h-full"
		></div>
    <div class="flex  flex-col  		pt-16 md:relative  md:flex-row align-end h-full w-full px-8 m-auto  top-0 left-0 z-30">
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
			
					mx-auto
          md:mx-2
				">
    <div class="relative w-full min-h-full pb-96  overflow-hidden md:overflow-visible">

  <img class="absolute bottom-0 left-0  md:left-1/2 md:w-96 z-10 w-full" src="@/assets/images/lazer_eyes.png"  />

  <img class="absolute bottom-0 left-16 md:right-0 md:w-96 w-full" src="@/assets/images/drool.png"/>

</div>

			</div>
			<div
				class="
					flex flex-col
					space-y-8
					w-full
					md:max-w-sm
					md:justify-end
					relative
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
				<p class="font-spmono text-white lg: mt-9">
            Video game and VFX veteran Armando "AO"
            DeSoto has worked in the industry for the past 18 years. 
            Along with working with top game studios and VFX houses,
            AO has created assets for companies like Sony, Pixar, and Nickelodeon.
				</p>
				<div class="w-full items-center flex flex-col space-y-4 text-center">
            <a class="text-yellow underline" href="">View Work</a>
            <a class="text-xl" href=""><font-awesome-icon :icon="['fab','twitter']"  /> </a>
				</div>
			</div>
    </div>


	</section>
</template>
