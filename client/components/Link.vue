<template>
    <div class="link" :style="{ color }" @click="scrollTo(hash)">{{ text }}</div>
</template>

<script>

export default {
    name: 'Link',
    props: {
        text: {
            type: String,
            default: '',
        },
        hash: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
    },
    methods: {
        scrollTo (hash) {
            const $ = window.$;

            $('html, body').animate({ scrollTop: $(hash).offset().top - 62 });

            window.location.hash = hash;
        },
    },
};
</script>

<style scoped lang="scss">
    .link {
        all: unset;
        margin: 0 var(--space-small);
        color: var(--color-light);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            color: unset;
        }
    }
</style>
