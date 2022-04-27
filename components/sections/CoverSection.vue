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

			sm:mb-0
			z-9
		">

		<div>
			<video
				autoplay
				muted
				loop
				class="absolute top-0 z-0 w-full h-full mt-16 sm:mt-0">
				<source
					muted autoplay loop
					src="@/assets/videos/bg-cover.mp4"
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
