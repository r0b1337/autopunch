<template>
    <div class="emergency" v-parallax="'assets/images/ferrari-wheel.jpg'">
        <span class="title">UNE URGENCE ?</span>
        <span class="subtitle">
            Contactez nous pour toutes demandes nécessitant une intervention immédiate
        </span>
        <Button class="button" text="06 61 36 05 10"></Button>
    </div>
</template>

<script>
import Parallax from '@/directives/Parallax';
import Button from '@/components/Button.vue';

export default {
    name: 'Emergency',
    components: {
        Button,
    },
    directives: {
        Parallax,
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
