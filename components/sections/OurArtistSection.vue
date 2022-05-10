<template>
	<section
		class="
			bg-fixed bg-cover
			relative
			block
			overflow-hidden
			leading-6
			text-left text-white
		"
		id="our-artist"
		style="background-image: url('/bg-image.jpeg')">
		<div
			class="absolute -z-0 w-full h-full top-0 bg-black/[.95] min-h-full"></div>
		<div
			class="
				max-w-5xl
				grid grid-rows-2
				md:grid-rows-1 md:grid-cols-2
				pt-16
				md:relative
				align-end
				h-full
				w-full
				md:px-8
				m-auto
				top-0
				left-0
				z-30
			">
			<!-- alien images -->
			<div
				class="
					md:relative
					items-center
					flex-shrink-0
					mx-auto
					md:mx-2
				">
				<div
					class="
						relative
						min-h-full
						h-[400px] w-96
						overflow-hidden
						md:overflow-visible
					">
					<img
						class="absolute bottom-0
						left-28 md:w-96
						z-10 w-10/12"
						src="@/assets/images/lazer_eyes.png" />

					<img
						class="absolute bottom-0 md:w-96 w-10/12"
						src="@/assets/images/drool.png" />
				</div>
			</div>
			<!-- artist copy -->
			<div
				class="
					space-y-8
					px-8
					w-full
					max-w-md
					md:px-0
					self-center
					align-center
					place-self-center
					justify-center
					items-center
					lg:-ml-16
					text-center
					relative
					z-20
				">
				<h2
					class="
						text-4xl
						text-center
						font-[oswald-medium]
						sm:text-5xl
						mt-7
					">
					MEET OUR ARTIST
				</h2>
				<p
					class="
						text-white
						font-spmono
						tracking-normal
						text-center
						md:text-lg
						text-[14px]
						leading-4
						lg:mt-9
					">
					Video game and VFX veteran Armando "AO" DeSoto has worked in the industry
					for the past 18 years. Along with working with top game studios and VFX
					houses, AO has created assets for companies like Sony, Pixar, and
					Nickelodeon.
				</p>
				<div
					class="w-full items-center flex flex-col space-y-4 text-center">
					<a
						class="text-yellow underline"
						target="_blank"
						href="https://sotosan.artstation.com/"
						>view work</a
					>
					<a class="text-xl" href="https://twitter.com/Zoto3D"
						><font-awesome-icon :icon="['fab', 'twitter']" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
