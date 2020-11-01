<template>
    <div class="card">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        content: String,
    },
};
</script>

<style scoped lang="scss">
    .card {
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 3px;
        background-color: var(--color-light);
        padding: var(--padding-card);

        .title {
            font: var(--font-subtitle);
            margin-bottom: var(--space-base);
        }

        .content {
            font: var(--font-base);
            color: #555555;
        }
    }
</style>
