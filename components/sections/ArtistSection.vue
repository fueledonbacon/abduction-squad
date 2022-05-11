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
		style="background-image: url('/bg-image.jpeg')">
		<div
			class="
				bg-black/[0.95]
				w-full
				mx-auto
				space-y-12
				md:py-20
				pb-12
				md:px-16
				sm:px-12
				xl:px-12
				flex flex-row
				leading-6
				text-left
			">
			<div class="w-full px-4 text-center font-spmono space-y-10">
				<div class="flex flex-row justify-center space-x-4 text-2xl list-none mt-12">
					<li class="list-none">
						<a href="https://discord.com/invite/abductionsquad" target="_blank">
							<font-awesome-icon :icon="['fab', 'discord']" />
						</a>
					</li>
					<li class="list-none">
						<a href="https://twitter.com/AbductionSquad" target="_blank">
							<font-awesome-icon :icon="['fab', 'twitter']" />
						</a>
					</li>
				</div>
				<div
					class="
						md:w-1/2
						mx-auto
						box-border
						text-white
						font-spmono
						tracking-normal
						text-center
						md:text-lg
						text-[14px]
						leading-4
						lg:mt-9
					">
					<p class="px-1">
						Our primary focus is a play-to-win style game with out-of-this-world
						prizes. Holders of our NFT will get the chance to unlock buffs for their
						in-game character, these buffs will strengthen their odds in the play to
						win competition.
						<br />
						<br />
						In addition to Abduction Squad holders having a dope, high-resolution PFP,
						holders will also receive rewards depending on the traits they acquire.
					</p>
					<br />
				</div>

				<span class="text-yellow my-2 text-[14px] md:text-xs">
					Intergalactic Community, Extrasensory Art.
				</span>

				<div class="overflow-hidden w-full md:w-1/2 mx-auto">
					<iframe
						src="https://www.youtube.com/embed/VtIG7YqfoAQ"
						frameborder="0"
						allowfullscreen
						class="top-0 left-0 w-full border-0 aspect-video"></iframe>
				</div>
			</div>
		</div>
	</section>
</template>
