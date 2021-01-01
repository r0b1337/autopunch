<template>
    <a class="call-me" href="tel:0661360510">
        <ion-icon name="phone-portrait-outline" size="large"/>
        <span class="number">
            0661360510
        </span>
    </a>
</template>

<script>

export default {
    name: 'CallMe',
};
</script>

<style scoped lang="scss">
    .call-me {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        bottom: 0;
        left: 0;
        background-color: var(--color-danger);
        color: var(--color-light);
        height: 52px;
        width: 100%;
        text-decoration: none;

        ion-icon { margin-right: var(--space-small); }
        .number { font: var(--font-button); }
    }
</style>
