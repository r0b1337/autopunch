<template>
    <div class="intro" v-parallax="'assets/blurred-background.jpg'">
        <img class="logo" alt="Autopunch logo" :src="require('../assets/logo.png')">
        <span class="title">
            - Votre auto a besoin d'<span style="color: var(--color-red)">p</span>unch ?
        </span>
        <span class="subtitle">- Assez perdu de temps en vous déplaçant au garage ?</span>
        <span class="subtitle">- N'en dîtes pas plus !</span>
        <span class="subtitle">Nous intervenons où vous le souhaitez.</span>
        <Button class="button" text="DEMANDEZ UN RENDEZ-VOUS"></Button>
    </div>
</template>

<script>
import Parallax from '@/directives/Parallax.js';
import Button from '@/components/Button.vue';

export default {
    name: 'Intro',
    components: {
        Button,
    },
    directives: {
        Parallax,
    },
};
</script>

<style scoped lang="scss">
    .intro {
        height: auto;
        overflow: hidden;
        position: relative;
        padding: var(--space-large);
        padding-top: 120px;

        .logo {
            margin-bottom: var(--space-x-large);
            width: 100%;
        }

        .title {
            text-transform: uppercase;
            margin-bottom: var(--space-x-large);
        }

        .subtitle {
            margin-bottom: var(--space-large);
        }

        .button {
            margin-bottom: var(--space-large);
        }
    }
</style>
