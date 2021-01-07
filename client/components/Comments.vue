<template>
    <div id="comments" v-fade-in>
        <span class="title">Ce que l'on pense de nous</span>
        <span class="subtitle danger">Merci</span>
        <div id="disqus_thread"/>
    </div>
</template>

<script>
import FadeIn from '~/plugins/fade-in.client.js';

export default {
    name: 'Comments',
    directives: {
        FadeIn,
    },
};
</script>

<style scoped lang="scss">
    #comments {
        padding: calc(var(--space-x-large) / 2) var(--space-large);
        background-color: #e5ecf1;

        .subtitle, .title {
            margin-bottom: var(--space-large);
        }

        .title {
            font: var(--font-title);
            font-size: 36px;
            color: var(--color-dark);
        }

        .subtitle {
            font: var(--font-points-bold);
        }
    }
</style>
