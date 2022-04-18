import getSiteMeta from './utils/siteMeta'

//Place rute to abi artifacs
import { abi } from  './artifacts/contracts/TheMutantMushies.sol/TheMutantMushies.json'

export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	publicRuntimeConfig: {
		smartContract: {
			contractName: "ContractName",
			name: "Contract Name",
			symbol: "XYZ",
			address: "0x...123",
			collectionSize: 0,
			mintPrice: 0.1,
			chainId: 1,
			hasWhitelist: false,
			hasDelayedReveal: false,
			abi: abi
		}
	},	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Abduction Squad",
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, // mobile responsive https://search.google.com/test/mobile-friendly
			{ name: 'format-detection', content: 'telephone=no' },
			...getSiteMeta({
				url: "https://abductionsquad.io",
				title: "Abduction Squad",
				description: "",
				mainImage: "/banner.jpg",
			}),
		],
		link: [
			{
				hid: 'canonical',
				rel: 'canonical',
				href: 'https://abductionsquad.io',
			},
			{ rel: 'icon', type:'image/png', href: '/favicon.png' },
		],
		script: [
			{
				src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
				src: 'https://kit.fontawesome.com/43d7c4e320.js'
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'@/assets/css/main.css',
    'aos/dist/aos.css',

	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/wallet',
		'@/plugins/siteConfig'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['nuxt-vite', '@nuxtjs/tailwindcss', '@nuxtjs/fontawesome',],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'@nuxtjs/sitemap',
		'@nuxtjs/axios',
		'@nuxtjs/toast'
	],

	toast: {
		position: 'top-center'
	},

	sitemap: {
		hostname: 'https://abductionsquad.io',
		exclude: ['/admin/**'],
		defaults: {
			changefreq: 'daily',
			priority: 1,
			lastmod: new Date(),
		},
	},

	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: false,
		config: {},
		injectPosition: 0,
		viewer: true,
	},

	fontawesome:{
		icons:{
			solid: true,
			brands:true
		}
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile:[
			'web3modal-vue'
		]
	},
}
