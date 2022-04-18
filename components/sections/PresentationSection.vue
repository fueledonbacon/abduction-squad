<template>
	<section class="w-full bg-black">
	<div class="relative w-full max-h-min">
    <video class="md:max-h-192 hidden md:block relative w-full z-10 " style="width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1;" autoplay loop muted >
			 <source src="https://video.wixstatic.com/video/afd815_2188d4ed22b1492a89a8ce93777c9dfb/1080p/mp4/file.mp4" > 
		</video>

    <div class="flex  flex-col-reverse md:absolute     md:flex-row align-end h-full w-full px-8 m-auto  top-0 left-0 z-30">
        		<div
				class="
					md:relative
					flex flex-col
					items-center
					justify-end
					flex-shrink-0
					w-full
					md:w-3/5

					max-w-1/2
					pt-16
					mx-auto
				">
				<img class="w-xl md:w-2xl " src="@/assets/images/image1.webp" alt="" />
			</div>
			<div
				class="
					flex flex-col
					space-y-8
					w-full
					md:w-2/5
					py-10
					justify-center
					items-center
					lg:ml-16
					lg:mb-0
					md:text-left
					md:items-start 
					font-spmono
				">
				<h2 class=" text-5xl font-bold sm:text-6xl mt-7 "><BasicsLogo width="w-48 " /></h2>
				<p class="text-white lg:max-w-sm mt-9">
					is launching a Genesis Collection of 3,333 randomly-generated 3D aliens on
					the Ethereum blockchain. These characters can be used in our mobile app P2W
					game.
				</p>

				<div class="w-full text-center md:text-left">
					<PillButton @click.native="null" class="font-semibold"> ABDUCTION PROTOCOL </PillButton>
				</div>
			</div>
    </div>
	</div>

	</section>
</template>
