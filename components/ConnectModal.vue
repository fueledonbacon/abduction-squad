<template>
	<web3-modal-vue
		ref="web3modal"
		:theme="theme"
		:provider-options="providerOptions" />
</template>
<script>
import Web3ModalVue from 'web3modal-vue'
// import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'

export default {
	components: { Web3ModalVue },
	data() {
		return {
			theme: 'dark',
			providerOptions: {
				walletconnect: {
					package: WalletConnectProvider,
					options: {
						infuraId: '0d31e255e37a47119be7c3760c70fa8c',
					},
				},
			},
		}
	},
	created() {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			this.theme = 'dark'
		}
	},
	mounted() {
		this.$nextTick(async () => {
			const web3modal = this.$refs.web3modal
			this.$wallet.Web3Modal = web3modal
			//Exclude /game from auto pop 
			if(this.$route.name!='game') await this.$wallet.init()
		})
	},
}
</script>
