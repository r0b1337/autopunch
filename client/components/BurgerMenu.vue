<template>
    <div class="burger-menu">
        <div class="wrapper">
            <div class="button" :class="{ open }" @click="open = !open">
                <div id="top" class="line"/>
                <div id="mid" class="line"/>
                <div id="bot" class="line"/>
            </div>

            <div class="menu" :class="{ open }">
                <div class="item"><Link hash="#intro" text="Accueil" color="var(--color-dark)" @click="open = false"/></div>
                <div class="item"><Link hash="#emergency" text="Une urgence ?" color="var(--color-dark)" @click="open = false"/></div>
                <div class="item"><Link hash="#performances" text="Nos prestations" color="var(--color-dark)" @click="open = false"/></div>
                <div class="item"><Link hash="#about" text="Concept" color="var(--color-dark)" @click="open = false"/></div>
                <div class="item"><Link hash="#how" text="Comment ça roule ?" color="var(--color-dark)" @click="open = false"/></div>
                <div class="item"><Link hash="#contact" text="Nous contacter" color="var(--color-dark)" @click="open = false"/></div>
                <div class="item"><Link hash="#comments" text="Avis" color="var(--color-dark)" @click="open = false"/></div>
            </div>
        </div>
    </div>
</template>

<script>
import Link from '~/components/Link';

export default {
    name: 'BurgerMenu',
    components: {
        Link,
    },
    data () {
        return {
            open: false,
        };
    },
};
</script>

<style scoped lang="scss">
    .burger-menu {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;

        .wrapper {
            position: relative;
            width: 100vw;
            transition: all 250ms ease-in-out;

            .button {
                display: flex;
                position: absolute;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 40px;
                background-color: var(--color-danger);
                margin: var(--space-small);
                padding: var(--space-tiny);
                border-radius: 3px;
                cursor: pointer;
                z-index: 4;
                transition: inherit;

                .line {
                    width: 24px;
                    height: 3px;
                    border-radius: 2px;
                    background-color: var(--color-light);
                    margin: 2px 0;
                    transition: inherit;
                    transform-origin: center;
                }

                &.open {
                    background-color: var(--color-light);

                    .line {
                        background-color: var(--color-light-dark);

                        &#top { transform: rotate(45deg) translate(5px, 5px); }
                        &#mid { width: 0; }
                        &#bot { transform: rotate(-45deg) translate(5px, -5px); }
                    }
                }
            }

            .menu {
                background-color: var(--color-light);
                color: var(--color-light-dark);
                padding: var(--space-large);
                padding-top: calc(var(--space-large) * 1.25);
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 3;
                transition: inherit;
                transform: translateY(-100%);

                .item {
                    padding: calc(var(--space-small) * 1.25) 0;
                    padding-left: var(--space-base);
                    border-bottom: 1px solid #eee;
                    text-align: left;
                }

                &.open { transform: translateY(0); }
            }
        }
    }
</style>
