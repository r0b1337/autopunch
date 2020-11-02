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
};
</script>

<style scoped lang="scss">
    .card {
        border: 1px solid rgba(0,0,0,.2);
        border-radius: var(--border-radius-base);
        background-color: var(--color-light);
        padding: var(--padding-card);

        .title {
            font: var(--font-subtitle);
            margin-bottom: var(--space-base);
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font: var(--font-base);
            color: #555555;
        }
    }
</style>
