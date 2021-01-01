<template>
    <div class="burger-menu">
        <div class="wrapper">
            <div class="button" :class="{ open }" @click="open = !open">
                <div id="top" class="line"/>
                <div id="mid" class="line"/>
                <div id="bot" class="line"/>
            </div>

            <div class="menu" :class="{ open }">
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BurgerMenu',
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
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 3;
                transition: inherit;
                transform: translateY(-100%);

                &.open {
                    transform: translateY(0);
                }
            }
        }
    }
</style>
