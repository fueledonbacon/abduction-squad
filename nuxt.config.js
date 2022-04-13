import getSiteMeta from './utils/siteMeta'
//Place rute to abi artifacs
import { abi } from  './artifacts/contracts/TheMutantMushies.sol/TheMutantMushies.json'

const siteConfig = require('./siteConfig.json') 
const { title, description, url, iconName } = siteConfig

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
		title: title,
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, // mobile responsive https://search.google.com/test/mobile-friendly
			{ name: 'format-detection', content: 'telephone=no' },
			...getSiteMeta({
				url: url,
				title: title,
				description: description,
				mainImage: `${url}/${iconName}`,
			}),
		],
		link: [
			{
				hid: 'canonical',
				rel: 'canonical',
				href: url,
			},
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Questrial&family=Roboto:wght@400;500;700;900&display=swap',
			},
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
		hostname: url,
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
	build: {},
}
