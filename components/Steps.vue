<template>
    <div class="steps">
        <div v-for="(step, index) in steps" :key="index" class="step">
            <div class="number">
                <div :class="{ hidden: !index }" class="left line"/>
                <span class="digit">{{ index + 1 }}</span>
                <div :class="{ hidden: index === steps.length - 1 }" class="right line"/>
            </div>
            <div ref="title" class="step-title">{{ step.title }}</div>
            <div class="content" v-html="step.content"/>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Steps',
    props: {
        steps: {
            type: Array,
            default: () => [],
        },
    },
    mounted () {
        this.fixTitles();
    },
    methods: {
        fixTitles () {
            const $ = window.$;
            const titles = this.$refs.title;
            const maxHeight = titles.reduce((acc = 0, title) => {
                const height = $(title).outerHeight();

                if (height > acc) return height;
            });

            titles.forEach(title => (title.style.height = `${maxHeight}px`));
        },
    },
};
</script>

<style scoped lang="scss">
    .hidden {
        visibility: hidden;
    }

    .steps {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .step {
            max-width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin: 0 var(--space-base);

            .number, .step-title, .content {
                margin: var(--space-small) 0;
            }

            .number {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                .line {
                    height: 1px;
                    width: 100%;
                    background-color: var(--color-grey);
                    opacity: 0.3;

                    &.left {
                        transform: translateX(calc(var(--space-base) * -1));
                    }

                    &.right {
                        transform: translateX(var(--space-base));
                    }
                }

                .digit {
                    font: var(--font-button);
                    color: var(--color-grey);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    align-self: center;
                    min-width: 54px;
                    min-height: 54px;
                    border: 1px solid var(--color-grey);
                }
            }

            .step-title {
                font: var(--font-subtitle);
                color: black;
            }

            .content {
                font: var(--font-points);
                line-height: 150%;
            }
        }
    }
</style>
