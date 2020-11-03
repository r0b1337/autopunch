<template>
  <div id="app">
    <Intro></Intro>
    <Emergency></Emergency>
    <Benefits></Benefits>
    <Performances></Performances>>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import Emergency from '@/components/Emergency.vue';
import Benefits from '@/components/Benefits.vue';
import Performances from '@/components/Performances';

export default {
    name: 'App',
    components: {
        Intro,
        Emergency,
        Benefits,
        Performances,
    },
};
</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';
    @import '@/assets/style/global.scss';

    @font-face {
        font-family: Roboto;
        src: url('assets/fonts/Roboto.ttf');
    }

    @font-face {
        font-family: Roboto Bold;
        src: url('assets/fonts/Roboto_Bold.ttf');
    }

    @font-face {
        font-family: Bebas Neu Bold;
        src: url('assets/fonts/Bebas_Neu_Bold.woff2');
    }

    @font-face {
        font-family: Bitter;
        src: url('assets/fonts/Bitter.woff2');
    }

    @font-face {
        font-family: Roboto Condensed;
        src: url('assets/fonts/Roboto_Condensed.woff2');
    }
</style>
