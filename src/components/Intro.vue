<template>
    <div class="intro">
        <parallax sectionClass="parallax" direction="down" speedFactor=0.5>
            <img :src="require('../assets/blurred-background.jpg')" alt="">
        </parallax>
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
import Parallax from 'vue-parallaxy';
import Button from './Button.vue';

export default {
  name: 'Intro',
  components: {
    Parallax,
    Button,
  },
};
</script>

<style scoped lang="scss">
    .intro {
        height: auto;
        padding: var(--space-large);
        padding-top: 120px;
        position: relative;

        .parallax {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 72% !important;
            z-index: -1;
        }

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
