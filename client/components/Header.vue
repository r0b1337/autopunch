<template>
    <div class="header" :class="{ fixed }">
        <div class="left">
            <div class="link" @click="scrollTo('#intro')">Accueil</div>
            <div class="link" @click="scrollTo('#emergency')">Une urgence ?</div>
            <div class="link" @click="scrollTo('#performances')">Nos prestations</div>
            <div class="link" @click="scrollTo('#about')">Concept</div>
        </div>

        <img class="logo" alt="Autopunch logo" src="~/assets/images/logo.png"/>

        <div class="right">
            <div class="link" @click="scrollTo('#how')">Comment ça roule ?</div>
            <div class="link" @click="scrollTo('#contact')">Nous contacter</div>
            <div class="link" @click="scrollTo('#comments')">Avis</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Header',
    props: {
        fixed: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        scrollTo (hash) {
            const $ = window.$;

            $('html, body').animate({ scrollTop: $(hash).offset().top - 62 });

            window.location.hash = hash;
        },
    },
};
</script>

<style scoped lang="scss">
    .header {
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        color: var(--color-light);
        padding: var(--space-tiny) 0;
        background-color: transparent;
        width: 100%;

        .logo {
            margin: 0 var(--space-large);
            height: 80px
        }

        .right, .left {
            display: flex;
            align-items: center;
            width: 100%;

            .link {
                all: unset;
                margin: 0 var(--space-small);
                color: var(--color-light);
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                    color: unset;
                }
            }
        }

        .right { justify-content: flex-start; }
        .left { justify-content: flex-end; }

        &.fixed {
            position: fixed;
            background-color: var(--color-light);
            color: var(--color-light-dark);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
            height: var(--header-height);

            .logo {
                height: 50px;
            }

            .link {
                color: var(--color-light-dark);
            }
        }
    }
</style>
