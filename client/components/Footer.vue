<template>
    <div class="footer" v-fade-in>
        <div class="social-buttons">
            <iframe
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FMpunch63&width=180&layout=button_count&action=like&size=small&height=46&appId"
                width="100"
                height="46"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />

            <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button"
                data-url="https://www.autopunch.fr/"
                data-hashtags="#autopunch"
                data-lang="fr"
                data-show-count="false"
            >Tweet</a>
        </div>

        <div class="siret">SIRET: <b>852 068 048 00010</b> © 2020</div>

        <div class="modals">
            <div class="tcu link" @click="$refs.TOS.show()">Conditions d'utilisation</div>
            <div class="gdrp link" @click="$refs.PP.show()">Politique de confidentialité</div>
        </div>

        <div>
            <Modal ref="TOS"><ToS/></Modal>
            <Modal ref="PP"><GPRD/></Modal>
        </div>
    </div>
</template>

<script>
import FadeIn from '~/plugins/fade-in.client.js';
import Modal from '~/components/Modal';
import ToS from '~/components/ToS';
import GPRD from '~/components/GPRD';

export default {
    name: 'Footer',
    directives: {
        FadeIn,
    },
    components: {
        Modal,
        ToS,
        GPRD,
    },
};
</script>

<style scoped lang="scss">
    .footer {
        background-color: var(--color-light-dark);
        padding: var(--space-large);
        color: var(--color-light);

        .social-buttons {
            display: flex;
            justify-content: center;
        }

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
