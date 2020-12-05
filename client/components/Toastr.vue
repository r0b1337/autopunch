<template>
    <div ref="toastr" class="toastr" :class="{ done: !loading, success, error }">
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
            success: false,
            error: false,
        };
    },
    computed: {
        app () {
            let parent = this.$parent;
            while (parent && parent._name !== '<App>') parent = parent.$parent;
            return parent;
        },
    },
    async mounted () {
        await this.wait(0); // acts like a nextTick so the enter transition can happen

        const $ = window.$;
        const toastr = $(this.$refs.toastr);
        const text = toastr.find('.text');

        toastr.css({ width: `${text.width()}px`, height: `${text.height()}px` });

        // waiting for promise resolution + 1000ms bonus to finish loading
        await this.wait(1000);
        try {
            await this.promise;
            this.success = true;
        } catch (error) {
            this.error = true;
            this.text = 'Une erreur est survenue';
            toastr.css({ width: `${text.width()}px`, height: `${text.height()}px` });
        }
        this.loading = false;
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
        display: flex;
        align-items: center;
        max-height: 400px;
        padding: var(--space-large);
        margin: var(--space-small);
        border-radius: var(--border-radius-base);
        background-color: var(--color-progress);
        z-index: 4;

        .wrapper {
            width: fit-content;
            height: fit-content;
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

        &.error {
            background-color: var(--color-danger);
        }

        transition: all 250ms ease-in-out;
    }
</style>
