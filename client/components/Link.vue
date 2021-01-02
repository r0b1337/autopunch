<template>
    <div class="link" :style="{ color }" :class="{ selected: $route.hash === hash }" @click="$root.scrollTo(hash)">{{ text }}</div>
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
};
</script>

<style scoped lang="scss">
    .link {
        all: unset;
        margin: 0 var(--space-small);
        color: var(--color-light);
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            color: unset;
        }

        &.selected {
            text-decoration: underline;
        }
    }
</style>
