<template>
	<section
		id="home"
		class="
			relative
			pt-8
			md:px-0
			min-h-[56vw]
			sm:h-[56vw]
			bg-[#1f2937]
			mb-[87px]
			sm:mb-0
		">
		<transition name="fade" mode="out-in">		
		
		<div  v-if="timerCount==0"
			class="absolute w-full h-full top-0 bg-slate-800/40 z-10 mt-[87px] sm:mt-0">
			<div

				class="
					flex flex-col
					items-center
					justify-center
					text-center
					min-h-[56vw]
					max-w-6xl
					px-7
					m-auto
				">
				<h1
					class="
						[text-shadow:1px_1px_10px_#121211,_1px_1px_10px_#121211]
						mt-0
						text-center
						tracking-tight
					 text-slate-50 text-xl
						sm:text-3xl
						md:text-6xl
					">
					<span class="block font-[omegleregular] tracking-[2px]"
						>NFT LAUNCHES</span
					>
				</h1>
				<p
					class="
						w-full
						mt-[7px]
						sm:mt-[24px]

						text-center
					text-slate-50
						sm:text-lg
						lg:text-2xl
						md:max-w-3xl
					">
					Start Your Journey Now
				</p>
				<div
					class="
						relative
						flex flex-col
						max-w-[280px]
						md:space-x-4
						mt-[7px]
						sm:mt-[24px] sm:ml-0
					">
					<PillButton @click.native="null"> Mint Now</PillButton>

				</div>
			</div>
		</div>
		</transition>
		<div id="myVideo">
			<video
				autoplay
				muted
				loop
				class="absolute top-0 z-0 w-full h-full mt-[87px] sm:mt-0">
				<source
					src="https://video.wixstatic.com/video/afd815_0b65b2f65cf64429b59b3bc89ce7c6d5/1080p/mp4/file.mp4"
					type="video/MP4" />
			</video>
		</div>
	</section>
</template>

<script>
export default {
	mounted() {
		const interval = setInterval(() => {
			this.now = new Date().getTime()
			if (this.now > this.presaleStartTime) {
				clearInterval(interval)
			}
		}, 1000)
	},
	computed: {
		startMint() {
			console.log()
			return this.now < this.presaleStartTime
		},
	},
	data() {
		return {
			now: new Date().getTime(),

			timerCount: 10
		}
	},
	watch: {
		timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

	}
}
</script>

<style scoped></style>
