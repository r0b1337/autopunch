<template>
    <div id="contact" v-fade-in>
        <span class="title">Nous contacter</span>
        <span class="subtitle danger">Pour toute information supplémentaire :</span>
        <div class="infos">
            <div class="info letter">
                <img :src="require('@/assets/images/letter.jpg')" alt="Letter"/>
                <span class="text">auto.<span class="danger">punch</span>63@gmail.com</span>
            </div>
            <div class="info snapchat">
                <img :src="require('@/assets/images/snap.jpg')" alt="Snapchat"/>
                <span class="text">m<span class="danger">punch</span>63</span>
            </div>
            <div class="info number">
                <img :src="require('@/assets/images/phone.jpg')" alt="Phone"/>
                <a class="text number" href="tel:0661360510">0661360510</a>
            </div>
        </div>
    </div>
</template>

<script>
import FadeIn from '~/plugins/fade-in.client.js';

export default {
    name: 'Contact',
    directives: {
        FadeIn,
    },
};
</script>

<style scoped lang="scss">
    @import '~/assets/style/breakpoints.scss';

    #contact {
        padding: var(--space-x-large);
        color: var(--color-dark);

        .title {
            margin-bottom: var(--space-x-large);
        }

        .subtitle {
            margin-bottom: var(--space-x-large);
        }

        .infos {
            display: flex;
            justify-content: center;

            .info {
                margin: 0 var(--space-large);
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                img {
                    max-width: 350px;
                    height: 250px;
                }

                &.snapchat img {
                    transform: translateY(-50px);
                }

                .text {
                    font: var(--font-button);
                    color: var(--color-grey);

                    &.number {
                        text-decoration: underline;
                    }
                }
            }
        }

        @media (max-width: $mobile-breakpoint) {
            padding: var(--space-large);

            .title {
                margin-bottom: var(--space-large);
            }

            .subtitle {
                margin-bottom: var(--space-large);
            }

            .infos {
                flex-direction: column;
                align-items: center;

                .info {
                    margin-bottom: var(--space-large);

                    img {
                        object-fit: contain;
                        margin-bottom: var(--space-base);
                    }

                    &.snapchat img {
                        transform: scale(1.4) translateY(5px);
                    }
                }
            }
        }
    }
</style>
