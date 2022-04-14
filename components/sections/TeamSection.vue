<template>
	<section class="w-full py-16 bg-black lg:py-24">
		<div class="px-12 mx-auto text-center max-w-7xl">
			<div class="space-y-12 md:text-left">
				<div
					class="
						mb-20
						space-y-5
						sm:mx-auto sm:max-w-xl
						md:max-w-2xl
						sm:space-y-4
						lg:max-w-5xl
					">
					<img
						class="m-auto"
						src="https://static.wixstatic.com/media/afd815_99f41735c9bc448cb9c92037616d5413~mv2.png/v1/crop/x_16,y_0,w_750,h_159/fill/w_566,h_120,al_c,usm_0.66_1.00_0.01,enc_auto/SPACE%20CREW%20(1).png" />
					<h3
						class="
							text-xl
							sm:text-3xl
							md:text-[40px]
							sans-serif
							leading-none
							lg:leading-7
							text-center text-white
							tracking-[2px]
						">
						MEET THE TEAM
					</h3>
				</div>
			
                    <BasicsMember :members="team"/>
				</div>
			</div>

	</section>
</template>

<script>
import members from '@/assets/json/members.json';

export default {
    computed:{
    team() {
      return members
    },        
    }
}
</script>
