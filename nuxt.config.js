export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iBook',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Uma nova maneira de ler livros online!'
			},
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	
	dir: {
		assets: 'assets',
		components: 'components',
		layouts: 'layouts',
		middleware: 'middleware',
		pages: 'pages',
		plugins: 'plugins',
		static: 'static',
		store: 'store'
	},

  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  plugins: ['@plugins/accessor'],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/style-resources'
  ],

	modules: ['@nuxtjs/axios','cookie-universal-nuxt'],
	
	styleResources: {
		scss: ['@/components/bosons/*.scss']
	},

	axios: {
		baseURL: 'http://localhost:3333'
	},

	build: {
		extractCSS: true
	},
}
