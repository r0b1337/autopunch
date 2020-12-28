<template>
    <div class="emergency" v-parallax="'assets/images/ferrari-wheel.jpg'" v-fade-in>
        <span class="title">UNE URGENCE ?</span>
        <span class="subtitle">
            Contactez nous pour toutes demandes nécessitant une intervention immédiate
        </span>
        <Button class="button" text="06 61 36 05 10"/>
    </div>
</template>

<script>
import Button from '~/components/Button';
import FadeIn from '~/plugins/fade-in.client.js';
import Parallax from '~/plugins/parallax.client.js';

export default {
    name: 'Emergency',
    components: {
        Button,
    },
    directives: {
        Parallax,
        FadeIn,
    },
};
</script>

<style scoped lang="scss">
    .emergency {
        height: auto;
        overflow: hidden;
        position: relative;
        padding: var(--space-large);

        .title, .subtitle {
            margin-bottom: var(--space-large);
            color: var(--color-light);
        }

        .button {
            margin-bottom: var(--space-large);
        }
    }
</style>
