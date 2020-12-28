<template>
    <div class="footer" v-fade-in>
        <div class="siret">SIRET: <b>852 068 048 00010</b> © 2020</div>
        <div class="modals">
            <div class="tcu link">Conditions d'utilisation</div>
            <div class="gdrp link">Politique de confidentialité</div>
        </div>
    </div>
</template>

<script>
import FadeIn from '~/plugins/fade-in.client.js';

export default {
    name: 'Footer',
    directives: {
        FadeIn,
    },
};
</script>

<style scoped lang="scss">
    .footer {
        background-color: var(--color-light-dark);
        padding: var(--space-large);
        color: var(--color-light);

        .siret {
            margin-bottom: var(--space-base);
        }

        .modals {
            display: flex;
            justify-content: center;
            align-items: center;

            .tcu {
                margin-right: var(--space-base);
            }
        }
    }
</style>
