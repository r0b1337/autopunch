<template>
    <div id="meeting" v-fade-in v-parallax="'assets/images/engine-tools.jpg'">
        <span class="title">PRENEZ RENDEZ-VOUS </span>
        <span class="subtitle">Soit par téléphone ou par email via notre formulaire ci dessous.</span>
        <a class="number link" href="tel:0661360510">0661360510</a>

        <form>
            <div class="infos">
                <input v-model="name" type="text" placeholder="Nom / Prénom"/>
                <input v-model="email" type="text" placeholder="Email"/>
            </div>

            <textarea
                id="subject"
                v-model="message"
                rows="5"
                placeholder="De quelles prestations avez vous besoin ? Transmettez nous les détails sur le modèle de votre véhicule (modèle, kilométrage, immatriculation, VIN *) pour une réponse toujours plus rapide."
            />
            <input id="contitions" type="checkbox"/>
            <label for="contitions">
                En continuant, vous acceptez nos
                <span class="link" @click="showTOS()">Conditions d'utilisation</span> et
                <span class="link" @click="showPP()">Politique de confidentialité</span>
            </label>

            <Modal ref="TOS"><ToS/></Modal>
            <Modal ref="PP"><GPRD/></Modal>
        </form>

        <Button text="Envoyer" @click="sendMail()"/>
    </div>
</template>

<script>
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import FadeIn from '~/plugins/fade-in.client.js';
import Parallax from '~/plugins/parallax.client.js';
import Modal from '~/components/Modal';
import ToS from '~/components/ToS';
import GPRD from '~/components/GPRD';

export default {
    name: 'Meeting',
    directives: {
        FadeIn,
        Parallax,
    },
    components: {
        Modal,
        ToS,
        GPRD,
    },
    data () {
        return {
            name: '',
            email: '',
            message: '',
        };
    },
    computed: {
        app () {
            let parent = this.$parent;
            while (parent && parent._name !== '<App>') parent = parent.$parent;
            return parent;
        },
    },
    methods: {
        showTOS () { this.$refs.TOS.show(); },
        showPP () { this.$refs.PP.show(); },
        async sendMail () {
            const promise = axios.post('https://autopunch.herokuapp.com/mail', {
                name: this.name,
                email: this.email,
                message: this.message,
            });
            const id = uuid();
            // inserting toastr into the DOM
            this.app.toastrs.push({ promise, text: 'Votre mail a ete envoye avec succes !', id });
            // waiting resolution
            await promise;
            // removing toastr from the DOM 1s after resolution
            setTimeout(() => {
                this.app.toastrs = this.app.toastrs.filter(toastr => toastr.id !== id);
            }, 1500);
        },
    },
};
</script>

<style scoped lang="scss">
    @import '~/assets/style/breakpoints.scss';

    #meeting {
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
            color: var(--color-light);
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
                outline: none;
                resize: none;
            }

            label {
                font: var(--font-points);
            }
        }

        @media (max-width: $mobile-breakpoint) {
            form {
                padding: 0 var(--space-base);

                .infos {
                    flex-direction: column;
                }
            }
        }
    }
</style>
