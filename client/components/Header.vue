<template>
    <div class="header">
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
    methods: {
        scrollTo (hash) {
            const $ = window.$;

            $('#app').animate({ scrollTop: $(hash).offset().top });

            window.location.hash = hash;
        },
    },
};
</script>

<style scoped lang="scss">
    .header {
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        color: var(--color-light);
        margin: var(--space-base) 0;
        background-color: transparent;
        width: 100%;
        height: 50px;

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
    }
</style>
