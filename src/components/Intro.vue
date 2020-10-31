<template>
    <div class="intro">
        <punch-parallax image="blurred-background.jpg"></punch-parallax>
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
import Parallax from './Parallax.vue';
import Button from './Button.vue';

export default {
  name: 'Intro',
  components: {
    'punch-parallax': Parallax,
    Button,
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
            display: block;
            font: var(--font-title);
            color: var(--color-light);
            text-transform: uppercase;
            margin-bottom: var(--space-x-large);
        }

        .subtitle {
            display: block;
            font: var(--font-subtitle);
            color: var(--color-light);
            margin-bottom: var(--space-large);
        }

        .button {
            margin-bottom: var(--space-large);
        }
    }

</style>
