<template>
	<section class="w-full  bg-fixed bg-cover " id="team-section"
			style="background-image: url('/assets/images/bg-image.jpeg')">

		<div class="px-12 py-16  lg:py-24 text-center w-full bg-gray-900/[.9]
"
		
		>
			<div class="space-y-12 md:text-left ">
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
						class="max-w-xl m-auto"
						src="@/assets/images/spacecrew.svg" />
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
