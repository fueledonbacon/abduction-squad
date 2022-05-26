<template>
	<section class="relative bg-black" id="game-section">
		<!-- <h2 class="mb-2 flex justify-center">
			TODO: change this to the right title when available
			<img
				data-aos="fade-down"
				class="h-16"
				src="@/assets/images/image1.webp"
				alt="FAQ" />
				 
		</h2> -->

		<div class="md:relative    md:flex-row align-end h-full w-full py-16 md:pt-16 md:pb-0 px-8 m-auto  top-0 left-0 z-30">
				
					<h3
						class="
              				mb-10 sm:mb-0
							py-3
							text-4xl
              				md:text-6xl
              				font-flyingSausage 
							leading-none
							lg:leading-7
							text-center text-yellow
							tracking-[2px]
						">
            Play <span class="text-white text-3xl md:text-5xl font-[oswald-medium]">ALPHA</span>
					</h3>
				
		</div>

		<div class="flex flex-col items-center mx-auto md:w-[960px]">
			<div class="w-full md:w-[960px] md:h-[600px] relative block">
				<canvas
					ref="unity"
					class="
						w-full
						md:w-[960px] md:h-[600px]
						text-yellow
						bg-[url(/Build/webgl.jpg)] bg-cover bg-center
					"></canvas>
				<div
					v-if="showLoadingBar"
					class="
						absolute
						top-[50%]
						left-[50%]
						transform
						translate-x-[-50%] translate-y-[-50%]
						w-[300px]
					">
					<div class="w-full">
						<div
							id="unity-progress-bar-full"
							class="h-8 bg-yellow"
							:style="{ width: progressBarPercent }"></div>
					</div>
				</div>
			</div>			
			
			
			<div class="w-full block">
				<!-- hidden sm:block"> -->
				<img
					src="~/assets/images/fullscreen-button.png"
					class="ml-auto h-16 w-16 cursor-pointer"
					@click="setFullscreen" />
			</div>


			<!-- SMALL MODE ONLY -->
			<div class="text-sm font-spmono font-regular text-white leading-6 md:hidden p-4 rounded-md block sm:hidden">
				Landing on your favorite app store soon!
			</div>

			<!-- Controls -->
			<div class="text-sm font-spmono leading-6 p-4 rounded-md hidden sm:block">
				<ul>
				<li>A / D Movement</li>
				<li>Space Jump</li>
				<li>E Interact</li>
				<li>Click Attack</li>
				<li>Q Roll</li>
				</ul>
			</div>



		</div>



	</section>
</template>

<script>
export default {
	data() {
		return {
			showLoadingBar: true,
			canvasWidth: 960,
			canvasHeight: 600,
			progressBarPercent: '0%',
			unityInstance: {},
		}
	},
	mounted() {
		// Shows a temporary message banner/ribbon for a few seconds, or
		// a permanent error message on top of the canvas if type=='error'.
		// If type=='warning', a yellow highlight color is used.
		// Modify or remove this function to customize the visually presented
		// way that non-critical warnings and error messages are presented to the
		// user.

		var config = {
			dataUrl: '/Build/webgl.data.gz',
			frameworkUrl: '/Build/webgl.framework.js.gz',
			codeUrl: '/Build/webgl.wasm.gz',
			streamingAssetsUrl: '/StreamingAssets',
			companyName: 'Fueled on Bacon',
			productName: 'Abduction Squad Catalyst',
			productVersion: '0.1.3',
			showBanner: this.unityShowBanner,
			showLoadingBar: true,
		}

		// By default Unity keeps WebGL canvas render target size matched with
		// the DOM size of the canvas element (scaled by window.devicePixelRatio)
		// Set this to false if you want to decouple this synchronization from
		// happening inside the engine, and you would instead like to size up
		// the canvas DOM size and WebGL render target sizes yourself.
		// config.matchWebGLToCanvasSize = false;

		if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
			// Mobile device style: fill the whole browser client area with the game canvas:
			// To lower canvas resolution on mobile devices to gain some
			// performance, uncomment the following line:
			// config.devicePixelRatio = 1
		} else {
			// Desktop style: Render the game canvas in a window that can be maximized to fullscreen:
		}


			// run after everything is in-place
			console.log('magic');
			try {
				window
					.createUnityInstance(this.$refs.unity, config, (progress) => {
						if (progress > 0.98) {
							this.showLoadingBar = false
						}
						this.progressBarPercent = 100 * progress + '%'
					})
					.then((unityInstance) => {
						this.showLoadingBar = false
						this.unityInstance = unityInstance
					})
					.catch((message) => {
						alert(message)
					})
			} catch (err) {
				console.log(err)
			}

	},
	methods: {
		setFullscreen() {
			this.unityInstance.SetFullscreen(1)
		},
	},
}
</script>
