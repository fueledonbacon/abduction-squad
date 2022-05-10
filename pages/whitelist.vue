<template>
	<main class="w-full">
		<section
			class="
        overflow-hidden
				w-full
				sm:h-screen
				h-full
				bg-cover bg-center
				antialiased
				bg-no-repeat
			">
			<div class="absolute -z-0 w-full h-full  top-0 bg-black/[.95] min-h-full ">
			</div>
			<div class="mx-auto max-w-7xl  my-40">
				<div class="relative  container  mx-auto text-center sm:px-4">
					<h1
						class="
							text-4xl
							font-extrabold
							leading-10
							tracking-tight
							text-white
							sm:text-5xl sm:leading-none
							md:text-6xl
							xl:text-7xl
							upppercase
						">
						<span class="block text-white opacity-90 ">Verify you're on the </span>
						<span class="relative inline-block mt-3 text-yellow font-flyingSausage">SPACELIST.</span>
					</h1>
					<div
						class="
							max-w-lg
							mx-auto
							mt-6
							text-base text-center text-white
              opacity-90
							md:mt-12
							md:max-w-xl md:text-lg
							xl:text-xl
							spmono
						">
						Enter your Ethereum address or ENS name to confirm that you're on our
						whitelist for the launch!
					</div>
			
	 <div class="  flex-col justify-center w-full mt-5 space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row lg:mt-8">

						
					<input type="text" 
							placeholder="0x1...123 or ENS"
							v-model="address"
							@input="ensListener" class="--tw-ring-offset-shadow:0 active:boder-0 text-white border-0 border-b border-yellow container inline-block h-12 px-3 overflow-visible text-base font-semibold  bg-transparent  border-solid rounded-sm sm:max-w-xs lg:max-w-sm focus:outline-none cursor-text md:text-left focus:ring-2" >

							<PillButton 	@click="ensListener($event, true)" > VERIFY   <font-awesome-icon :icon="['fas','chevron-right']"  /> </PillButton>
							

					</div>
					<div
						v-if="message"
						:class="`max-w-lg mx-auto mt-6 text-sm text-center text-gray-700 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl ${
							success ? 'bg-green-400' : 'bg-orange-400'
						} rounded-lg p-4`">
						{{ message }}
					</div>
				</div>
			</div>

		</section>
	</main>
</template>
<script>
import whitelist from '@/assets/json/whitelist.json'
import { ethers } from 'ethers'

export default {
	name: 'WhiteList',
	async mounted() {},
	data() {
		return {
			address: '',
			message: '',
			resolveName: {},
			success: false,
		}
	},
	methods: {
		async resolveEns(a) {
			let address = ''
			try {
				let provider
				if (window?.ethereum) {
					provider = new ethers.providers.Web3Provider(window.ethereum)
				} else {
					return
				}
				address = await provider.resolveName(a)
			} catch (err) {
				console.log(err)
			} finally {
				return address || ''
			}
		},
		async ensListener(event, clicked) {
			if (this.success) this.success = false
			const isEns = this.address.match(/\.eth$/)
			let address = this.address
			if (isEns) {
				address = await this.resolveEns(address)
			}
			if (address.length == 42) {
				this.address = address
				this.verify()
			} else {
				if (this.message) {
					this.message = ''
				}
				if (clicked) {
					//
					if (!this.address) {
						this.message = 'Address field is empty'
					} else {
						this.message = 'Not a valid address or ENS name'
					}
				}
			}
		},

		onWhitelist() {
			const checksumAddress = ethers.utils.getAddress(this.address)
			return whitelist.includes(checksumAddress)
		},

		verify() {
			const onWhitelist = this.onWhitelist()

			if (onWhitelist) {
				this.success = true
				this.message = 'This address on the whitelist!'
			} else {
				this.message = 'This address is not on the whitelist.'
			}
		},
	},
}
</script>
<style scoped>
section {
	background-image: url('/bg-image.jpeg');
  background-size: cover;

}
</style>
