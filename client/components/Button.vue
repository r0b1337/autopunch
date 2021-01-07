<template>
    <div class="container" :class="{ inline }" @click="$emit('click')"><span>{{ text }}</span></div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: '',
        },
        inline: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped lang="scss">
    .container {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: var(--padding-button);
        width: fit-content;
        height: 100%;

        font: var(--font-button);
        color: var(--color-light);
        background-color: transparent;
        text-align: center;

        border: 2px solid var(--color-light);
        border-radius: 4px;
        cursor: pointer;

        transition: all 250ms ease-in-out;

        &.inline {
            font: var(--font-points-bold);
            background-color: var(--color-danger);
            color: var(--color-light);
            padding: var(--space-small);
            border: none;
            margin: 0 var(--space-base);
            transform: scale(0.9);
        }

        &.inline:hover {
            opacity: 0.7;
            transform: scale(0.85);
        }

        &:not(.inline):hover {
            background: hsla(0, 0%, 100%, .1);
            border-color: var(--color-light);
        }
    }
</style>
