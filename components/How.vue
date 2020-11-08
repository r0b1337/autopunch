<template>
    <div class="how" v-fade-in>
        <span class="title">COMMENT PROCÉDER ?</span>

        <span class="subtitle">En 3 étapes seulement :</span>
    </div>
</template>

<script>
import FadeIn from '~/plugins/fade-in.client.js';

export default {
    name: 'How',
    directives: {
        FadeIn,
    },
};
</script>

<style scoped lang="scss">
    .how {
        padding-top: var(--space-x-large);

        .title {
            color: black;
            margin-bottom: var(--space-x-large);
        }

        .subtitle {
            color: var(--color-danger);
            margin-bottom: var(--space-base);
        }
    }
</style>
