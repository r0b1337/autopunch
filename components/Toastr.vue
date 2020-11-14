<template>
    <div ref="toastr" class="toastr" :class="{ done: !loading, enter }">
        <div class="wrapper">
            <img class="spinner" src="~/assets/images/spinner.svg">
            <div class="text">{{ text }}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Toastr',
    props: {
        text: {
            type: String,
            default: '',
        },
        promise: {
            type: Promise,
            default: null,
        },
    },
    data () {
        return {
            loading: true,
            enter: false,
        };
    },
    async mounted () {
        await this.wait(0); // acts like a nextTick
        this.enter = true;

        // waiting for promise resolution + 1000ms bonus to finish loading
        await this.promise;
        await this.wait(1000);
        this.loading = false;

        // toastr leaves the view 1s after loading finished
        await this.wait(1000);
        this.enter = false;

        // destroy the toastr instance and remove element from the DOM
        await this.wait(1000);
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
    },
    methods: {
        wait (time) {
            return new Promise(resolve => setTimeout(resolve, time));
        },
    },
};
</script>

<style scoped lang="scss">
    .toastr {
        position: fixed;
        top: var(--space-small);
        right: var(--space-small);
        max-width: 40%;
        width: fit-content;
        height: fit-content;
        padding: var(--space-large);
        border-radius: var(--border-radius-base);
        background-color: var(--color-progress);
        z-index: 4;
        transform: translateX(150%);

        .wrapper {
            width: 100%;
            height: 100%;
            position: relative;
            transition: inherit;
        }

        .text {
            font: var(--font-button);
            color: var(--color-light);
            opacity: 0;
            transform: translateX(50%);
            transition: inherit;
            transition-delay: 50ms;
        }

        .spinner {
            transform: translate(-50%, -50%);
            position: absolute;
            top: 50%;
            left: 50%;
            transition: all 250ms ease-in-out;
        }

        &.done {
            background-color: var(--color-success);

            .spinner {
                opacity: 0;
                transform: translate(-50%, -50%);
            }

            .text {
                transform: translateX(0);
                opacity: 1;
            }
        }

        &.enter {
            transform: translateX(0);
        }

        transition: all 250ms ease-in-out;
    }
</style>
