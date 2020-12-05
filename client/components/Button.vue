<template>
    <div class="container" @click="$emit('click')">{{ text }}</div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scoped lang="scss">
    .container {
        display: inline-block;
        padding: var(--padding-button);
        width: fit-content;

        font: var(--font-button);
        color: var(--color-light);
        background-color: transparent;

        border: 2px solid var(--color-light);
        border-radius: 4px;
        cursor: pointer;

        transition: all 250ms ease-in-out;

        &:hover {
            background: hsla(0, 0%, 100%, .1);
            border-color: var(--color-light);
        }
    }
</style>
