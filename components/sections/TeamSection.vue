<template>
	<section class="w-full  bg-fixed bg-cover " id="team-section"
			style="background-image: url('/bg-image.jpeg')">

		<div class="
				bg-black/[0.95]
				w-full 
				mx-auto py-16
				space-y-12   md:px-16 sm:px-12 xl:px-12
				flex flex-col
				leading-6 text-left"
		
		>
			<div class="space-y-12 md:text-left ">
				<div
					class="
						space-y-5
						sm:mx-auto sm:max-w-xl
						md:max-w-2xl
						sm:space-y-4
						lg:max-w-5xl
						
					">
					<img
						class="max-w-xl m-auto w-10/12"
						src="@/assets/images/spacecrew.svg" />
					<h3
						class="
							text-xl
							sm:text-3xl
							md:text-[40px]
							font-[oswald-medium]
							leading-none
							lg:leading-7
							text-center text-white
							tracking-[2px]
						">
						MEET THE TEAM
					</h3>
				</div>
			
		</div>
      	<BasicsMember :members="team"/>
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
