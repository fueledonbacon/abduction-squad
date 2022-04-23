<template>  
	<div class="flex flex-row flex-wrap justify-center  space-y-8">

  		<div 	v-for="member in members" :key="member.key"
    				class="member w-full md:w-2/12 space-y-2 lg:mx-4 md:ml-16">
						<!-- user pic -->
						<div class="w-36 h-36 p-2 mx-auto md:w-48 md:h-48">
							<img class="w-full h-full rounded-full hover:border-2 transition ease-in-out delay-150   duration-300 hover:border-yellow hover:p-2 "
								:src="member.pic"
								alt="" />
						</div>


						<div class="member_info text-lg font-medium leading-6">
							<h3 class="font-[oswald-medium] text-yellow">{{member.name}}</h3>
							<p  class="text-sm  font-spmono text-white whitespace-pre" v-html="member.Role"></p>
									
									<!-- social -->
							<div class="member_info-social">
								<a target="_newblank" :href="member.twitter" v-if="member.twitter"   class="text-white hover:text-yellow">
									<font-awesome-icon :icon="['fab','twitter']" />
								</a>

								<a :href="member.in" v-if="member.in" class="text-white hover:text-yellow">
									<font-awesome-icon :icon="['fab','linkedin']" />
								</a>

								<a :href="member.website" target="_blank" v-if="member.website" class="text-white hover:text-yellow">
									<font-awesome-icon :icon="['fas','link']" />
								</a>
							</div>

						
						</div>
					</div>
</div>
</template>
<style scoped>
	.member{
		@apply flex flex-col justify-around;

	}
 .member_info {
		@apply text-center space-y-2
	}
	.member_info-social {
		@apply space-x-4 text-xl
	}

</style>
<script>
export default {
  props: {
    members: {
      type: Array,
      required: true,
    },
  },
}
</script>