<template>
	<section class="w-full bg-black" id="presentation">

	<div class="relative w-full max-h-min">
		<kinesis-container>
    <video class="md:max-h-192 hidden md:block relative w-full z-10 " style="width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1;" autoplay loop muted >
			 <source src="@/assets/videos/bg-black.mp4" > 
		</video>

    <div class="flex  flex-col-reverse md:absolute  md:flex-row align-end h-full w-full px-8 m-auto  top-0 left-0 z-30">
      <div
				class="





					w-full
					md:w-3/5

					max-w-1/2
					md:pt-16
					mx-auto
				">
				<img class="w-xl md:w-2xl " src="@/assets/images/alienhome.webp" alt="" />
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
				
				<h2 class=" text-5xl font-bold sm:text-6xl mt-7 z-10">
					<kinesis-element :strength="20">
						<BasicsLogo width="w-48 " />
					</kinesis-element>
				</h2>
				
				<p class="text-white  lg:max-w-sm mt-9 md:text-left text-center text-sm leading-6">
					is launching a Genesis Collection of 3,333 randomly-generated 3D aliens on
					the Ethereum blockchain. These characters can be used in our mobile app P2W
					game.
				</p>
        <br>
				<div class="w-2/3">
					<PillButton @click.native="downloadPdf">ABDUCTION PROTOCOL&nbsp;<font-awesome-icon :icon="['fas','chevron-right']"  /></PillButton>
				</div>
			</div>
    
	</div>
	</kinesis-container>
	</div>

	</section>
</template>
<script>
export default {
	data() {
		return {
			documentUri:"/Abduction-Protocol-compressed.pdf"
		}
	},
	methods: {
		downloadPdf(){
       window.open(this.documentUri, '_blank').focus();

		}
	},
}
</script>