<template>
	<header
		:class="`bg-black ${
			scrollY < 1 ? 'sm:bg-transparent' : ''
		}  flex justify-center items-center fixed px-3 py-3 w-full z-50`">
		<ConnectModal />

		<div class="flex justify-between items-center w-full sm:w-11/12">
			<!-- Desktop nav -->
			<nav
				class="
					hidden
					lg:flex
					text-white
					w-full
					justify-between
					px-8
					h-12
					items-center
				">
				<div class="grid grid-flow-col space-x-4 social text-3xl">
					<a href="https://twitter.com/AbductionSquad" target="_blank">
						<font-awesome-icon :icon="['fab', 'twitter']" />
					</a>
					<a href="https://discord.com/invite/abductionsquad" target="_blank">
						<font-awesome-icon :icon="['fab', 'discord']" />
					</a>
				</div>

				{{$nuxt.$route.name}}
				<a v-if="$nuxt.$route.name!='whitelist'" class="text-lg xl:text-xl uppercase underline" href="/whitelist">
					SPACE LIST CHECKER
				</a>
								
				<a v-else class="text-lg xl:text-xl uppercase underline" href="/">
					HOME
				</a>
			</nav>
			<ConnectButton />
			<!-- Mobile menu -->
			<div class="flex lg:hidden justify-end ml-3">
				<button class="text-white z-20 text-3xl" @click="toggleNavigator">
					<font-awesome-icon :icon="['fas', 'bars']" v-if="!isNavigatorOpen" />
					<font-awesome-icon :icon="['fas', 'xmark']" v-else />
				</button>
				<transition name="scale">
					<nav
						v-if="isNavigatorOpen"
						class="
							mobile-navigator
							flex
							absolute
							top-0
							left-0
							w-screen
							h-screen
							p-5
							rounded-lg
							z-10
							items-center
							justify-center
							font-spmono
							text-2xl
							uppercase
						"
						:class="{
							'scale-in': isNavigatorOpen,
							'scale-out': !isNavigatorOpen,
						}">
						<ul class="flex flex-col text-white text-left w-full">

							<li class="pb-1 mb-2 border-b-2 border-b-yellow/75">
								<a href="/#presentation-section">The Protocol</a>
							</li>

							<li class="pb-1 mb-2 border-b-2 border-b-yellow/75 ">
								<a href="/#roadmap-section">Our Artist</a>
							</li>
							<li class="pb-1 mb-2 border-b-2 border-b-yellow/75 ">
								<a href="/#roadmap-section">Road Map</a>
							</li>
							<li class="pb-1 mb-2 border-b-2 border-b-yellow/75 ">
								<a href="/#team-section">Our Team</a>
							</li>
								<li  v-if="$nuxt.$route.name!='whitelist'" class="pb-1 mb-2 border-b-2 border-b-yellow/75 block md:hidden text-yellow">
								<a href="/whitelist">SPACELIST</a>
							</li>

							<!-- <li class="mb-3">
                <a href="/#faq-section">FAQ</a>
              </li>
              <li>
                <a href="/whitelist">Whitelist</a>
              </li> -->
							<div class="flex flex-row justify-center space-x-8">
								<li class="mt-8">
									<a href="https://twitter.com/AbductionSquad" target="_blank">
										<font-awesome-icon :icon="['fab', 'twitter']" />
									</a>
								</li>
								<li class="mt-8">
									<a href="https://discord.com/invite/abductionsquad" target="_blank">
										<font-awesome-icon :icon="['fab', 'discord']" />
									</a>
								</li>
							</div>
						</ul>
					</nav>
				</transition>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data() {
		return {
			isNavigatorOpen: false,
			scrollY: 0,
		}
	},
	computed: {},
	mounted() {},
	methods: {
		toggleNavigator() {
			this.isNavigatorOpen = !this.isNavigatorOpen
		},
	},
}
</script>

<style scoped>


@keyframes scaleIn {
	from {
		transform: scale(0);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}
@keyframes scaleOut {
	from {
		transform: scale(1);
		opacity: 1;
	}
	to {
		transform: scale(0);
		opacity: 0;
	}
}

.mobile-navigator {
	transform-origin: top right;
	background-color: #111827ee;
}
</style>
