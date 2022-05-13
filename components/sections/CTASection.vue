<template>
	<section class="h-fit cta">
		<video
			autoplay
			muted
			loop
			class="w-full fixed top-0 -z-50 h-full object-cover"
			src="@/assets/videos/bg-cta.mp4"></video>
		<div
			class="max-w-4xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div class="flex flex-col justify-center space-y-5 text-center">
				<h2
					class="
						text-3xl
						font-extrabold
						tracking-tight
						text-gray-900
						sm:text-4xl
						font-[oswald-medium]
					">

		<span class="block text-white">MINT DATE TBA</span>

				</h2>
				<!--<BasicsCountdown end="1652331600000" /> -->
				<p
					class="
						text-white
						font-spmono
						tracking-normal
						text-center
						md:text-lgtext-[14px]
						leading-4
					">
					Join our Discord where we host games and trivia, share alpha, and secure
					your spot on our whitelist.
				</p>

				<div class="">
					<PillButton @click.native="goDiscord">
						JOIN THE COMUNITY &nbsp;<font-awesome-icon
							:icon="['fas', 'chevron-right']"
					/></PillButton>
				</div>
				<div class="text-2xl grid grid-flow-col space-x-4 justify-center">
					<a
						class="hover:text-yellow"
						target="_black"
						href="https://twitter.com/AbductionSquad"
						><font-awesome-icon :icon="['fab', 'twitter']" />
					</a>
					<a
						class="hover:text-yellow"
						target="_black"
						href="https://www.instagram.com/abductionsquad/"
						><font-awesome-icon :icon="['fab', 'instagram']" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			url: 'https://discord.com/invite/abductionsquad',
		}
	},
	methods: {
		goDiscord() {
			window.open(this.url, '_blank').focus()
		},
	},
}
</script>
<style scoped></style>
