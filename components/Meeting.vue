<template>
    <div class="meeting" v-fade-in v-parallax="'assets/images/engine-tools.jpg'">
        <span class="title">PRENEZ RENDEZ-VOUS </span>
        <span class="subtitle">Soit par téléphone ou par email via notre formulaire ci dessous.</span>
        <span class="number">0661360510</span>

        <form id="contact">
            <div class="infos">
                <input type="text" placeholder="Nom / Prénom">
                <input type="text" placeholder="Email">
            </div>

            <textarea id="subject" placeholder="De quelles prestations avez vous besoin ? Transmettez nous les détails sur le modèle de votre véhicule (modèle, kilométrage, immatriculation, VIN *) pour une réponse toujours plus rapide."/>
            <input id="cgu" type="checkbox"><label for="cgu">En continuant, vous acceptez nos Conditions d'utilisation et Politique de confidentialité</label>
        </form>

        <Button text="Envoyer"></Button>
    </div>
</template>

<script>
import FadeIn from '~/plugins/fade-in.client.js';
import Parallax from '~/plugins/parallax.client.js';

export default {
    name: 'Meeting',
    directives: {
        FadeIn,
        Parallax,
    },
};
</script>

<style scoped lang="scss">
    .meeting {
        background-color: var(--color-grey);
        color: var(--color-light);
        padding: var(--space-large) 0;

        .title {
            margin-bottom: var(--space-x-large);
        }

        .subtitle {
            margin-bottom: var(--space-large);
        }

        .number {
            display: block;
            font: var(--font-large);
            text-decoration: underline;
            margin-bottom: var(--space-large);
        }

        form {
            padding: 0 var(--space-x-large);
            margin-bottom: var(--space-base);

            .infos {
                display: flex;
                flex-direction: row;
                width: 100%;
            }

            input, textarea {
                background-color: var(--color-light);
                margin: var(--space-base);
                padding: var(--space-small);
                border-radius: var(--border-radius-base);
                width: 100%;
                width: -webkit-fill-available;
            }
        }
    }
</style>
