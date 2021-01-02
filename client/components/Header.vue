<template>
    <div class="header" :class="{ fixed }">
        <div class="left">
            <Link hash="#intro" text="Accueil"/>
            <Link hash="#emergency" text="Une urgence ?"/>
            <Link hash="#performances" text="Nos prestations"/>
            <Link hash="#about" text="Concept"/>
        </div>

        <img class="logo" alt="Autopunch logo" src="~/assets/images/logo.png"/>

        <div class="right">
            <Link hash="#how" text="Comment ça roule ?"/>
            <Link hash="#contact" text="Nous contacter"/>
            <Link hash="#comments" text="Avis"/>
            <Button text="RENDEZ-VOUS" inline @click="$root.scrollTo('#meeting')"/>
        </div>
    </div>
</template>

<script>
import Link from '~/components/Link';
import Button from '~/components/Button';

export default {
    name: 'Header',
    components: {
        Link,
        Button,
    },
    props: {
        fixed: {
            type: Boolean,
            default: false,
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
