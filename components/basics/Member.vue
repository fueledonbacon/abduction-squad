<template>  
	<div
					class="
						flex flex-row flex-wrap justify-center
					">
						<!-- sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0
						lg:grid-cols-5  -->
  		<div
         v-for="member in members"
      :key="member.key"
     class="space-y-6 text-center lg:mx-4 md:ml-16">
						<div class="relative w-32 h-32 p-2 mx-auto md:w-48 md:h-48">
							<img
								class="relative z-20 w-full h-full rounded-full"
								:src="member.pic"
								alt="" />
						</div>
						<div class="space-y-2">
							<div class="space-y-1 text-lg font-medium leading-6">
								<h3 class="text-yellow">{{member.name}}</h3>
								<p  class="text-white whitespace-pre" v-html="member.Role"></p>
							</div>
							<div class="relative flex items-center justify-center space-x-3">
								<a target="_newblank" :href="member.twitter" :v-if="member.twitter" class="text-gray-300 hover:text-gray-400">
                  <font-awesome-icon :icon="['fab','twitter']" />
								</a>

								<a :href="member.in" v-if="member.in" class="text-gray-300 hover:text-gray-400">
									<font-awesome-icon :icon="['fab','linkedin']" />
								</a>
							</div>
						</div>
					</div>
</div>
</template>

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