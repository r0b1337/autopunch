<template>
    <div id="performances" v-fade-in>
        <span class="title">NOS PRESTATIONS</span>

        <span class="subtitle" style="color: var(--color-danger)">Nos prestations sont facturées TTC</span>

        <div class="performance">
            <Card>
                <template v-slot:title>- Vidange express -</template>
                <template v-slot:content>
                    <span class="card-subtitle">Notre forfait entretien de maintenance comprend pièces/liquides et main d'oeuvre</span>

                    <ul class="points">
                        <li>Vidange de l'huile moteur</li>
                        <li>Remplacement du filtre à huile</li>
                        <li>Remise à niveau de l'huile</li>
                        <li>Réinitialisation de l'indicateur de maintenance</li>
                    </ul>

                    <span class="footer">à partir de 69€*</span>

                    <span class="note">*En fonction du modèle</span>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/oil.jpg')" alt=""/></div>
        </div>

        <div class="performance">
            <Card>
                <template v-slot:title>- Révision -</template>
                <template v-slot:content>
                    <span class="card-subtitle">Notre forfait entretien de maintenance comprend pièces/liquides et main d'oeuvre</span>

                    <ul class="points">
                        <li>Vidange d'huile moteur</li>
                        <li>Remplacement du filtre à huile, filtre à air, filtre d'habitacle et filtre à carburant</li>
                        <li>Remise au maximum du véhicule</li>
                        <li>Remise à zéro des indicateurs de maintenance</li>
                    </ul>

                    <span class="footer">à partir de 129€*</span>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/emptying.jpg')" alt=""/></div>
        </div>

        <div class="performance">
            <Card>
                <template v-slot:title>- Plaquettes de frein -</template>
                <template v-slot:content>
                    <span class="card-subtitle">Notre forfait plaquettes de frein comprend pièces (Made in france) et main d'oeuvre</span>

                    <ul class="points">
                        <li>Remplacement des plaquettes de frein avant ou arrière</li>
                        <li>Nettoyant frein Bardal inclus</li>
                    </ul>

                    <span class="footer">à partir de 79€*</span>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/brake-pads.jpg')" alt=""/></div>
        </div>

        <div class="performance">
            <Card>
                <template v-slot:title>- Disques de freinage -</template>
                <template v-slot:content>
                    <span class="card-subtitle">Notre forfait disque de freinage comprend pièces (Made in france) et main d'oeuvre</span>

                    <ul class="points">
                        <li>Remplacement des disques de frein avant ou arrière</li>
                        <li>Nettoyant frein Bardal inclus</li>
                    </ul>

                    <span class="footer">à partir de 99€</span>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/brake-discs.jpg')" alt=""/></div>
        </div>

        <div class="performance">
            <Card>
                <template v-slot:title>- Prestations mécaniques -</template>
                <template v-slot:content>
                    <span class="card-subtitle">En fonction de vos besoins</span>

                    <ul class="points">
                        <li>Main d'oeuvre en fonction de vos besoins <span class="bold">(devis sur mesure)</span></li>
                        <li>Remplacement des éléments de ligne d’échappement <span class="bold">(devis sur mesure)</span></li>
                        <li>Remplacement d'ampoules à partir de <span class="bold">10€</span> (ampoules <span class="bold" style="color: var(--color-danger)">incluses</span>)</li>
                    </ul>

                    <span class="footer">à partir de 99€</span>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/engine.jpg')" alt=""/></div>
        </div>

        <div class="performance">
            <Card>
                <template v-slot:title>- Esthétique -</template>
                <template v-slot:content>
                    <span class="card-subtitle">Nos offres de nettoyage intérieur /extérieur</span>

                    <ul class="points">
                        <li>Nettoyage <span class="bold">intérieur</span>  (vitres + sièges + ciel de toit + tableau de bord  + tapis + moquette) <span class="bold">49€</span></li>
                        <li>Nettoyage <span class="bold">extérieur</span>  (mousse intégrale + astiquage des vitres extérieures + astiquage de la carrosserie + astiquage des jantes + séchage à la peau de chamois  ) <span class="bold">49€</span></li>
                        <li>Nettoyage <span class="bold">intérieur + extérieur  79€</span></li>
                    </ul>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/car-interior.jpg')" alt=""/></div>
        </div>

        <div class="performance">
            <Card>
                <template v-slot:title>- Dépannage -</template>
                <template v-slot:content>
                    <span class="card-subtitle">Panne de batterie ? Avec nous, c'est reparti !</span>

                    <ul class="points">
                        <li>Dépannage Second Souffle <span class="bold">BOOSTER 15€</span></li>
                        <li>Remplacement de batterie<span class="bold">*</span> à partir de <span class="bold">20€</span></li>
                    </ul>

                    <span class="note">*Batterie <span style="color: var(--color-danger)">NON-INCLUS</span></span>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/battery.jpg')" alt=""/></div>
        </div>

        <div class="performance">
            <Card>
                <template v-slot:title>- Offert Par Auto<span style="color: var(--color-danger)">Punch</span> -</template>
                <template v-slot:content>
                    <span class="card-subtitle">Les avantages</span>

                    <ul class="points">
                        <li>Diagnostic professionnel de votre véhicule (état général, réparation à prévoir, bruit moteur anormal etc...)</li>
                        <li>Remplacement des balais essuies-glace*</li>
                        <li>Gonflage des pneumatiques</li>
                        <li>Remise à niveau des divers liquides*</li>
                    </ul>

                    <span class="note">*Pièces et liquides <span style="color: var(--color-danger)">NON-INCLUS</span></span>
                </template>
            </Card>

            <div class="image"><img :src="require('@/assets/images/car-exterior.jpg')" alt=""/></div>
        </div>

        <Card>
            <template v-slot:title>- Frais de déplacement -</template>
            <template v-slot:content>
                <span class="card-subtitle" style="text-align: center">Les frais de déplacement sont déterminés en fonction de la distance qui vous sépare de Noisy-Le-Grand</span>

                <br/>

                <div class="places">
                    <span>Dans Noisy-Le-GRAND : <span class="bold">20€</span></span>
                    <span>Villes Adjacentes : <span class="bold">30€</span></span>
                    <span>De 10 à 20 km de Noisy-Le-GRAND : <span class="bold">40€</span></span>
                    <span>Plus de 20km et Paris : <span class="bold">50€</span></span>
                </div>
            </template>
        </Card>

        <hr/>

        <div class="snap-map"><img :src="require('@/assets/images/snap-map.jpg')" alt="Snapchat Map"/></div>
    </div>
</template>

<script>
import Card from '~/components/Card';
import FadeIn from '~/plugins/fade-in.client.js';

export default {
    name: 'Performances',
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

    #performances {
        height: auto;
        overflow: hidden;
        position: relative;
        padding: var(--space-large);
        background-color: var(--color-light);
        color: var(--color-dark);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .subtitle {
            width: 100%;
        }

        .performance {
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
                    margin-bottom: var(--space-small);
                    color: var(--color-danger);
                }

                .points {
                    font: var(--font-points);
                    margin: 0 0 var(--space-small) var(--space-base);
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
                    color: black;
                }

                .card-subtitle, .note, .points {
                    text-align: left;
                }
            }
        }

        .title {
            width: 100%;
        }

        .title, .subtitle {
            margin-bottom: var(--space-large);
        }

        .snap-map {
            display: block;
            width: 100%;
            margin: var(--space-base) 0;

            img {
                width: 30%;
                height: auto;
            }
        }

        @media (max-width: $mobile-breakpoint) {
            .performance {
                flex-direction: column-reverse;

                .image {
                    max-width: unset;
                    margin-bottom: 0;
                }
            }

            .card { width: auto; }

            .snap-map > img { width: 100%; }
        }
    }
</style>
