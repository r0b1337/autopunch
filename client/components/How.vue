<template>
    <div id="how" v-fade-in>
        <span class="title">COMMENT PROCÉDER ?</span>

        <span class="subtitle">En 3 étapes seulement :</span>

        <Steps :steps="steps"/>
    </div>
</template>

<script>
import FadeIn from '~/plugins/fade-in.client.js';
import Steps from '~/components/Steps';

export default {
    name: 'How',
    components: {
        Steps,
    },
    directives: {
        FadeIn,
    },
    data: () => {
        return {
            steps: [
                {
                    title: 'Prise de contact',
                    content: `
                        Prenez rendez-vous par téléphone au
                        <span style="
                            text-decoration: underline;
                            font: var(--font-button);
                        ">0661360510</span> ou par email Via le formulaire sur notre site,
                        pour que nous puissions recueillir les informations et voir les formalités avec vous.
                    `,
                },
                {
                    title: 'Devis',
                    content: `
                        Nous convenons ensemble d'un premier rendez-vous.
                        Nous établissons un devis et convenons d'une date pour effectuer les réparations.
                        Les frais de déplacement sont facturés
                        <span style="
                            font: var(--font-points-bold);
                            color: var(--color-grey);
                        ">au premier rendez-vous seulement</span>.
                    `,
                },
                {
                    title: 'Réparation et restitution',
                    content: `
                        Nous intervenons où vous le souhaitez, effectuons les réparation et
                        restituons le véhicule après un état des lieux minutieux.

                        <br><br>

                        <span style="
                            font: var(--font-button);
                            color: var(--color-danger);
                        ">HORS VOIE PUBLIQUE</span>
                    `,
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
    #how {
        padding: var(--space-x-large) 0;

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
