import colors from 'vuetify/es5/util/colors';

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: true,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Autopunch',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        script: [
            {
                src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://platform.twitter.com/widgets.js',
                type: 'text/javascript',
                async: true,
            },
            {
                src: 'https://unpkg.com/ionicons@5.2.3/dist/ionicons.js',
                type: 'text/javascript',
            },
            {
                src: 'https://autopunch.disqus.com/embed.js',
                type: 'text/javascript',
                async: true,
            },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/fade-in.client.js',
        '~/plugins/parallax.client.js',
        '~/plugins/scroll-to.client.js',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: ['fade-in', 'parallax', 'scroll-to'],
    },

    // API Routes (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware)
    serverMiddleware: [
        { path: '/mail', handler: '~/../api/mail.js' },
    ],

    srcDir: 'client/',
};
