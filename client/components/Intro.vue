<template>
    <div class="intro" v-parallax="'assets/images/blurred-background.jpg'">
        <div class="container" v-fade-in>
            <img class="logo" alt="Autopunch logo" src="~/assets/images/logo.png"/>
            <span class="title">
                - Votre auto a besoin d'<span style="color: var(--color-danger)">p</span>unch ?
            </span>
            <span class="subtitle">- Assez perdu de temps en vous déplaçant au garage ?</span>
            <span class="subtitle">- N'en dîtes pas plus !</span>
            <span class="subtitle">Nous intervenons où vous le souhaitez.</span>
            <Button class="button" text="DEMANDEZ UN RENDEZ-VOUS"/>
        </div>
    </div>
</template>

<script>
import Button from '~/components/Button';
import FadeIn from '~/plugins/fade-in.client.js';
import Parallax from '~/plugins/parallax.client.js';

export default {
    name: 'Intro',
    components: {
        Button,
    },
    directives: {
        FadeIn,
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

        &:before {
            background: rgba(10,10,10,.4);
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .container {
            z-index: 1;
            position: relative;

            .logo {
                margin-bottom: var(--space-x-large);
                width: 100%;
                max-width: 1000px;
            }

            .title, .subtitle {
                color: var(--color-light);
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
    }
</style>
