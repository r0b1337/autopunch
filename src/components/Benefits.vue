<template>
    <div class="benefits">
        <span class="title">LES AVANTAGES</span>

        <div class="cards">
            <Card>
                <template v-slot:title>Gain de temps</template>
                <template v-slot:content>
                    Vous ne perdrez plus de temps à déposer et récupérer votre véhicule en garage.
                    Nous intervenons sur votre lieux de travail ou à votre domicile.
                </template>
            </Card>

            <Card>
                <template v-slot:title>Economie</template>
                <template v-slot:content>
                    Autopunch allège la facture par rapport à un garage classique
                    et <span style="color: var(--color-danger)">une prise en charge rapide</span> par rapport au concessionnaire.
                </template>
            </Card>

            <Card>
                <template v-slot:title>Assistance</template>
                <template v-slot:content>
                    Comprendre pourquoi votre véhicule a besoin de notre intervention est primordial pour mieux l'entretenir par la suite,
                    nous prenons le temps de vous montrer et de vous expliquer l'intervention.
                </template>
            </Card>

            <Card>
                <template v-slot:title>Service après-vente</template>
                <template v-slot:content>
                    Nous restons ouvert et à l'écoute pour toutes réclamations après notre intervention,
                    nous restons à votre disposition.
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card';

export default {
    name: 'Benefits',
    components: {
        Card,
    }
};
</script>

<style scoped lang="scss">
    .benefits {
        height: auto;
        overflow: hidden;
        position: relative;
        padding: var(--space-large);
        background-color: var(--color-light);
        color: var(--color-dark);

        .cards {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;

            .card {
                margin: 15px;
                width: 40%;
            }
        }

        .title, .subtitle {
            margin-bottom: var(--space-large);
        }
    }
</style>
