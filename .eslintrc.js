module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        curly: ['error', 'multi'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'always',
                component: 'always',
            },
            svg: 'always',
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'never',
        }],
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT',
                'OTHER_DIRECTIVES',
            ],
        }],
        'vue/singleline-html-element-content-newline': ['error', {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
            ignores: [
                'div',
                'span',
            ],
        }],
        'vue/no-v-html': 0,
    },
};
