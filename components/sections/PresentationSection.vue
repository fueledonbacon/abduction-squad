<template>
	<section class="w-full bg-black">
		<div class="flex flex-col px-12 pt-12 mx-auto max-w-7xl lg:flex-row space-y-3">
			<div
				class="
					relative
					flex flex-col
					items-center
					justify-center
					flex-shrink-0
					w-full
					max-w-2xl
					pt-16
					mx-auto
					lg:w-1/2 lg:mx-0
					xl:w-5/12
				">
				<img src="@/assets/images/image1.webp" alt="" />
			</div>
			<div
				class="
					relative
					w-full
					p-10
					lg:ml-16
					text-left
					lg:w-1/2
					xl:w-7/12
					lg:mb-0
				">
				<h2 class="text-5xl font-bold sm:text-6xl mt-7 "><BasicsLogo /></h2>
				<p class="text-white lg:max-w-sm mt-9">
					is launching a Genesis Collection of 3,333 randomly-generated 3D aliens on
					the Ethereum blockchain. These characters can be used in our mobile app P2W
					game.
				</p>
          <br>
				<PillButton @click.native="null"> ABDUTION PROTOCOL </PillButton>
			</div>
		</div>
	</section>
</template>
