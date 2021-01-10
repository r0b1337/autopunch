<template>
    <div class="container">
        <transition name="fade-in">
            <div v-if="state" class="backdrop"/>
        </transition>

        <transition name="fade-up">
            <div v-if="state" class="modal">
                <div class="close-button" @click="dismiss()">×</div>
                <slot/>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    data () {
        return {
            state: false,
        };
    },
    methods: {
        show () { this.state = true; },
        dismiss () { this.state = false; },
    },
};
</script>

<style scoped lang="scss">
    @import '~/assets/style/breakpoints.scss';

    .container {
        height: 0;
        width: 0;

        .backdrop {
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: black;
            top: 0;
            left: 0;
            z-index: 2;
            opacity: 0.4;
            pointer-events: none;

            // Vue transition classes that hooks with the transition elements (https://vuejs.org/v2/guide/transitions.html)
            &.fade-in-enter-active, &.fade-in-leave-active { transition: opacity .5s ease-in-out; }
            &.fade-in-enter, &.fade-in-leave-to { opacity: 0; }
        }

        .modal {
            position: fixed;
            height: 50%;
            width: 50%;
            top: 50%;
            left: 50%;
            z-index: 3;
            overflow: scroll;
            padding: var(--space-base) var(--space-large);

            border-radius: var(--border-radius-base);
            background-color: var(--color-light);
            color: var(--color-dark);
            opacity: 1;
            text-align: left;

            transform: translate(-50%, -50%);

            .close-button {
                font: var(--font-large);
                cursor: pointer;
                position: sticky;
                top: 0;
                float: right;

                width: fit-content;
                text-align: right;
                line-height: 0.5;
                color: var(--color-grey);

                transform: translateX(calc(var(--space-large) / 2));;
            }

            // Vue transition classes that hooks with the transition elements (https://vuejs.org/v2/guide/transitions.html)
            &.fade-up-enter-active, &.fade-up-leave-active { transition: all 0.5s ease-in-out; }
            &.fade-up-enter, &.fade-up-leave-to {
                opacity: 0;
                transform: translate(-50%, -50%) translateY(var(--space-large));
            }
        }

        @media (max-width: $mobile-breakpoint) {
            .modal {
                width: 80%;
                height: 90%;
            }
        }
    }
</style>
