<template>
    <div class="link" :style="{ color }" :class="{ selected: $route.hash === hash }" @click="scrollTo(hash)">{{ text }}</div>
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
            const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

            $('html, body').animate({ scrollTop: $(hash).offset().top - headerHeight });

            window.location.hash = hash;

            this.$emit('click');
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

        &.selected {
            font-weight: 500;
        }
    }
</style>
