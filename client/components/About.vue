<template>
    <div id="about" v-fade-in>
        <span class="title" style="color: var(--color-danger)">VOTRE MÉCANICIEN À DOMICILE.</span>

        <div class="who">
            <Card>
                <template v-slot:title>Auto<span style="color: var(--color-danger)">Punch</span></template>

                <template v-slot:content>
                    <span class="subtitle" style="color: var(--color-danger)">- Qui est Punch ?</span>

                    <span style="font: var(--font-points)">
                        Passionné par les véhicules motorisés depuis son enfance,
                        <span class="bold">Punch</span> a choisit de devenir un professionnel de l'automobile pour faire de sa passion son métier.
                        <br/>
                        Après son apprentissage il a décidé de se mettre à son compte afin
                        de proposer une solution aux particuliers qui souhaitent plus de flexibilité pour l'entretien
                        de leurs véhicules que celle proposé par un garage traditionnel.
                    </span>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/punch-plate.jpg')" alt=""/></div>
        </div>

        <Card class="law">
            <template v-slot:title>
                <span class="bold" style="color: var(--color-danger)">Notre pratique est encadrée</span>
                <br/>
                <span class="penal">Article 635-8 du code pénal</span>
            </template>

            <template v-slot:content>
                <span class="quote">
                    - Est puni de l'amende prévue pour les contraventions de la 5e classe le fait de déposer,
                    d'abandonner, de jeter ou de déverser, en lieu public ou privé,
                    à l'exception des emplacements désignés à cet effet par l'autorité administrative compétente,
                    soit une épave de véhicule, soit des ordures, déchets, déjections, matériaux,
                    liquides insalubres ou tout autre objet de quelque nature qu'il soit,
                    lorsque ceux-ci ont été transportés avec l'aide d'un véhicule,
                    si ces faits ne sont pas accomplis par la personne ayant la jouissance du lieu [...]
                </span>
                <span class="footer">
                    <span>Autopunch</span> récupère l'intégralité des déchets / liquides / matériaux produits lors de nos prestations
                    et laisse l'emplacement utilisé exactement comme il était avant notre intervention.
                </span>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from '~/components/Card';
import FadeIn from '~/plugins/fade-in.client.js';

export default {
    name: 'About',
    components: {
        Card,
    },
    directives: {
        FadeIn,
    },
};
</script>

<style scoped lang="scss">
    @import '~/assets/style/breakpoints.scss';

    #about {
        height: auto;
        overflow: hidden;
        position: relative;
        padding: var(--space-large);
        background-color: var(--color-light-dark);
        color: var(--color-dark);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .subtitle {
            width: 100%;
            margin-bottom: var(--space-base);
        }

        .who {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-basis: 90%;

            .image {
                margin: var(--margin-card);
                max-width: 300px;

                img {
                    width: 100%;
                    height: auto;
                    border-radius: var(--border-radius-base);
                }
            }
        }

        .card {
            margin: var(--margin-card);
            width: 40%;

            .content {
                display: flex;
                flex-direction: column;

                .card-subtitle {
                    font: var(--font-base);
                    color: var(--color-danger);
                }

                .points {
                    font: var(--font-points);
                }

                .places {
                    font: var(--font-points);

                    > * {
                        display: block;
                    }
                }

                .footer {
                    font: var(--font-button);
                    color: var(--color-dark);
                }

                .note {
                    display: block;
                    font: var(--font-base);
                    color: var(--color-dark);
                    margin-top: var(--space-base);
                }

                .bold {
                    font: var(--font-points-bold);
                    color: var(--color-danger);
                }

                .card-subtitle, .note, .points {
                    text-align: left;
                }
            }
        }

        .law {
            width: 50%;;

            .penal {
                font: var(--font-base);
            }

            .quote {
                font: var(--font-points);
                text-align: left;
                margin-bottom: var(--space-base);
            }

            .footer {
                font: var(--font-points-bold);
                span {
                    color: var(--color-danger);
                }
            }
        }

        .title {
            width: 100%;
            margin-bottom: var(--space-large);
        }

        @media (max-width: $mobile-breakpoint) {
            padding: var(--space-large) var(--space-base);

            .who {
                flex-direction: column-reverse;

                .image { max-width: unset; }
            }

            .card { width: auto; }
        }
    }
</style>
